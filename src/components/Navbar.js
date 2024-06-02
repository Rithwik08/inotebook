import React from "react";
import { Link , useHistory, useLocation } from "react-router-dom";
import img from "./favicon.ico"

  

export default function Navbar(props) {
  let history = useHistory();
  const handleLogout = ()=> {
    localStorage.removeItem('token');
    history.push('/Login');
  }
  let location = useLocation();
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className={`navbar-brand ${location.pathname==="/"? "active":""}`} to="/">
            <img className="logo, mx-2" src={img} alt='' />
            <b>{props.title}</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>RS Types</b>
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <ul style={{display:"flex"}}>
            <ul style={{listStyleType:"none",padding:0}}>
            <li style={{fontSize:"1.2rem"}}><Link className="dropdown-item" to="#"> <b>Optical RemoteSensing</b></Link></li>
            <li><Link className="dropdown-item" to="/RsTypes"><b>Hyperspectral</b></Link></li>
            <li><Link className="dropdown-item" to="/MultiSpectral"><b>MultiSpectral</b></Link></li>
          </ul>
          <ul style={{listStyleType:"none",padding:0}}> 
            <li style={{fontSize:"1.2rem"}}><Link className="dropdown-item" to="#"><b>Microwave RemoteSensing</b></Link></li>
            <li><Link className="dropdown-item" to="/Active"><b>Active</b></Link></li>
            <li><Link className="dropdown-item" to="/Passive"><b>Passive</b></Link></li>
            
          </ul>
         
            </ul>
         
          </div>
          
        </li>
        <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Resources</b>
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <ul style={{display:"flex"}}>
            <ul style={{listStyleType:"none",padding:0}}>
            <li style={{fontSize:"1.2rem"}}><Link className="dropdown-item" to="#"> <b>Software</b></Link></li>
            <li style={{fontSize:"1.1rem"}}><Link className="dropdown-item" to="#"> <b>Open Software</b></Link></li>
            <li><a className="dropdown-item" href="https://step.esa.int/main/download/polsarpro-v6-0-biomass-edition-toolbox-download/"><b>Polsar pro</b></a></li>
            <li><a className="dropdown-item" href="https://step.esa.int/main/download/snap-download/"><b>Snap esa</b></a></li>
            <li><a className="dropdown-item" href="https://imagej.net/ij/download.html"><b>ImageJ</b></a></li>
            <li style={{fontSize:"1.1rem"}}><Link className="dropdown-item" to="#"> <b>Paid Software</b></Link></li>
            <li><a className="dropdown-item" href="https://www.nv5geospatialsoftware.com/docs/envi-install.html"><b>N|V|5</b></a></li>
            <li><a className="dropdown-item" href="https://hexagon.com/products/erdas-imagine"><b>ERDAS imagine</b></a></li>
            </ul>
            <ul style={{listStyleType:"none",padding:0}}>
            <li style={{fontSize:"1.2rem"}}><Link className="dropdown-item" to="#"> <b>Research Paper</b></Link></li>
            <li><a className="dropdown-item" href="https://scihub.copernicus.eu/"><b>Sentinel</b></a></li>
            <li><a className="dropdown-item" href="https://uavsar.jpl.nasa.gov/cgi-bin/data.pl"><b>Uavsar</b></a></li>
            <li><a className="dropdown-item" href="https://asf.alaska.edu/datasets/daac/airsar/"><b>Airsar</b></a></li>
            <li><a className="dropdown-item" href="https://bhoonidhi.nrsc.gov.in/bhoonidhi/home.html"><b>Bhoonidhi</b></a></li>
            <li><a className="dropdown-item" href="https://www.capellaspace.com/"><b>Capella space</b></a></li>
            </ul>
          <ul style={{listStyleType:"none",padding:0}}> 
            <li style={{fontSize:"1.2rem"}}><Link className="dropdown-item" to="#"><b>Videos</b></Link></li>
            
            
            <li><a className="dropdown-item" href="https://youtu.be/yiyfz89MoRc"><b>Satellite Image Processing</b></a></li>
            
          </ul>
          
         
            </ul>
         
          </div>
          
        </li>
        
        
             
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Educational Institutes</b>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Diploma">
                      <b>Diploma</b>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/UnderGraduate">
                      <b>UG</b>
                    </Link>
                  </li>
                 
                  <li>
                    <Link className="dropdown-item" to="/Phd">
                      <b>PhD</b>
                    </Link>
                  </li>
                  
                 
                  
                </ul>
              </li>
      
              
             

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/news"? "active":""}`} to="/news">
                    <b>News</b>
                  </Link>
                </li>
              </ul>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Vhub"? "active":""}`}  to="/Vhub">
                  <b>Visionaries Hub</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/npublic"? "active":""}`}  to="/npublic">
                  <b>NotePublic</b>
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-end">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Keywords"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {!localStorage.getItem('token')?<>
            <Link className="btn btn-light mx-2" to="/Login" role="button"><b>Login</b></Link>
            <Link className="btn btn-light mx-2" to="/Register" role="button"><b>Sign-up</b></Link>
            </>:<ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><button className="btn btn-light mx-2" onClick={handleLogout} role="button"><b>Logout</b></button> </li>
               <li className="nav-item"><Link className={`nav-link ${location.pathname==="/notes"? "active ":""}`}  to="/notes">
                  <b>Notes</b>
                </Link>
                </li>
                </ul>}
                </div>
                
          </div>
        </div>
      </nav>
    </>
  );
}
