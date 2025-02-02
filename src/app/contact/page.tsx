import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="contact-form bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center fade-in">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <input
            type="text"
            placeholder="Phone No"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-red-700 text-white font-medium rounded-md hover:bg-black transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
