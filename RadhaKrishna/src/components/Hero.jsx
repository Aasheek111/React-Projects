
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 text-white py-16 md:py-24 min-h-screen flex items-center overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
      </div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-16 w-24 h-24 opacity-20" style={{animation: 'float 10s ease-in-out infinite'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/924/924514.png" alt="tea" className="w-full h-full filter drop-shadow-lg" />
        </div>
        <div className="absolute top-1/3 right-20 w-28 h-28 opacity-25" style={{animation: 'float 12s ease-in-out infinite 2s'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/2515/2515183.png" alt="samosa" className="w-full h-full filter drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 opacity-20" style={{animation: 'float 14s ease-in-out infinite 4s'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/924/924514.png" alt="tea" className="w-full h-full filter drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-20" style={{animation: 'float 11s ease-in-out infinite 1s'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/2515/2515183.png" alt="samosa" className="w-full h-full filter drop-shadow-lg" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Welcome to RadhaKrishna
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-delay text-orange-100 leading-relaxed">
            Experience the Divine Flavors of Authentic Tea and Samosa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 md:px-10 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto shadow-2xl hover:shadow-orange-500/25"
            >
              Explore Menu
            </button>
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 text-black px-8 md:px-10 py-4 rounded-2xl font-semibold hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;