import React from 'react'
import logo from '../assets/airbnb.png'
export default function Navbar(){
    return(
        <nav className="mainNav">
            <img className="logo" src={logo} alt="Airbnb logo" />
        </nav>
    )
}