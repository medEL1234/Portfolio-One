import React, {useRef}from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_afvyj5n', 'service_afvyj5n', form.current, 'YOUR_PUBLIC_KEY')

    e.target.reset()
     
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>elgurchmohamed@gmail.com</h5>
            <a href='mailto:elgurchmohamed@gmail.com' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>elgurchmohamed</h5>
            <a href='https://m.me/med.salom.3' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+1216475217</h5>
            <a href='https://api.whatsapp.com/send?phone=+1216475217' target="_blank">Send a message</a>
          </article>


        </div>
        {/*END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required></input>
          <input type="email" name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact