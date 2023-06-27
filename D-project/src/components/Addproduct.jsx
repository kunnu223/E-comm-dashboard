import { useState } from "react";


const Addproduct = () => {
  const [name, setName] = useState("");
  const [price , setprice] = useState("");
  const [category , setcategory] = useState("");
  const [company , setcompany] = useState("");
  const [error , seterror] = useState(false);

  

 async function collection() {
   
  if(!name || !price || !category || !company)
  { 
    seterror(true);
    return false;
  }

   console.log(name,price,category,company)
   let userId = JSON.parse(localStorage.getItem('user'));
   let result = await fetch('http://localhost:3000/add-product', {
      method: 'post',
      body: JSON.stringify({ name, price , category , company , userId }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
   console.log(result);
   alert("Item Added Successfully");
  }

  return (
    <div className="signup">
      <div className="register">
        <h2>Add-product</h2>
      </div>

      <input
        className="inputbox"
        placeholder="-- Enter name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      {error && !name &&<span className="input-span">Enter valid name</span>}
      <input
        className="inputbox"
        placeholder="-- Enter price"
        type="text"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      ></input>
      {error && !price &&<span className="input-span">Enter valid price</span>}
      <input
        className="inputbox"
        placeholder="-- Enter category"
        type="text"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      ></input>
      {error && !category &&<span className="input-span">Enter valid category</span>}
      <input
        className="inputbox"
        placeholder="-- Enter company"
        type="text"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      ></input>
      {error && !company &&<span className="input-span">Enter valid company</span>}
      <button className="button" onClick={collection}>
       Add
      </button>
    </div>
  );
};

export default Addproduct;
