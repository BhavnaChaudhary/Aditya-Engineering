
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import { 
  Settings, 
  Hammer, 
  Factory, 
  Wrench,
  CircuitBoard,
  PenTool
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: "fabrication",
      title: "M.S & S.S Sheet Metal Work",
      description: "Precision fabrication of metal sheets with expert welding and forming techniques for various industrial applications.",
      icon: <PenTool size={24} />
    },
    {
      id: "structures",
      title: "Industrial Structures",
      description: "Design and construction of durable industrial structures engineered for safety, stability and longevity.",
      icon: <Factory size={24} />
    },
    {
      id: "production-lines",
      title: "Production Line Machinery",
      description: "Custom machinery solutions for optimizing production workflows and enhancing manufacturing efficiency.",
      icon: <Settings size={24} />
    },
    {
      id: "custom-fabrication",
      title: "Custom Fabrication",
      description: "Tailored fabrication services as per your drawings and specifications to meet unique project requirements.",
      icon: <Hammer size={24} />
    },
    {
      id: "machinery",
      title: "Specialized Machinery",
      description: "Engineering specialized equipment including ribbon blenders, storage tanks, and fluid bed dryers.",
      icon: <CircuitBoard size={24} />
    },
    {
      id: "maintenance",
      title: "Equipment Installation & Maintenance",
      description: "Professional installation and maintenance services to ensure optimal performance of your industrial equipment.",
      icon: <Wrench size={24} />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="Our Services" 
          subtitle="We provide comprehensive engineering and fabrication services tailored to meet the unique needs of your industrial projects."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
