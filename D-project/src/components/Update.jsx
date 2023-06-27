import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";


const Update = () => {
  const [name, setName] = useState("");
  const [price , setprice] = useState("");
  const [category , setcategory] = useState("");
  const [company , setcompany] = useState("");

  const params = useParams();
  const nav = useNavigate();

  useEffect(()=>{
    getData();
 
  },[])
  
  async function getData(){

    let result = await fetch('http://localhost:3000/Product/'+params.id )
    result = await result.json();
    setName(result.name);
    setprice(result.price);
    setcategory(result.category);
    setcompany(result.company);
    console.warn(result);
  }
  

  async function collection() {
   
    console.log(name);
    let result = await fetch('http://localhost:3000/Product/'+params.id ,{
      method : "Put",
      body : JSON.stringify({name,price,category,company}),
      headers : {
        "Content-Type" : "application/json"
      }
    });
    result = await result.json();

    console.log(result);

   nav('/');

  }

  return (
    <div className="signup">
      <div className="register">
        <h2>Update-product</h2>
        
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
      
      <input
        className="inputbox"
        placeholder="-- Enter price"
        type="text"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      ></input>
      
      <input
        className="inputbox"
        placeholder="-- Enter category"
        type="text"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      ></input>
    
      <input
        className="inputbox"
        placeholder="-- Enter company"
        type="text"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      ></input>
      
      <button className="button" onClick={collection}>
       Update
      </button>
    </div>
  );
};

export default Update;