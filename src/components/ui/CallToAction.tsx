
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: 'blue' | 'orange' | 'gradient';
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  bgColor = 'blue'
}) => {
  const getBgColor = () => {
    switch (bgColor) {
      case 'orange':
        return 'bg-aditya-orange';
      case 'gradient':
        return 'bg-gradient-to-r from-aditya-blue to-blue-700';
      case 'blue':
      default:
        return 'bg-aditya-blue';
    }
  };

  return (
    <section className={`${getBgColor()} py-16 px-4`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <Button asChild className="bg-white text-aditya-blue hover:bg-gray-100">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
