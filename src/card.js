import image from "./Assets/images/illustration-sign-up-desktop.svg"
import success from "./Assets/images/icon-success.svg"
import MobileImage from "./Assets/images/illustration-sign-up-mobile.svg"
import listIcon from "./Assets/images/icon-list.svg"
import "./styles/style.css"
import { useState, useEffect } from "react"

const Card = () => {
const inputValue = {email:""}
const [inputVal, setInputVal] = useState(inputValue) 
const [formError, setFormError] = useState({}) 
const [showError, setShowError] = useState(false) 
const [isSubmit, setIsSubmit] = useState(false) 
  

const handleChange = (e) => {
  const {name, value} = e.target;
  setInputVal({...inputVal, [name]: value})
      
} 
const handleSubmit = (e) => {
   e.preventDefault();
   setFormError(validate(inputVal))
   
  }
  
  const handleClick = () => {
    setIsSubmit(false);
    setInputVal({inputVal: ""})
  }
  
  useEffect(() => {
    if(Object.keys(formError).length === 0 && isSubmit) {
      console.log(inputVal);
      console.log(isSubmit);
      setShowError(false)
  }
},[formError])


  const validate = (values) => {
  const errors = {};
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i; 
   if(!values.email) {
     errors.email = "Email is required"
     setShowError(true)
    } else if(!regex.test(values.email)){
      errors.email = "This is not a valid email format"   
      setShowError(true)
  }else {
    setIsSubmit(true);
  }
  return errors;
  
  
  }


  return (
    <div className="body">
        {isSubmit ? <div className="success-msg">
        <img src={success} alt="success" />
          <h1>Thanks for Subscribing</h1>
        <p>A confirmation email has been sent to {inputVal.email}. Please open it and click the button 
        inside to confirm your subscription. </p>
        <button onClick={handleClick}>Dismiss message</button></div> : 
         <div className="container">
            <div className="mobile-card-display">
        <img src={MobileImage} alt="mobile-image" />
        </div>
          <div className="info-section">
         <h1>Stay updated! </h1> 
         <p>Join 60,000+ product managers receiving monthly update on:</p>
        <div className="list">
          <span><img src={listIcon} alt="listIcon" /><p>Product discovery and building what matters</p></span>
          <span><img src={listIcon} alt="listIcon" /> <p>Measuring and ensuring updates are a success</p></span>
          <span><img src={listIcon} alt="listIcon" /><p>And much more</p></span>
        </div>
        <div className="input-area">
          <form action="" onSubmit={handleSubmit}>
            <div className="lab">
          <label htmlFor="">Email Address</label>
          <p>{formError.email}</p>
            </div>
         <input className= {`${showError ? "error" : "input"}`} onChange={handleChange} name="email" value = {inputVal.email} type="text" placeholder="email@company.com" />
        <button>Subscribe to monthly Newsletter</button>
          </form>
        </div>
        </div>
        <div className="card-display">
        <img src= {image} alt="img"/>
        </div>
        </div>
        } 
    </div>
  )
}      

export default Card

//  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 