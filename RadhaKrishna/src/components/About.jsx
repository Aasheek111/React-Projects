import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">About RadhaKrishna</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=400&fit=crop" 
              alt="Restaurant interior"
              className="rounded-xl shadow-xl w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-600">Our Story</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
              Since 1995, Our RadhaKrishna Restaurant has been serving authentic Indian cuisine 
              with devotion and love. Our recipes are passed down through generations, 
              ensuring every dish carries the true essence of Indian flavors.
            </p>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
              We believe in using fresh ingredients, traditional cooking methods, and 
              serving our guests with the same warmth and hospitality that defines 
              Indian culture.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="text-2xl md:text-3xl font-bold text-orange-600">25+</h4>
                <p className="text-gray-600 text-sm md:text-base">Years of Service</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="text-2xl md:text-3xl font-bold text-orange-600">50+</h4>
                <p className="text-gray-600 text-sm md:text-base">Authentic Dishes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;