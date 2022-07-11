import React from "react"
import Coin from "./Coin"
import Header from "./Header"

export default function Dashboard({userData, cryptoData}){    
    return(
        <div>
            <Header
                username={userData.firstName}
            />
            <main>
                <div className="container">
                    <Coin 
                        name="bitcoin"
                        price={cryptoData}
                    />
                    <Coin 
                        name="ethereum"
                        price={cryptoData}
                    />
                    <Coin 
                        name="ripple"
                        price={cryptoData}
                    />    
                </div>
                <div className="info-container">
                    <p>*Prices are updated every 20 seconds in USD</p>
                </div>
            </main>
        </div>
    )
}