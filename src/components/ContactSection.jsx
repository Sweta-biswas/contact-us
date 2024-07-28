import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import curveImage from '../assets/imageCurve.png';
import backgroundImage from '../assets/Background.jpeg'; // Import your background pattern image

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden max-w-screen-lg mx-auto">
      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 bg-custom-light-green p-8">
        <ContactForm />
      </div>
      {/* Contact Info Section with Curve and Background */}
      <div className="w-full md:w-1/2 relative bg-custom-deep-purple overflow-hidden">
        {/* Background Image with Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {/* Curve Image */}
        <img
          src={curveImage}
          alt="Curve"
          className="absolute h-full z-10"
          style={{ left: '-1px', objectFit: 'cover' }}
        />
        {/* Contact Info */}
        <div className="relative z-20 h-full p-8">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
