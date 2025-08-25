import React from 'react';
import { FiPlus } from 'react-icons/fi';

const MenuCard = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img 
          src={item.image || '/api/placeholder/300/200'} 
          alt={item.name}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {item.isVegetarian && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Veg</span>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-orange-600">NRS {item.price}</span>
            {item.spiceLevel && (
              <span className="text-xs text-red-500 flex items-center mt-1">
                <span className="mr-1">🌶️</span>{item.spiceLevel}
              </span>
            )}
          </div>
          <button 
            onClick={() => onAddToCart(item)}
            className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg"
          >
            <FiPlus className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;