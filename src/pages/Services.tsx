
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import CallToAction from '@/components/ui/CallToAction';
import { 
  Check, 
  ArrowRight,
  PenTool,
  Factory,
  Settings,
  Hammer,
  CircuitBoard,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: "fabrication",
      title: "M.S & S.S Sheet Metal Work",
      description: "Precision fabrication of metal sheets with expert welding and forming techniques for various industrial applications.",
      details: "Our sheet metal fabrication services include cutting, bending, welding, and finishing of both mild steel and stainless steel materials. We utilize advanced equipment and techniques to ensure precise dimensions and high-quality results for components ranging from simple brackets to complex enclosures and structures.",
      features: [
        "Precision cutting and forming",
        "Expert welding techniques",
        "Surface finishing options",
        "Quality materials selection",
        "Custom dimensions and specifications"
      ],
      icon: <PenTool size={36} className="text-aditya-blue" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: "structures",
      title: "Industrial Structures",
      description: "Design and construction of durable industrial structures engineered for safety, stability and longevity.",
      details: "We design and fabricate a wide range of industrial structures including platforms, mezzanines, access systems, and support frameworks. Our structures are engineered for optimal load-bearing capacity, stability, and safety, while adhering to relevant industry standards and regulations.",
      features: [
        "Structural engineering expertise",
        "Load-bearing capacity analysis",
        "Corrosion-resistant treatments",
        "Assembly and installation services",
        "Compliance with safety standards"
      ],
      icon: <Factory size={36} className="text-aditya-blue" />,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    },
    {
      id: "production-lines",
      title: "Production Line Machinery",
      description: "Custom machinery solutions for optimizing production workflows and enhancing manufacturing efficiency.",
      details: "Our team designs and manufactures complete production line machinery tailored to your specific manufacturing processes. We focus on improving operational efficiency, reducing bottlenecks, and ensuring seamless integration of all components within your production workflow.",
      features: [
        "End-to-end production system design",
        "Process optimization",
        "Integration with existing systems",
        "Automated control options",
        "Post-installation support"
      ],
      icon: <Settings size={36} className="text-aditya-blue" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      id: "custom-fabrication",
      title: "Custom Fabrication",
      description: "Tailored fabrication services as per your drawings and specifications to meet unique project requirements.",
      details: "We specialize in custom fabrication based on client specifications and drawings. Our skilled team can transform your concepts into high-quality finished products, whether you need prototypes, one-off items, or small production runs with specific requirements that aren't met by off-the-shelf solutions.",
      features: [
        "Drawing interpretation and technical analysis",
        "Material recommendations",
        "Prototype development",
        "Quality control and testing",
        "Comprehensive documentation"
      ],
      icon: <Hammer size={36} className="text-aditya-blue" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "machinery",
      title: "Specialized Machinery",
      description: "Engineering specialized equipment including ribbon blenders, storage tanks, fluid bed dryers, and conveyor systems.",
      details: "We design and manufacture specialized equipment tailored for specific industrial applications. Our expertise includes ribbon blenders for mixing operations, storage tanks for various materials, fluid bed dryers for pharmaceutical and chemical applications, and conveyor systems for material handling needs.",
      features: [
        "Custom capacity and dimension options",
        "Application-specific design features",
        "Material selection for product compatibility",
        "Energy-efficient operation",
        "User-friendly controls"
      ],
      icon: <CircuitBoard size={36} className="text-aditya-blue" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "maintenance",
      title: "Equipment Installation & Maintenance",
      description: "Professional installation and maintenance services to ensure optimal performance of your industrial equipment.",
      details: "Beyond manufacturing, we provide comprehensive installation and maintenance services for industrial equipment. Our technicians ensure proper setup, calibration, and ongoing maintenance to maximize equipment lifespan, minimize downtime, and maintain optimal performance throughout the operational life of your machinery.",
      features: [
        "Professional installation services",
        "Commissioning and calibration",
        "Preventive maintenance programs",
        "Troubleshooting and repairs",
        "Operator training"
      ],
      icon: <Wrench size={36} className="text-aditya-blue" />,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Our Services" 
        breadcrumb={[
          { name: "Services", path: "/services" }
        ]} 
      />

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            title="Engineering & Fabrication Services" 
            subtitle="We provide comprehensive engineering and fabrication services tailored to meet the unique needs of your industrial projects."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-aditya-blue hover:border-aditya-orange transition-colors"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`}
                  className="flex items-center text-aditya-orange font-medium hover:text-aditya-blue transition-colors"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.slice(3).map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-aditya-blue hover:border-aditya-orange transition-colors"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`}
                  className="flex items-center text-aditya-orange font-medium hover:text-aditya-blue transition-colors"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <h2 className="heading-section">{service.title}</h2>
                <p className="text-gray-600 mb-6">
                  {service.details}
                </p>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-aditya-orange mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="bg-aditya-blue hover:bg-blue-800">
                  <Link to="/request-quote">
                    Request Quote for {service.title}
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <img 
                  src={service.image}
                  alt={service.title} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Process */}
      <section className="section-padding bg-aditya-blue text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Service Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-white/80">
                We discuss your requirements and project specifications to understand your needs.
              </p>
              
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/30 -z-10"></div>
            </div>
            
            <div className="text-center relative">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Planning</h3>
              <p className="text-white/80">
                Our engineering team creates detailed designs and plans for your project.
              </p>
              
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/30 -z-10"></div>
            </div>
            
            <div className="text-center relative">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-white/80">
                We fabricate your product with precision and quality control at every step.
              </p>
              
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/30 -z-10"></div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery & Support</h3>
              <p className="text-white/80">
                We deliver, install, and provide ongoing support for your equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Start Your Project?"
        description="Contact us today to discuss your engineering and fabrication requirements."
        buttonText="Request a Quote"
        buttonLink="/request-quote"
        bgColor="orange"
      />
    </MainLayout>
  );
};

export default Services;
