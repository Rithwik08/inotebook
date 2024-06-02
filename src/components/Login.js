import React , {useState} from 'react'
import { Link, useHistory } from "react-router-dom";
function Login() {
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
<div className="carousel-inner"id="login" >
<div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1574786577070-70b30e49c99c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
        
          <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action method="post" onSubmit={handleSubmit}>
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">email:</label><br />
                    <input type="email" name="email" id="email"value={credentials.email} onChange={onChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br />
                    <input type="password" name="password" id="password" value={credentials.password} onChange={onChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <button type='submit' className='btn btn-info my-2 ' >Submit</button>
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="/Register" className="text-info">Register here</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    
  )
}


export default Login


