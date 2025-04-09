
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  CheckCircle,
  FileText,
  Send,
  Upload,
  Phone,
  Mail
} from 'lucide-react';

const RequestQuote = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Request a Quote" 
        breadcrumb={[
          { name: "Request Quote", path: "/request-quote" }
        ]} 
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="heading-section mb-6">Tell Us About Your Project</h2>
              <p className="text-gray-600 mb-8">
                Please fill out the form below with details about your project requirements. 
                Our team will review your information and get back to you with a customized quote.
              </p>
              
              <form className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                      <input 
                        type="text" 
                        id="company" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-1">Project Type*</label>
                    <select 
                      id="project-type" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue"
                    >
                      <option value="">Select Project Type</option>
                      <option value="fabrication">Metal Fabrication</option>
                      <option value="machinery">Machinery Manufacturing</option>
                      <option value="structure">Industrial Structures</option>
                      <option value="custom">Custom Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="project-title" className="block text-sm font-medium text-gray-700 mb-1">Project Title*</label>
                    <input 
                      type="text" 
                      id="project-title" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      placeholder="Brief title for your project"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-1">Project Description*</label>
                    <textarea 
                      id="project-description" 
                      rows={5}
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      placeholder="Please provide detailed information about your project requirements"
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range (INR)</label>
                      <select 
                        id="budget"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="below-1-lakh">Below 1 Lakh</option>
                        <option value="1-5-lakh">1 - 5 Lakh</option>
                        <option value="5-10-lakh">5 - 10 Lakh</option>
                        <option value="10-25-lakh">10 - 25 Lakh</option>
                        <option value="above-25-lakh">Above 25 Lakh</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Timeline*</label>
                      <select 
                        id="timeline"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue"
                      >
                        <option value="">Select Timeline</option>
                        <option value="urgent">Urgent (Within 2 weeks)</option>
                        <option value="1-month">1 Month</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="6-months-plus">Over 6 Months</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* File Attachments */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Attachments</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:bg-gray-50 transition-colors">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Drag and drop files here, or click to select files
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        You can upload drawings, specifications, or other relevant documents (Max 10MB)
                      </p>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        className="sr-only"
                      />
                      <Button type="button" variant="outline" size="sm" className="mt-4">
                        Select Files
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="additional-notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea 
                      id="additional-notes" 
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
                      placeholder="Any other information you'd like to share"
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button type="submit" className="w-full bg-aditya-orange hover:bg-orange-600 py-6 text-lg">
                  <Send className="mr-2" size={18} />
                  Submit Quote Request
                </Button>
              </form>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-aditya-blue text-white p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-6">What Happens Next?</h3>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="bg-white/10 rounded-full p-2 mr-3 flex-shrink-0">
                      <FileText size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Request Review</h4>
                      <p className="text-white/80 text-sm">
                        Our team will review your project details
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-white/10 rounded-full p-2 mr-3 flex-shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Initial Contact</h4>
                      <p className="text-white/80 text-sm">
                        We'll contact you within 24-48 hours
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-white/10 rounded-full p-2 mr-3 flex-shrink-0">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Quote</h4>
                      <p className="text-white/80 text-sm">
                        You'll receive a detailed quote for your project
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
                <p className="text-gray-600 mb-6">
                  If you have questions about the quote request process, please don't hesitate to contact us directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-aditya-blue/10 rounded-full p-2 mr-3">
                      <Phone className="h-5 w-5 text-aditya-blue" />
                    </div>
                    <a href="tel:+918488811199" className="text-aditya-blue font-medium">
                      +91 84888 11199
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-aditya-blue/10 rounded-full p-2 mr-3">
                      <Mail className="h-5 w-5 text-aditya-blue" />
                    </div>
                    <a href="mailto:adityaengineering79@gmail.com" className="text-aditya-blue font-medium">
                      adityaengineering79@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RequestQuote;
