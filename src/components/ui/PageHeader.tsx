
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumb?: {name: string; path: string}[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div className="bg-aditya-blue text-white py-16 mt-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        
        {breadcrumb && (
          <div className="flex items-center mt-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="mx-2" size={14} />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-gray-200">{item.name}</span>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
