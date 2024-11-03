import React from 'react';

const Contact = () => (
  <section className="py-10 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
    <form className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
      <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
      <textarea placeholder="Your Message" className="w-full mb-4 p-2 border rounded"></textarea>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Message</button>
    </form>
  </section>
);

export default Contact;
