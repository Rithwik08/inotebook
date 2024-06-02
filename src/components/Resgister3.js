import React , {useState} from 'react'
import { useHistory } from "react-router-dom";

function Resgister3() {
    const [credentials, setcredentials] = useState({name:" ",email:" ",password:" ",cpassword:""})
    let history = useHistory();
    
    const handlesubmit= async (e)=>{
      e.preventDefault();
     const {name,email,password}=credentials;
      const response = await fetch("http://localhost:5000/api/auth/createuser",
       {
        method: "POST",
    
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name,email,password}),
    
        });
        const json= await response.json()
        console.log(json);
        if (json.success){
         //Save the auth token and redirect
         localStorage.setItem('token',json.authtoken);
         history.push("/")
        }
        else{
          alert("Invalid Credentials")
        }
       
      }
      const onChange= (e)=>{
          setcredentials({...credentials,[e.target.name]: e.target.value})
        }
  return (
    <>
    <form onSubmit={handlesubmit}>
    <div classsName="mb-3">
    <label htmlFor="name" classsName="form-label">Name</label>
    <input type="text" classsName="form-control" id="name" onChange={onChange} name='name' aria-describedby="emailHelp"/>
  </div>
        
  <div classsName="mb-3">
    <label htmlFor="email" classsName="form-label">Email address</label>
    <input type="email" classsName="form-control" id="email" onChange={onChange } name='email' aria-describedby="emailHelp"/>
    <div id="emailHelp" classsName="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div classsName="mb-3">
    <label htmlFor="password" classsName="form-label">Password</label>
    <input type="password" classsName="form-control" onChange={onChange} name='pasword' id="password"/>
  </div>
  <div classsName="mb-3">
    <label htmlFor="cpassword" classsName="form-label">Confirm Password</label>
    <input type="cpassword" classsName="form-control" onChange={onChange} name='cpassword' id="cpassword"/>
  </div>
  
  <button type="submit" classsName="btn btn-primary">Submit</button>
</form>
    </> 
  )
}

export default Resgister3