import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

  const [name , setName ] = useState("");
  const [email , setEmail ] = useState("");
  const [password , setpassword ] = useState("");
  const navigate = useNavigate();

  useEffect (()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })

  async function collection() {
    console.log(name, email, password);
    let result = await fetch('http://localhost:3000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    result = await result.json();
    localStorage.setItem('user' , JSON.stringify(result));
    console.log(result);

      navigate("/");


  }

  return (
    <div className="signup">
      <div className='register'><h2>Register</h2></div>
      
      <input className = 'inputbox' placeholder="Enter Name" type="text"  value={name}
      onChange={(e)=>{
        setName(e.target.value);
    
      }}>
        </input> 
      <input className = 'inputbox' placeholder="Email" type="text"  value={email}
      onChange={(e)=>{
        setEmail(e.target.value);
       
      }}>
        </input> 
      <input className = 'inputbox' placeholder="PassWord" type="Password"  value={password}
      onChange={(e)=>{
        setpassword(e.target.value);
        
      }}>

      </input>
      <button className="button"  onClick={collection}>Sign-Up</button>
     
    </div>
  )
}

export default SignUp