import React from 'react'
import Card from "./Card"
import "./css/service.css"
import { NavLink } from 'react-router-dom'


const Cards = (props) => {
    return (
        
            <div className="card">
                <img src={props.imgsrc} className="card-img-top imgs" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/contact">
                      <button className="button">Get Started</button>
                    </NavLink>
                </div>
            </div>
        
    )

}

const Service = () => {
    return (
        <>
    <div className="my-5">
        <h1 className="text-center">Our Service</h1>
    </div>
        
        <div className="container-fluid mb-5">
        <div className="row">
                <div className=" cards col-10  mx-auto">
                
                    {Card.map((val, ind) => {
                        return (
                                    <Cards key={ind} imgsrc={val.img} alt={val.alt} title={val.title} button={val.button}></Cards>
                                )
                    })}
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Service
