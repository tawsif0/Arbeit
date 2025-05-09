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
            errors.email = 'Invalid email address';
        }

        // Phone number validation
        if (!phone) {
            errors.phone = 'Phone number is required';
        } else if (!isValidPhoneNumber(phone)) {
            errors.phone = 'Invalid phone number';
        }

        // Address validation
        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        } else if (formData.address.trim().length < 5) {
            errors.address = 'Address must be at least 5 characters';
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
            address: e.target.address.value
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
            <video autoPlay loop muted playsInline className="background-video">
                <source src={require('../assets/videos/space.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="container">
                <div className="text-wrapper">
                    {/* Form */}
                    <form className="get-in-touch-form" onSubmit={handleSubmit}>
                        <h2 className="section-titles">
                            Let’s Build Something <span className="highlight">Exceptional</span> Together
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

                        {/* Address Field */}
                        <div className="form-group floating-label">
                            <input type="text" id="address" name="address" placeholder=" " className={errors.address ? 'is-invalid' : ''} autoComplete="off" />
                            <label htmlFor="address">Address</label>
                            {errors.address && <div className="error-message">{errors.address}</div>}
                        </div>

                        {/* Submit Button with Loader */}
                        <Button type="submit" className="cta-button" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <ClipLoader color="#000" size={20} /> {/* Loader while submitting */}
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

            <div className="angled-divider"></div>
        </section>
    );
};

export default GetInTouch;
