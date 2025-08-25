
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RadhaKrishna Restaurant</h3>
            <p className="text-gray-300">
              Serving authentic Tea with love and devotion since 1995.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>📍 Pokhara-16 Batulechaur, Nepal</p>
              <p>📞 +977 984122028</p>
              <p>✉️ info@radhakrishna.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="text-gray-300 space-y-2">
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 RadhaKrishna Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;