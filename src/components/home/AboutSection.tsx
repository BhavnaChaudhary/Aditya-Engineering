
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    "Established in 2016 with a focus on quality engineering",
    "Specializing in fabrication and machinery manufacturing",
    "Trusted by leading industrial companies",
    "Commitment to timely delivery and competitive pricing"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
              alt="About Aditya Engineering" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="heading-section">About Aditya Engineering</h2>
            <p className="text-gray-600 mb-6">
              Aditya Engineering was founded in 2016 with a mission to provide high-quality fabrication and machinery 
              manufacturing solutions. Based in Ahmedabad, we've grown to become a trusted partner for 
              businesses seeking reliable engineering solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of skilled engineers and technicians are committed to excellence in every project,
              from custom fabrication to complete production line machinery.
            </p>
            
            <div className="mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start mb-3">
                  <Check size={20} className="text-aditya-orange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-aditya-blue hover:bg-blue-800">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
