import React from "react"
import {Link} from "react-router-dom"

export default function Welcome(props){
    
    const errors = props.formErrors
    console.log(props.success)
    return(
        <div className="welcome-container">
            <h1 className="welcome--title">Welcome</h1>
            <h3 className="welcome--subtitle">to your <span className="accent"  >Crypto Friend</span></h3>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    onChange={props.handleChange} 
                    value={props.formData.firstName}
                    className="form--input"
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    onChange={props.handleChange} 
                    value={props.formData.lastName}
                    className="form--input"
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    onChange={props.handleChange} 
                    value={props.formData.email} 
                    className="form--input"
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <label htmlFor="phone">Phone Number:</label>
                <input 
                    type="text" 
                    id="phone"
                    name="phone"
                    onChange={props.handleChange} 
                    value={props.formData.phone} 
                    className="form--input"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
                <button>{props.success ? <Link to="/crypto-friend/dashboard">Go to Dashboard</Link> : "Submit" }</button>
            </form>
        </div>
    )
}