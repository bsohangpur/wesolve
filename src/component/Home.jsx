import React from 'react'
import "./css/home.css"
import { NavLink } from 'react-router-dom'
import HomeImg from "./image/home.svg"

const Home = () => {
    return (
        <div className="home">
           <section className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 homes">
                                        <div className="meanhead">
                                            <h1 className="">
                                                Establish Your Business With <strong>WeSolve Inc</strong>
                                            </h1>
                                            <p className="mt-3">
                                                We help to grow business using web development, marketing and graphic Design.
                                            </p>
                                            <div className="buttons">
                                                <NavLink to="/contact">
                                                    <button className="Button">Get Started</button>
                                                </NavLink>
                                            </div>
                                            
                                        </div>
                                    </div>
                                        <div className="col-lg-6 order-1 pic order-lg-2">
                                            <img className="img" align="right" src={HomeImg} alt="home img" />
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
