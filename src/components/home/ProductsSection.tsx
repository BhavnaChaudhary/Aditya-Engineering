
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const featuredProducts = [
    {
      id: "ribbon-blender",
      name: "Ribbon Blender",
      description: "High-efficiency ribbon blenders designed for thorough mixing of dry powders, granules and similar materials with uniform blending results.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: "storage-tanks",
      name: "M.S & S.S Storage Tanks",
      description: "Durable storage tanks manufactured with high-quality materials, available in various capacities and customizable designs for different industrial applications.",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      id: "fluid-bed-dryer",
      name: "Fluid Bed Dryer",
      description: "Advanced fluid bed dryers that provide efficient drying through uniform heat distribution, suitable for pharmaceutical, chemical, and food processing industries.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader 
          title="Featured Products" 
          subtitle="Discover our range of high-quality industrial machinery and equipment designed to enhance your production capabilities."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-aditya-blue hover:bg-blue-800">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
