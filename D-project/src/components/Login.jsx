import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect (()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  },)



  async function collection() {
    console.log(email, password);
    let result = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      }
    });

    result = await result.json()
    
    console.log(result);
    if(result.name){
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
    else{
      alert(" please enter valid details")
    }
  }

  return (
    <div className="signup">
      <div className="register">
        <h2>Login</h2>
      </div>

      <input
        className="inputbox"
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        className="inputbox"
        placeholder="PassWord"
        type="Password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <button className="button" onClick={collection}>
       Login
      </button>
    </div>
    
  );
};

export default Login;
