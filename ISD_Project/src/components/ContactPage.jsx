import React from 'react';
import { Link, useLocation } from 'react-router-dom'

//import raktim from '../assets/images/Raktim.png'
//import swapnil from '../assets/images/Swapnil.png'
//import younus from '../assets/images/Younus.png'
//import anika from '../assets/images/anika2.png'
//import rafi from '../assets/images/Rafi.png'


const ContactPage = () => {
    return(
        <div>
              <div className='container'>
                        <div className="c1">
                            <h1>Support Contact center</h1>
                        
                        </div>
                        <br/>
                        <br/>
                        <div className="footer__content">
                            <div className='blog1'><p>
                                <div className='c2'>  
                                    <h1>Contact Order</h1><br/><h3>
                                    Name:    Swapnil Sharma Sarker<br />
                                    Email Adderss:
                                      <strong>190104143@aust.edu  </strong></h3>   </div><br/>
                              
                                   
                                </p>
                            </div>
                            <br/>
                            <div className='blog'>
                                <p>
                                <div className='c2'>  
                                    <h1>Return And Refunds</h1><br/><h3>
                                    Name: Raufun Talukder Raktim<br />
                                    Email Adderss:
                                      <strong>190104151@aust.edu  </strong></h3>   </div><br/>
                                 
                                </p>
                            </div>
                            <br/>
                            <div className='blog1'>
                                <p>
                                <div className='c2'>  
                                    <h1>HelpLine</h1><br/><h3>
                                    Name: Younus Hossain Ahsan<br />
                                    Email Adderss:
                                      <strong>190104131@aust.edu  </strong></h3>   </div><br/>
                                   
                                </p>
                            </div>
                            <br/>
                            <div className='blog'>
                                <p>
                                <div className='c2'>  
                                    <h1>Complaint and Customer service </h1><br/><h3>
                                    Name: Anika Tabasum Aurin<br />
                                    Email Adderss:
                                      <strong>190104147@aust.edu  </strong></h3>   </div><br/>
                                  
                                </p>
                            </div>
                            <br/>
                            <div className='blog1'>
                                <p>
                                <div className='c2'>  
                                    <h1>Delivery of product</h1><br/><h3>
                                    Name: Noor-E-Arifin Rafi<br />
                                    Email Adderss: <strong>190104148@aust.edu  </strong></h3>   </div><br/>
                                   
                                </p>
                            </div>
                            <br/>
                        </div>
                    </div>   
        </div>
    );
};

export default ContactPage;