import React from 'react'
import './Contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'


function Contact() {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msgIcon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mailIcon} alt="" />Contact@Edusity.com</li>
                    <li><img src={phoneIcon} alt="" />+1 123-456-7890</li>
                    <li><img src={locationIcon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={whiteArrow} alt="" /></button>
                </form>
            </div>
        </div>
    )
}

export default Contact