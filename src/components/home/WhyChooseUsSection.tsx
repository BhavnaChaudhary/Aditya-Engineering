
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Shield, Clock, Award, PenTool, Users, ThumbsUp } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-aditya-orange" />,
      title: "Quality Assurance",
      description: "Our strict quality control processes ensure that every product meets the highest industry standards."
    },
    {
      icon: <Clock className="h-10 w-10 text-aditya-orange" />,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and are committed to delivering projects on schedule."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-aditya-orange" />,
      title: "Competitive Pricing",
      description: "We offer excellent value without compromising on quality, with transparent and competitive pricing."
    },
    {
      icon: <PenTool className="h-10 w-10 text-aditya-orange" />,
      title: "Custom Solutions",
      description: "Our team can design and fabricate custom solutions tailored specifically to your requirements."
    },
    {
      icon: <Award className="h-10 w-10 text-aditya-orange" />,
      title: "Industry Experience",
      description: "With years of experience since 2016, we have the expertise to handle complex engineering challenges."
    },
    {
      icon: <Users className="h-10 w-10 text-aditya-orange" />,
      title: "Dedicated Support",
      description: "Our customer support team ensures you receive assistance whenever you need it."
    }
  ];

  return (
    <section className="section-padding bg-aditya-blue text-white">
      <div className="container-custom">
        <SectionHeader 
          title="Why Choose Us" 
          subtitle="At Aditya Engineering, we pride ourselves on delivering excellence through these core strengths."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
