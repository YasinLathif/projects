import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [messageColor, setMessageColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Name validation
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    if (!form.current.user_name.value.trim() || !nameRegex.test(form.current.user_name.value)) {
      newErrors.name = 'Enter a valid name (letters only)';
      isValid = false;
    }

    // Email validation
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!form.current.user_email.value.trim() || !emailRegex.test(form.current.user_email.value)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!form.current.message.value.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!loading && validateForm()) {
      setLoading(true);

      emailjs.sendForm('service_m6yef6x', 'template_axgpyjs', form.current, 'FU-R3q3ZUVG59HrNa')
        .then((result) => {
          console.log(result.text);
          e.target.reset();
          setShowSuccessModal(true);
          setMessage(' ✔ Message sent successfully.');
          setMessageColor('text-success');
        })
        .catch((error) => {
          console.log(error.text);
          setMessage(' ✖ Failed to send a message. Please try again!');
          setMessageColor('text-danger');
        })
        .finally(() => {
          setLoading(false); // Set loading to false when the send operation completes
        });
    }
  };

  const handleClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <section id='contact'>
      <h1 className='contact-title'>Contact us</h1>
      <h2 className='contact-desc'>Don't be shy! Hit me up! 👇</h2>
      <div className='contact'>
        <div className='textContainer'>
          <div className='contact-icon-box'>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg></span>
            <div className='contact-info'>
              <h3>Mail</h3>
              <span><a href='mailto:yasinlathi3010@gmail.com'>yasinlathi3010@gmail.com</a></span>
            </div>
          </div>
          <div className='contact-icon-box'>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg></span>
            <div className='contact-info'>
              <h3>Address</h3>
              <span><a href='https://www.google.com/maps?q=13.012434686673714, 80.22559208466011'>Chennai</a></span>
            </div>
          </div>
        </div>
        <div className={`formContainer ${showSuccessModal ? 'blur-background' : ''}`}>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor='name'></label>
            <input type='text' required id='name' name='user_name' placeholder='Name' />
            <p className='error text-danger'>{errors.name}</p>
            <label htmlFor='email'></label>
            <input type='email' required id='email' name='user_email' placeholder='Email' />
            <p className='error text-danger'>{errors.email}</p>
            <textarea rows={8} placeholder='Message' name='message' />
            <p className='error text-danger'>{errors.message}</p>
            <button type='submit' value='send' disabled={loading}>
              {loading ? (
                <div className="d-flex align-items-center">
                  <span className="me-2">Sending...</span>
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                'Send'
              )}
            </button>
          </form>
        </div>
      </div>
      <div className={showSuccessModal ? 'modal centered-modal' : 'modal'} tabIndex="-1" style={{ display: showSuccessModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Message Status</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p>Sending...</p>
                </div>
              ) : (
                <p className={`text-center fw-bolder ${messageColor}`}>{message}</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;