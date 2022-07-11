import React from "react"
import {Routes, Route} from "react-router-dom"
import {validate} from "./utilities/functions.js"
import Welcome from "./components/Welcome.js"
import Dashboard from "./components/Dashboard.js"


export default function App(){
      
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "", 
        email: "", 
        phone: "" 
    })
    const [formErrors, setFormErrors] = React.useState({})
    const [isSubmited, setIsSubmited] = React.useState(false)
    const [cryptoData, setCryptoData] = React.useState([])
    const [success, setSuccess] = React.useState(false)
    
    function handleChange(event){
        const {name, value} = event.target
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setFormErrors(validate(formData))
        setIsSubmited(true)
    }
    
    React.useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmited){
            setSuccess(true)
        }
    },[formErrors])

    //The information will be fetch every 20 seconds
    
    React.useEffect(()=>{
       setTimeout(() => {
           fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD")
            .then(res => res.json())
            .then(data => {
                    const newestPrice =  {
                        bitcoin: data.BTC.USD,
                        ethereum: data.ETH.USD,
                        ripple: data.XRP.USD         
            }
                    setCryptoData(prevData => [newestPrice, ...prevData])
                
        })
       }, 20000)
    })

    return (
        <div>
            <Routes>
                <Route exact path="/cripto-friend" element={
                    <Welcome 
                        handleChange={handleChange}
                        formData={formData}
                        handleSubmit={handleSubmit}
                        formErrors={formErrors}
                        success={success}
                    />} />
                <Route path="/cripto-friend/dashboard" element={
                    <Dashboard
                        userData={formData}
                        cryptoData={cryptoData}
                    />}>
                        
                </Route>
            </Routes>
        </div>
    )
}