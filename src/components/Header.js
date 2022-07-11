import React from "react"
import {Link} from "react-router-dom"
import {capitalize} from "../utilities/functions"

export default function Header({username}){
    
    return(
            <header>
                <h2 className="header--title">Crypto Friend</h2>
                {username ? <h3 className="sign-up"><span className="light">Hello</span> {capitalize(username)}</h3> : 
                <Link to="/"><h3 href="welcome">Sign Up</h3></Link>}
            </header>
    )
}