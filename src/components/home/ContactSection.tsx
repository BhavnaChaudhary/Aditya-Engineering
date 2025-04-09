
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-section mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or services? Our team is here to help.
              Contact us today for more information or to request a quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-aditya-blue/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-aditya-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+918488811199" className="text-gray-600 hover:text-aditya-blue transition-colors">
                    +91 84888 11199
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-aditya-blue/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-aditya-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:adityaengineering79@gmail.com" className="text-gray-600 hover:text-aditya-blue transition-colors block">
                    adityaengineering79@gmail.com
                  </a>
                  <a href="mailto:adityaengineeringinfo@gmail.com" className="text-gray-600 hover:text-aditya-blue transition-colors block">
                    adityaengineeringinfo@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-aditya-blue/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-aditya-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <address className="text-gray-600 not-italic">
                    Plot No-153, Rudra Industrial Park, Phase-II,<br />
                    B/h. N.K. 2, Bakrol GIDC,<br />
                    Ahmedabad-382210, India
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-aditya-orange hover:bg-orange-600">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <Button className="w-full bg-aditya-blue hover:bg-blue-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
