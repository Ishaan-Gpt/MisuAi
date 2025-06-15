
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sp-nav fixed top-0 left-0 right-0 z-50">
      <div className="sp-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900">MisuAi</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <button className="sp-nav-link flex items-center px-3 py-2 text-sm">
                  Features
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="sp-nav-link flex items-center px-3 py-2 text-sm">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#pricing" className="sp-nav-link px-3 py-2 text-sm">
                Pricing
              </a>
              <div className="relative group">
                <button className="sp-nav-link flex items-center px-3 py-2 text-sm">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="sp-nav-link px-3 py-2 text-sm">
                Enterprise
              </a>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Sign In
            </button>
            <button className="sp-btn-primary text-sm">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Solutions
              </a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Enterprise
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <button className="text-left px-3 py-2 text-base font-medium text-gray-600">
                    Sign In
                  </button>
                  <button className="sp-btn-primary text-sm mx-3">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
