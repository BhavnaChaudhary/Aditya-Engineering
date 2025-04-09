
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Pharma Solutions Ltd.",
      content: "Aditya Engineering delivered our fluid bed dryer on time and with exceptional quality. Their attention to detail and commitment to meeting specifications was impressive.",
      rating: 5
    },
    {
      name: "Amit Sharma",
      company: "Gujarat Chemicals",
      content: "We've been working with Aditya Engineering for our fabrication needs since 2018. Their team's technical expertise and quality standards are consistently excellent.",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "Food Processing Industries",
      content: "The ribbon blenders we purchased from Aditya Engineering have significantly improved our production efficiency. Their after-sales service is also very responsive.",
      rating: 4
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="What Our Clients Say" 
          subtitle="Hear from our satisfied clients about their experience working with Aditya Engineering."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
