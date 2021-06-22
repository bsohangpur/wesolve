import React from 'react'
import { NavLink } from 'react-router-dom'
import "./css/about.css"
import AboutImg from "./image/about.svg"

const About = () => {
    return (
    <div className="about">
        <section className="">
             <div className="container-fluid nav_bg">
                 <div className="row">
                     <div className="col-10 mx-auto">
                         <div className="row">

                                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                     <div className="meanabout">
                                         <h1 className="">
                                             Global Web Developer And Marketing Expert, <strong>WeSolve Inc</strong> Provide Quality Work to Customer
                                         </h1>
                                         <p className="mt-3 p">
                                             We are helping since 2016, Complete more then 100 project. 
                                         </p>
                                         <div className="buttons">
                                            <NavLink to="/service">
                                                <button className="Button">Get Started</button>
                                            </NavLink>
                                         </div>
                                     </div>
                                 </div>
                                     <div className="col-lg-6 pic order-1 order-lg-2">
                                         <img className="aboutimg" align="right" src={AboutImg} alt="home img" />
                                     </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
     </div>
 
    )
}

export default About
