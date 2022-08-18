import React from 'react'
import heropic from '../assets/heropic.png'
export default function Hero(){
    return(
        <div className="hero">
            <img className="heropic" src={heropic} alt="" />
            <h1 className="herotitle">Online Experiences</h1>
            <p className="herodescription">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}