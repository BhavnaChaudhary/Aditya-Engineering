
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-aditya-blue hover:border-aditya-orange transition-colors card-hover">
      <div className="h-12 w-12 bg-aditya-blue/10 text-aditya-blue rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-aditya-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={`/services#${id}`}
        className="text-aditya-orange font-medium hover:text-aditya-blue transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
