
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import CallToAction from '@/components/ui/CallToAction';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: "ribbon-blender",
      name: "Ribbon Blender",
      description: "High-efficiency ribbon blenders designed for thorough mixing of dry powders, granules and similar materials with uniform blending results. Available in various capacities to suit different production requirements.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: "storage-tanks-ms",
      name: "M.S Storage Tanks",
      description: "Mild steel storage tanks built for durability and corrosion resistance, suitable for storing a wide range of industrial materials. Custom capacities and dimensions available based on specific requirements.",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      id: "storage-tanks-ss",
      name: "S.S Storage Tanks",
      description: "Stainless steel storage tanks offering superior corrosion resistance and hygiene standards, ideal for food, pharmaceutical, and chemical industries. Available with various finishes and configurations.",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    },
    {
      id: "fluid-bed-dryer",
      name: "Fluid Bed Dryer",
      description: "Advanced fluid bed dryers that provide efficient drying through uniform heat distribution, suitable for pharmaceutical, chemical, and food processing industries. Features adjustable air flow and temperature controls.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "screw-conveyor",
      name: "Screw Conveyor",
      description: "Reliable screw conveyors for efficient material handling in various industrial applications. Designed for smooth operation and low maintenance requirements.",
      imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
    },
    {
      id: "belt-conveyor",
      name: "Belt Conveyor",
      description: "Versatile belt conveyor systems for continuous material transport in production facilities. Customizable lengths, widths, and configurations to accommodate different operational needs.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "dairy-machinery",
      name: "Dairy Machinery",
      description: "Specialized machinery for dairy processing operations, including pasteurizers, homogenizers, and storage solutions. Built to meet strict hygiene and food safety standards.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: "plastic-washing-line",
      name: "Plastic Washing Line",
      description: "Complete plastic washing line solutions for recycling operations. Efficient systems for cleaning and processing plastic waste for reuse in manufacturing.",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    }
  ];

  const categories = [
    "All Products",
    "Material Handling",
    "Storage Solutions",
    "Processing Equipment",
    "Custom Fabrication"
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Our Products" 
        breadcrumb={[
          { name: "Products", path: "/products" }
        ]} 
      />

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            title="Industrial Machinery & Equipment" 
            subtitle="Explore our range of high-quality engineering products designed to enhance your industrial operations."
          />

          {/* Categories Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-aditya-blue" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Download */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Download Our Product Catalog</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed specifications and information about our complete range of industrial machinery and equipment.
          </p>
          <Button className="bg-aditya-blue hover:bg-blue-800">
            <Download className="mr-2" size={16} />
            Download Catalog (PDF)
          </Button>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section">Custom Manufacturing Solutions</h2>
              <p className="text-gray-600 mb-4">
                Beyond our standard product offerings, Aditya Engineering specializes in custom fabrication 
                based on your specific requirements and drawings.
              </p>
              <p className="text-gray-600 mb-4">
                Our skilled engineering team can design and manufacture bespoke industrial equipment 
                tailored to your unique operational needs, ensuring optimal performance and efficiency.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need modifications to our existing products or completely custom solutions, 
                we have the expertise and capabilities to deliver high-quality results.
              </p>
              <Button className="bg-aditya-orange hover:bg-orange-600">
                Request Custom Fabrication
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Custom Manufacturing" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Need Help Selecting the Right Equipment?"
        description="Our team of experts is ready to assist you in choosing the best solutions for your needs."
        buttonText="Contact Our Experts"
        buttonLink="/contact"
        bgColor="blue"
      />
    </MainLayout>
  );
};

export default Products;
