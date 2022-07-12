import React from "react"
import {capitalize} from "../utilities/functions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Coin({name, price}){
    
    const title = capitalize(name)
    let icon = ""

    if(price[0] && price[1]){
        if(price[0][name] > price[1][name]){
            icon = <FontAwesomeIcon icon={faArrowUp} className="arrow-up"></FontAwesomeIcon>
        }else if(price[0][name] < price[1][name]){
            icon = <FontAwesomeIcon icon={faArrowDown} className="arrow-down"></FontAwesomeIcon>
        }
    }

    return(
            <div className="crypto-container">
                <h2 className="crypto-coin">{title}</h2>
                <h3 className="recent-price">
                    {price[0] ? 
                        <React.Fragment>
                            {icon}  {price[0][name] } $
                        </React.Fragment> : 
                    "Loading..."}
                </h3>
                <p className="crypto-info">{ price[1] ? price[1][name] : ""}</p>
                <p className="crypto-info">{ price[2] ? price[2][name] : ""}</p>
                <p className="crypto-info">{ price[3] ? price[3][name] : ""}</p>
                <p className="crypto-info">{ price[4] ? price[4][name] : ""}</p>      
            </div>
    )
}