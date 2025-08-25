import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <span className="text-xl mr-3 mt-1">📍</span>
                <p className="text-sm md:text-base text-gray-600">Pokhara-16 Batulechaur, Nepal</p>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-xl mr-3">📞</span>
                <p className="text-sm md:text-base text-gray-600">+977 984122028</p>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-xl mr-3">✉️</span>
                <p className="text-sm md:text-base text-gray-600">info@radhakrishna.com</p>
              </div>
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <span className="text-xl mr-3 mt-1">🕒</span>
                <div className="text-sm md:text-base text-gray-600">
                  <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;