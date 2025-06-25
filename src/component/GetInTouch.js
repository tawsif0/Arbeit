/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'; // Import validation function
import emailjs from 'emailjs-com'; // Import EmailJS
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import { ClipLoader } from 'react-spinners'; // Import spinner component
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import 'react-phone-number-input/style.css'; // Import default styles
import './GetInTouch.css';

const GetInTouch = () => {
    const [phone, setPhone] = useState(''); // State to store phone number
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
    const [errors, setErrors] = useState({}); // State to store validation errors

    // Function to validate form fields
    const validateForm = (formData) => {
        const errors = {};

        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 6) {
            errors.name = 'Name must be at least 6 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email queries';
        }

        // Phone number validation
        if (!phone) {
            errors.phone = 'Phone number is required';
        } else if (!isValidPhoneNumber(phone)) {
            errors.phone = 'Invalid phone number';
        }

        // queries validation
        if (!formData.queries.trim()) {
            errors.queries = 'Queries is required';
        } else if (formData.queries.trim().length < 5) {
            errors.queries = 'Queries must be at least 5 characters';
        }

        return errors;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (isSubmitting) return; // Prevent multiple submissions

        // Get form data
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: phone, // Use the state for phone number
            queries: e.target.queries.value
        };

        // Validate form data
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set validation errors
            return; // Stop submission if there are errors
        }

        setIsSubmitting(true); // Set submitting state to true
        setErrors({}); // Clear validation errors

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                'service_pjholsz', // Replace with your EmailJS service ID
                'template_trzeg2c', // Replace with your EmailJS template ID
                formData,
                'p_3e0vA4040YV_BKg' // Replace with your EmailJS user ID
            );

            // Handle success
            console.log('Email sent successfully!', response.status, response.text);
            toast.success('Your request has been submitted successfully!', {
                position: 'bottom-center',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'toast-success' // Custom class for success toast
            });
        } catch (error) {
            // Handle error
            console.error('Failed to send email:', error);
            toast.error('Failed to submit your request. Please try again.', {
                position: 'bottom-center',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'toast-error' // Custom class for error toast
            });
        } finally {
            setIsSubmitting(false); // Reset submitting state
            e.target.reset(); // Reset the form
            setPhone(''); // Reset phone number state
        }
    };

    return (
        <section className="get-in-touch-section">
            {/* Video Background */}

            <div className="container">
                <div className="about-section-header">
                    <div className="expertise-tag">CONTACT US</div>
                    <div className="about-title">
                        <span className="about-title-main">Let’s Build Something</span>
                        <span className="about-title-accent"> Extraordinary Together</span>
                    </div>

                    <div className="about-content-wrapper">
                        <div className="about-content-inner">
                            <p className="work-subtitle text-center">
                                Have an idea, project, or just a question? <span className="highlight">Arbeit Technology</span> is here to help. Reach out to us and let’s start a conversation about
                                how we can turn your vision into a powerful digital solution.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-wrapper">
                    {/* Form */}
                    <form className="get-in-touch-form" onSubmit={handleSubmit}>
                        <h2 className="section-titles">
                            Get in <span className="highlight">Touch</span>
                        </h2>

                        {/* Name Field */}
                        <div className="form-group floating-label">
                            <input type="text" id="name" name="name" placeholder=" " className={errors.name ? 'is-invalid' : ''} autoComplete="off" />
                            <label htmlFor="name">Name</label>
                            {errors.name && <div className="error-message">{errors.name}</div>}
                        </div>

                        {/* Email Field */}
                        <div className="form-group floating-label">
                            <input type="email" id="email" name="email" placeholder=" " className={errors.email ? 'is-invalid' : ''} autoComplete="off" />
                            <label htmlFor="email">Email</label>
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>

                        {/* Phone Number Field with Country Code */}
                        <div className="form-groups floating-label">
                            <div className={`phone-input-container ${errors.phone ? 'is-invalid' : ''}`}>
                                <PhoneInput international defaultCountry="BD" value={phone} onChange={setPhone} placeholder="Enter phone number" className="phone-input" />
                            </div>
                            <label htmlFor="phone">Phone Number</label>
                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                        </div>

                        {/* queries Field */}
                        <div className="form-group floating-label queries-big">
                            <input type="text" id="queries" name="queries" placeholder=" " className={errors.queries ? 'is-invalid' : ''} autoComplete="off" />
                            <label htmlFor="queries">Queries</label>
                            {errors.queries && <div className="error-message">{errors.queries}</div>}
                        </div>

                        {/* Submit Button with Loader */}
                        <Button type="submit" className="cta-button" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <ClipLoader color="#fff" size={20} /> {/* Loader while submitting */}
                                    <span style={{ marginLeft: '10px' }}>Submitting</span> {/* Text next to the loader */}
                                </>
                            ) : (
                                '🚀 Request'
                            )}
                        </Button>
                    </form>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName="custom-toast" // Custom class for all toasts
                bodyClassName="toast-body" // Custom class for toast body
                progressClassName="toast-progress" // Custom class for toast progress bar
            />
        </section>
    );
};

export default GetInTouch;
