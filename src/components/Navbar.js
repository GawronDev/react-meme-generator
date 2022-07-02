import React from "react";
import TrollFace from "../images/trollface.png"

export default function Navbar(){
    return(
        <nav className="nav">
            <img className="nav-brand" src={TrollFace} />
            <h3 className="nav-titel">Meme Generator</h3>
            <h4 className="nav-sub">React Course - Project 3</h4>
        </nav>
    )
}