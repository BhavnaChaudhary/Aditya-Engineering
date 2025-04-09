
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aditya-blue text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">ADITYA <span className="text-aditya-orange">ENGINEERING</span></h3>
            <p className="text-gray-300">
              Established in 2016, we specialize in fabrication and machinery manufacturing with a 
              commitment to quality products, timely delivery, and competitive pricing.
            </p>
            <p className="text-lg font-semibold text-white mt-4">
              "Our quality is our Policy"
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-aditya-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-aditya-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-aditya-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-aditya-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-aditya-orange mt-6"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-aditya-orange mt-6"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#fabrication" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  M.S & S.S Sheet Metal Work
                </Link>
              </li>
              <li>
                <Link to="/services#structures" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Industrial Structures
                </Link>
              </li>
              <li>
                <Link to="/services#machinery" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Production Line Machinery
                </Link>
              </li>
              <li>
                <Link to="/services#custom" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Custom Fabrication
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-aditya-orange mt-6"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-aditya-orange mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Plot No-153, Rudra Industrial Park, Phase-II, B/h. N.K. 2, Bakrol GIDC, Ahmedabad-382210, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-aditya-orange flex-shrink-0" />
                <a href="tel:+918488811199" className="text-gray-300 hover:text-aditya-orange transition-colors">
                  +91 84888 11199
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-aditya-orange flex-shrink-0" />
                <a href="mailto:adityaengineering79@gmail.com" className="text-gray-300 hover:text-aditya-orange transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  adityaengineering79@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-aditya-orange flex-shrink-0" />
                <a href="mailto:adityaengineeringinfo@gmail.com" className="text-gray-300 hover:text-aditya-orange transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  adityaengineeringinfo@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-aditya-orange flex-shrink-0" />
                <p className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-blue-700 text-center text-gray-300">
          <p>
            © {currentYear} Aditya Engineering. All Rights Reserved. | 
            <Link to="/privacy-policy" className="ml-1 hover:text-aditya-orange transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
