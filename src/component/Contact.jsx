import React from 'react'
import ContactImg from "./image/contact.svg"
import "./css/contact.css"

const Contact = () => {
    return (
        <div className="contact">
        
                                        
                                       
                                            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1">
                    <img src={ContactImg} alt="contact img" className="contactimg" /> 
                        </div>
                        <div className="col-lg-6 order-2 order-lg-2">
                        <form>
                            <div className="row">
                                <label htmlFor="full-name" className="form-label">Full Name</label>
                                <div className="col">

                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email-id" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone-no" className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" placeholder="123-45-678" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">Eg. 565 454 3425</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn button">Submit</button>
                        </form>              
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
