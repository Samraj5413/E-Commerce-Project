import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                         bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 
                         transition-all duration-300"
            >
              FoodieHub
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative group ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <span className="transition-colors duration-200 group-hover:text-blue-600">
                Home
              </span>
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left" />
              )}
            </Link>
            <Link
              to="/menu"
              className={`relative group ${
                isActive('/menu') ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <span className="transition-colors duration-200 group-hover:text-blue-600">
                Menu
              </span>
              {isActive('/menu') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left" />
              )}
            </Link>
            <Link
              to="/cart"
              className="relative group"
            >
              <div className={`p-2 rounded-full transition-all duration-200 ${
                isActive('/cart') ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}>
                <ShoppingCart className={`w-6 h-6 ${
                  isActive('/cart') ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                }`} />
              </div>
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 
                               flex items-center justify-center text-xs animate-bounce">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 
                         focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/')
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/menu')
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/cart"
              className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/cart')
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({state.items.length})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};