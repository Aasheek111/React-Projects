import React, { useState, useEffect } from 'react';

import MenuCard from './MenuCard';
import axios from 'axios';

const Menu = ({ onAddToCart }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = ['all', 'appetizers', 'main-course', 'desserts', 'beverages'];

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/menu');
      setMenuItems(response.data);
    } catch (error) {
      // Fallback data for demo
      setMenuItems([
        {
          _id: '1',
          name: 'Butter Chicken',
          description: 'Creamy tomato-based curry with tender chicken pieces',
          price: 450,
          category: 'main-course',
          spiceLevel: 'Medium',
          isVegetarian: false,
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop'
        },
        {
          _id: '2',
          name: 'Paneer Tikka',
          description: 'Grilled cottage cheese with aromatic spices',
          price: 380,
          category: 'appetizers',
          spiceLevel: 'Mild',
          isVegetarian: true,
          image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop'
        },
        {
          _id: '3',
          name: 'Biryani',
          description: 'Fragrant basmati rice with spiced meat/vegetables',
          price: 520,
          category: 'main-course',
          spiceLevel: 'Medium',
          isVegetarian: false,
          image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop'
        },
        {
          _id: '4',
          name: 'Samosa',
          description: 'Crispy pastry filled with spiced potatoes',
          price: 120,
          category: 'appetizers',
          spiceLevel: 'Mild',
          isVegetarian: true,
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop'
        },
        {
          _id: '5',
          name: 'Dal Makhani',
          description: 'Rich and creamy black lentil curry',
          price: 340,
          category: 'main-course',
          spiceLevel: 'Mild',
          isVegetarian: true,
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop'
        },
        {
          _id: '6',
          name: 'Gulab Jamun',
          description: 'Sweet milk dumplings in sugar syrup',
          price: 180,
          category: 'desserts',
          spiceLevel: null,
          isVegetarian: true,
          image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=300&h=200&fit=crop'
        },
        {
          _id: '7',
          name: 'Masala Chai',
          description: 'Traditional spiced tea with milk',
          price: 80,
          category: 'beverages',
          spiceLevel: null,
          isVegetarian: true,
          image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop'
        },
        {
          _id: '8',
          name: 'Tandoori Naan',
          description: 'Fresh baked bread from clay oven',
          price: 90,
          category: 'appetizers',
          spiceLevel: null,
          isVegetarian: true,
          image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading delicious menu...</p>
      </div>
    );
  }

  return (
    <section id="menu" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Our Menu</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 bg-white rounded-xl p-2 shadow-lg max-w-full overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-4 py-2 rounded-lg capitalize transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item._id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MenuCard 
                item={item} 
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;