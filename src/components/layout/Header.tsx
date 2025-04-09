
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Menu, Phone, Mail, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-bold text-aditya-blue">ADITYA <span className="text-aditya-orange">ENGINEERING</span></span>
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink 
            to="/"
            className={({isActive}) => 
              `px-4 py-2 font-medium transition-colors ${isActive ? 'text-aditya-orange' : 'text-aditya-gray hover:text-aditya-blue'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({isActive}) => 
              `px-4 py-2 font-medium transition-colors ${isActive ? 'text-aditya-orange' : 'text-aditya-gray hover:text-aditya-blue'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/products"
            className={({isActive}) => 
              `px-4 py-2 font-medium transition-colors ${isActive ? 'text-aditya-orange' : 'text-aditya-gray hover:text-aditya-blue'}`
            }
          >
            Products
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              `px-4 py-2 font-medium transition-colors ${isActive ? 'text-aditya-orange' : 'text-aditya-gray hover:text-aditya-blue'}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/blog"
            className={({isActive}) => 
              `px-4 py-2 font-medium transition-colors ${isActive ? 'text-aditya-orange' : 'text-aditya-gray hover:text-aditya-blue'}`
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact"
            className={({isActive}) => 
              `px-4 py-2 font-medium transition-colors ${isActive ? 'text-aditya-orange' : 'text-aditya-gray hover:text-aditya-blue'}`
            }
          >
            Contact
          </NavLink>
          <NavLink to="/request-quote">
            <Button className="ml-4 bg-aditya-orange hover:bg-orange-600 text-white">Request Quote</Button>
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
          >
            {isMenuOpen ? (
              <X size={24} className="text-aditya-blue" />
            ) : (
              <Menu size={24} className="text-aditya-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-3">
            <NavLink 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                `py-2 px-4 font-medium ${isActive ? 'text-aditya-orange' : 'text-aditya-gray'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                `py-2 px-4 font-medium ${isActive ? 'text-aditya-orange' : 'text-aditya-gray'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                `py-2 px-4 font-medium ${isActive ? 'text-aditya-orange' : 'text-aditya-gray'}`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                `py-2 px-4 font-medium ${isActive ? 'text-aditya-orange' : 'text-aditya-gray'}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                `py-2 px-4 font-medium ${isActive ? 'text-aditya-orange' : 'text-aditya-gray'}`
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                `py-2 px-4 font-medium ${isActive ? 'text-aditya-orange' : 'text-aditya-gray'}`
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/request-quote"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 bg-aditya-orange text-white font-medium rounded-md text-center"
            >
              Request Quote
            </NavLink>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 py-2">
                <Phone size={16} className="text-aditya-blue" />
                <a href="tel:+918488811199" className="text-aditya-gray hover:text-aditya-blue">
                  +91 84888 11199
                </a>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <Mail size={16} className="text-aditya-blue" />
                <a href="mailto:adityaengineering79@gmail.com" className="text-aditya-gray hover:text-aditya-blue">
                  adityaengineering79@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
