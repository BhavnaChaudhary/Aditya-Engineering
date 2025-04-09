
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-aditya-blue pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center opacity-15"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
              Quality Engineering & Manufacturing Solutions
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg animate-fade-up" style={{animationDelay: '0.1s'}}>
              Since 2016, Aditya Engineering has been delivering premium fabrication and machinery manufacturing with uncompromising quality, timely delivery, and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
              <Button asChild className="bg-aditya-orange hover:bg-orange-600 text-white px-8 py-6 text-lg">
                <Link to="/products">Our Products</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/contact" className="flex items-center">
                  Contact Us <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Aditya Engineering" 
              className="rounded-lg shadow-2xl border-4 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
