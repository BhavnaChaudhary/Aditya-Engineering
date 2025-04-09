
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company?: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, company, content, rating, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4 space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-4 italic">"{content}"</p>
      
      <div className="flex items-center mt-4">
        {imageUrl ? (
          <img 
            src={imageUrl}
            alt={name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-aditya-blue text-white flex items-center justify-center mr-3">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          {company && <p className="text-sm text-gray-500">{company}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
