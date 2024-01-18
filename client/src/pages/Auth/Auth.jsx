import React,{useState} from 'react'
import './Auth.css';
import logo from '../../assets/logo.png'
import AboutAuth from './AboutAuth'

const Auth = () => {
  const[IsSignUp,setIsSignUp]=useState(false)
  const handleswitch=()=>{
    setIsSignUp(!IsSignUp)
  }
  return (
     <section class="auth-section">
       {IsSignUp && <AboutAuth/>}
        <div class="auth-container-2">
          {!IsSignUp && <img src={logo} alt="stackoverflow-icon" className="login-logo"/>}
          <form>
            {
              IsSignUp && (
              <label htmlFor="name">
                  <h4>Display Name</h4>
                  <input type="text" id="name" name="name"/>
              </label>)
            }
            <label htmlFor="email">
              <h4>Email</h4>
              <input type="email" id="email" name="email"/>
            </label>
            <label htmlFor="password">
              <div style={{display: "flex",justifyContent: "space-between"}}>
                <h4>Password</h4>
                {!IsSignUp && <p style={{color:"#007ac6" ,fontSize: "13px",padding:"0 180px 0px 0"}}>Forget Password</p>}
              </div>
              <input type="password" id="password" name="password"/>  
              {IsSignUp && (<p style={{color:"#666767",fontSize: "13px"}}>Passwords must contain atleast eight<br /> characters,including atleast 1 letter and 1<br/> number.</p>
              )}
            </label>  
              {IsSignUp && (
                <label htmlFor="check">
                  <input type="checkbox" id="check"/>
                  <p style={{fontSize: "13px"}}>Opt-in to reeive occasionsal,<br/>product updates,user research invitations,<br/>company announcementa,digests</p>
                </label>
              )}
              {IsSignUp && (
                <p style={{color:"#666767",fontSize: "13px"}}>
                  By clicking "Sign Up", you agree to our 
                  <span style={{color:"#007ac6"}}> terms of<br/>service</span>,
                  <span style={{color:"#007ac6"}}> privacy policy</span>,
                  <span style={{color:"#007ac6"}}> cookie policy</span>
                </p>)}
              <button type="submit" className="auth-btn">{IsSignUp?"Sign Up":"Log in"}</button>
          </form>
          <p>
            {IsSignUp?"Already have an account?":"Don't have an account?"}
            <button type="submit" className="handle-switch-btn" onClick={handleswitch}>{IsSignUp?"Login":"Sign Up"}</button>
          </p>
        </div>
     </section>
  )
}

export default Auth;