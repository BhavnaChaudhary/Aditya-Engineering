
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Contact Us" 
        breadcrumb={[
          { name: "Contact", path: "/contact" }
        ]} 
      />

      {/* Contact Information and Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-section mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-aditya-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-aditya-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                    <address className="text-gray-600 not-italic">
                      Plot No-153, Rudra Industrial Park, Phase-II,<br />
                      B/h. N.K. 2, Bakrol GIDC,<br />
                      Ahmedabad-382210, India
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aditya-blue/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-aditya-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a href="tel:+918488811199" className="text-gray-600 hover:text-aditya-blue transition-colors block">
                      +91 84888 11199
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aditya-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-aditya-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:adityaengineering79@gmail.com" className="text-gray-600 hover:text-aditya-blue transition-colors block mb-1">
                      adityaengineering79@gmail.com
                    </a>
                    <a href="mailto:adityaengineeringinfo@gmail.com" className="text-gray-600 hover:text-aditya-blue transition-colors block">
                      adityaengineeringinfo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aditya-blue/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-aditya-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="bg-sky-400 hover:bg-sky-500 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      placeholder="Your Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      placeholder="Subject"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-aditya-blue hover:bg-blue-800">
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-8 text-center">Find Us Here</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
            {/* Replace with actual Google Maps embed code */}
            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Map placeholder - Embedded Google Map would appear here</p>
              {/* 
                To add actual Google Map, you would use:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=..." 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              */}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
