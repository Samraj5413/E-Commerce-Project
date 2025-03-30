import React from 'react';
import { FoodItem } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, ShoppingBag } from 'lucide-react';

interface FoodCardProps {
  food: FoodItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { dispatch } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {food.name}
          </h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            ${food.price}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{food.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">{food.category}</span>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: food })}
            className="group/btn relative inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg 
                     transform transition-all duration-200 
                     hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isHovered ? (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  Add
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};