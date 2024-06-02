import React , {useState} from 'react'
import { useHistory } from "react-router-dom";

function Login2() {
    const [credentials, setcredentials] = useState({email:" ",password:" "})
    let history = useHistory();
    
    const handleSubmit= async (e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
    
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email , password: credentials.password }),
    
        });
        const json= await response.json()
        console.log(json)
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
    <form onSubmit={handleSubmit}>

  <div classsName="mb-3">
    <label htmlFor="email" classsName="form-label">Email-address</label>
    <input type="email" classsName="form-control" id="email" onChange={onChange } name='email' aria-describedby="emailHelp"/>
    <div id="emailHelp" classsName="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div classsName="mb-3">
    <label htmlFor="password" classsName="form-label">Password</label>
    <input type="password" classsName="form-control" onChange={onChange} name='pasword' id="password"/>
  </div>

  <button type="submit" classsName="btn btn-primary">Submit</button>

</form>
    </>
  )
}

export default Login2