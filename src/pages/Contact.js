import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making API requests
import './Contact.css'

const Contact = () => {
    const [formData
        , setFormData] = useState({
            name: '',
            email: '',
            message: '',
        });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a POST request to your backend
        axios.post('/contact', formData) // Make sure the URL matches your backend route

            .then(res => {
                console.log(res.data); // Log the response from the server
                setSubmitted(true); // Set submitted to true to show success message
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            })
            .catch(err => {
                console.error(err); // Log any errors
            });
    };

    return (
        <div className="contact-container">
            <h1 className='contact-text'>Contact Me</h1>
            <form onSubmit={handleSubmit} className="contact-form ">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            {submitted && <p className="success-message">Thank you! I'll get back to you soon.</p>}
            <h1 className='inconvineance-text'>For the purposes of simplicity the contact form is unavailable for now still you can contact me through my email at </h1>
            <h1 className='email-id'>sendtoaniket@icloud.com</h1>
            <h1 className='thank-u'>Thank you</h1>
        </div>
    );
};

export default Contact;
