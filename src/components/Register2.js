import React , {useState} from 'react'
import img from './images/ethan-rheams-sSOYcNt3R54-unsplash2.jpg'
import { Link, useHistory } from "react-router-dom";

function Register2() {
  const [credentials, setcredentials] = useState({name:"",email:" ",password:" ",cpassword:""})
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
   
    <div className="carousel-inner"id="Register">
    <div className="carousel-item active">
             <img src={img}
               className="d-block " alt="..."/>

        
        <div className="carousel-caption d-none d-md-block">
          <div id="register-row" className="row justify-content-center align-items-center">
            <div id="register-column" className="col-md-6">
              <div id="register-box" className="col-md-12">
                <form onSubmit={handlesubmit} id="register-form" className="form" action method="post">
                  <h3 className="text-center text-info">Register</h3>
                  <div className="form-group">
                    <label htmlFor="name" className="text-info">Username:</label><br />
                    <input type="text" name="name" id="name " onChange={onChange} minLength={2} required className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">Email:</label><br />
                    <input type="email" name="email" id="email" onChange={onChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br />
                    <input type="password" name="password" id="password" onChange={onChange} minLength={5} required className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword" className="text-info">Confirm Password:</label><br />
                    <input type="password" name="cpassword" id="cpassword" onChange={onChange} minLength={5} required className="form-control" />
                  </div>
                  <div className="form-group my-2">
                    <input type="submit" name="submit" className="btn btn-info btn-md"  onChange={onChange} defaultValue="submit" />
                  </div>
                  <div id="register-link" className="text-right">
                    alraedy have an account?
                    <Link to="/Login" className="text-info">Login</Link>
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

export default Register2