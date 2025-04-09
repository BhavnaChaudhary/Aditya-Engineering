
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Privacy Policy" 
        breadcrumb={[
          { name: "Privacy Policy", path: "/privacy-policy" }
        ]} 
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Privacy Policy for Aditya Engineering</h2>
            <p className="text-gray-600 mb-4">
              Last Updated: April 8, 2023
            </p>
            
            <div className="prose prose-blue max-w-none">
              <p>
                At Aditya Engineering, we respect your privacy and are committed to protecting the personal information you provide us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              
              <h3>Information We Collect</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Fill out forms on our website</li>
                <li>Request a quote for our products or services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us via email, phone, or other communication channels</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              
              <h3>Types of Information</h3>
              <p>The personal information we collect may include:</p>
              <ul>
                <li>Name, email address, phone number</li>
                <li>Company name and designation</li>
                <li>Postal address</li>
                <li>Project requirements and specifications</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3>How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our services</li>
                <li>Process and fulfill your requests for quotes or information</li>
                <li>Communicate with you about our products, services, and promotions</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h3>Information Sharing</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice or when required by law. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
              </p>
              
              <h3>Data Security</h3>
              <p>
                We implement appropriate security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h3>Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information that we have collected. You may also request that we restrict the processing of your information or object to our use of your information. To exercise these rights, please contact us using the information provided below.
              </p>
              
              <h3>Changes to This Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Aditya Engineering<br />
                Plot No-153, Rudra Industrial Park, Phase-II,<br />
                B/h. N.K. 2, Bakrol GIDC, Ahmedabad-382210, India<br />
                Email: adityaengineering79@gmail.com<br />
                Phone: +91 84888 11199
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;
