import React from 'react';

const ContactInfo = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-custom-white h-full text-center p-8">
      <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
      <p className="mb-8 text-lg px-4 sm:px-0">
        Fill up the form and our Team will get back to you within 24 hours.
      </p>
      <div className="space-y-4">
        <p className="flex items-center justify-center">
          <i className="fas fa-phone-alt mr-4"></i>
          (+40) 772 100 200
        </p>
        <p className="flex items-center justify-center">
          <i className="fas fa-envelope mr-4"></i>
          uxultimates@gmail.com
        </p>
        <p className="flex items-center justify-center">
          <i className="fas fa-map-marker-alt mr-4"></i>
          Dyonisie Wolf Bucharest, RO 010458
        </p>
      </div>
      <div className="flex space-x-8 mt-8">
        <a href="#" className="text-custom-white text-2xl">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-custom-white text-2xl">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="text-custom-white text-2xl">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
