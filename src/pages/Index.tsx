
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProductsSection from '@/components/home/ProductsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import CallToAction from '@/components/ui/CallToAction';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <CallToAction 
        title="Ready to Start Your Project?"
        description="Contact us today to discuss your engineering and fabrication requirements."
        buttonText="Request a Quote"
        buttonLink="/request-quote"
        bgColor="gradient"
      />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
