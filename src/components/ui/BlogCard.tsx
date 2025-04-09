
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, date, imageUrl, category }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <Link to={`/blog/${id}`} className="block h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </Link>
      <div className="p-6">
        {category && (
          <span className="text-xs font-medium bg-aditya-blue/10 text-aditya-blue px-3 py-1 rounded-full">
            {category}
          </span>
        )}
        <h3 className="text-xl font-semibold mt-2 mb-2">
          <Link to={`/blog/${id}`} className="text-aditya-blue hover:text-aditya-orange transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar size={14} className="mr-1" />
          <time dateTime={date}>{date}</time>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
