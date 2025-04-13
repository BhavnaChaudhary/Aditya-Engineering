
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import CallToAction from '@/components/ui/CallToAction';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: "2016",
      title: "Company Foundation",
      description: "Aditya Engineering was established in Ahmedabad, India."
    },
    {
      year: "2018",
      title: "Expanded Product Line",
      description: "Introduced new machinery products including fluid bed dryers and conveyor systems."
    },
    {
      year: "2020",
      title: "Facility Expansion",
      description: "Expanded our manufacturing facility to increase production capacity."
    },
    {
      year: "Present",
      title: "Growing Strong",
      description: "Continuing to innovate and deliver quality engineering solutions across India."
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="About Us" 
        breadcrumb={[
          { name: "About Us", path: "/about" }
        ]} 
      />

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section">{import.meta.env.VITE_NAME}</h2>
              <p className="text-gray-600 mb-4">
                Established in 2016, Aditya Engineering has grown to become a respected name in the fabrication and 
                machinery manufacturing sector. Based in Ahmedabad, Gujarat, we specialize in providing 
                high-quality engineering solutions for various industries.
              </p>
              <p className="text-gray-600 mb-4">
                Our expertise includes M.S & S.S sheet metal work, industrial structures, production lines, 
                and a wide range of specialized machinery such as ribbon blenders, storage tanks, fluid bed dryers, 
                and conveyor systems.
              </p>
              <p className="text-gray-600">
                We take pride in our commitment to quality, timely delivery, and competitive pricing. 
                Our dedicated team of skilled engineers and technicians ensures that every project meets 
                the highest standards of excellence.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Aditya Engineering Facility" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 text-aditya-blue">
                <Target size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver superior quality engineering and fabrication solutions that exceed customer expectations 
                while maintaining the highest standards of workmanship, safety, and reliability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 text-aditya-blue">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a leading provider of innovative engineering solutions in India, 
                known for excellence in quality, reliability, and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 text-aditya-blue">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-aditya-orange mr-2 mt-1 flex-shrink-0" />
                  <span>Quality Excellence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-aditya-orange mr-2 mt-1 flex-shrink-0" />
                  <span>Customer Focus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-aditya-orange mr-2 mt-1 flex-shrink-0" />
                  <span>Integrity &amp; Transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-aditya-orange mr-2 mt-1 flex-shrink-0" />
                  <span>Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            title="Our Journey" 
            subtitle="A look at the milestones that have shaped Aditya Engineering since our foundation."
            centered={true}
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-aditya-blue/20"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className="md:w-1/2 p-4">
                    <div className={`p-6 rounded-lg shadow-md bg-white ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="text-lg font-semibold text-aditya-orange mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-aditya-blue text-white relative z-10">
                    {index + 1}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Work With Us?"
        description="Contact our team today to discuss your engineering and fabrication needs."
        buttonText="Contact Us"
        buttonLink="/contact"
        bgColor="orange"
      />
    </MainLayout>
  );
};

export default About;
