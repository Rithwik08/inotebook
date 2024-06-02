import React from 'react'

function Aboutus() {
  return (
<section className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 mr-auto col-sm-6 col-md-6">
                <div className="widget footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title">About Us</h5>
                    <p className="mt-3"> Welcome to our platform dedicated to remote sensing enthusiasts and professionals! At [Your Company Name], we have created a centralized environment where individuals can find comprehensive information about remote sensing all in one place.</p>

                    <ul className="list-inline footer-socials">
        <li className="list-inline-item"><a href="#"><i className="fa fa-instagram fa-2x"></i></a>
        </li>
        <li className="list-inline-item"> <a href="#"><i className="fa fa-facebook fa-2x"></i></a>
        </li>
        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
        </li>
        <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest fa-2x"></i></a>
        </li>
    </ul>
                </div>
            </div>
        
          
        
            
            <div className="col-lg-g col-sm-6 col-md-6">
                <div className="footer-widget footer-contact mb-5 mb-lg-0">
                    <h5 className="widget-title">Contact </h5>
                    
                    <ul className="list-unstyled">
                        <li><i className="bi bi-headphone"></i>
                            <div>
                                <strong>Phone number</strong>
                                +91 7710074142
                            </div>
                            
                        </li>
                        <li> <i className="bi bi-envelop"></i>
                            <div>
                                <strong>Email Address</strong>
                                vit@vit.edu.in
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-btm">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-12">
                    <div className="copyright text-lg-center">
                        <p>© Copyright ResLearning. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
  )
}

export default Aboutus