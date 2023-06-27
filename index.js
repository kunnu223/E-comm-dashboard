const User = require('./db/User');
const cors = require('cors')
const Product = require('./db/Product');
require('./db/config'); 
const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname , "./D-project/dist")));



app.use(cors());
app.use(express.json());


app.post('/register' , async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post('/login' , async (req , res) =>{
    if(req.body.password && req.body.email){ 
   let user = await User.findOne(req.body).select("-password")
   res.send(user);
    }
    else{
        res.send("no result found");
    }
})


app.post('/add-product' , async (req , res) =>{
    let product = new Product(req.body);
    let final = await product.save();
    res.send(final);
})


app.get('/products',async (req , res)=>{
    let result = await Product.find();
    if(result.length > 0)
    {
        res.send(result);
    }
    else{
        res.send({"result" : "no result found"});
    }
;})

app.delete('/product/:id' , async (req ,res)=>{
    let result = await Product.deleteOne({_id:req.params.id})
   res.send(result);

})

app.get('/product/:id' , async (req , res)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result)
    {
        res.send(result);
    }else{
        res.send({id:"no result found"});
    }
    
})

app.put('/product/:id' , async (req , res)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        { $set : req.body}
    )
     res.send(result); 
})

app.get('/search/:key' , async (req,res)=>{
    let result = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    })
    res.send(result)
})


app.get('*' , function (req , res){
   res.sendFile(path.join(__dirname , "./D-project/dist/index.html"))
})

app.listen(3000); 