import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-custom-light-green p-4 md:p-8 rounded-lg">
      {/* Section for "Say Hi!" and introductory text */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-custom-blacky">Say Hi!</h2>
        <p className="text-base mt-2">We'd like to talk with you.</p>
      </div>
      
      {/* Section for form fields */}
      <div className="space-y-6">
        {/* Full Name Field */}
        <div>
          <label className="block text-sm font-medium text-custom-blacky mb-2">My name is</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded h-10"
          />
        </div>
        
        {/* What you love Field */}
        <div>
          <label className="block text-sm font-medium text-custom-blacky mb-2">I'm looking for</label>
          <input
            type="text"
            placeholder="What you love"
            className="w-full p-2 border border-gray-300 rounded h-16"
          />
        </div>
        
        {/* Your message Field */}
        <div>
          <label className="block text-sm font-medium text-custom-blacky mb-2">Your message</label>
          <textarea
            placeholder="I want to say that..."
            className="w-full p-2 border border-gray-300 rounded h-44"
          ></textarea>
        </div>

        {/* Send Message Button */}
        <div className="flex justify-end">
          <button className="bg-custom-deep-green text-white font-semibold py-3 px-6 rounded-full w-full md:w-auto text-lg transition-colors duration-300">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
