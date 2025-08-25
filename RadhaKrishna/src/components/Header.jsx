import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';

const Header = ({ cartItems = [], onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-orange-600 text-white shadow-lg sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold truncate">RadhaKrishna Restaurant</h1>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="#home" className="hover:text-orange-200 cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}}>Home</a>
            <a href="#menu" className="hover:text-orange-200 cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}}>Menu</a>
            <a href="#about" className="hover:text-orange-200 cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}}>About</a>
            <a href="#contact" className="hover:text-orange-200 cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}}>Contact</a>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="relative" onClick={onCartClick}>
              <FiShoppingCart className="text-xl cursor-pointer hover:text-orange-200 transition-colors duration-200" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </div>
            
            <button 
              className="md:hidden p-2 hover:bg-orange-700 rounded transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="pt-4 pb-2 space-y-2">
            <a href="#home" className="block py-2 px-2 hover:bg-orange-700 rounded cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('home')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false)}}>Home</a>
            <a href="#menu" className="block py-2 px-2 hover:bg-orange-700 rounded cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false)}}>Menu</a>
            <a href="#about" className="block py-2 px-2 hover:bg-orange-700 rounded cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false)}}>About</a>
            <a href="#contact" className="block py-2 px-2 hover:bg-orange-700 rounded cursor-pointer transition-colors duration-200" onClick={(e) => {e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false)}}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;