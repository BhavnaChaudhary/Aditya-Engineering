
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import BlogCard from '@/components/ui/BlogCard';
import CallToAction from '@/components/ui/CallToAction';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: "industrial-fabrication-trends",
      title: "Latest Trends in Industrial Fabrication",
      excerpt: "Explore the cutting-edge technologies and methodologies that are transforming the industrial fabrication sector in 2023.",
      date: "2023-06-15",
      category: "Industry Trends",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "storage-tank-design",
      title: "Key Considerations for Storage Tank Design",
      excerpt: "Understanding the essential factors that determine the effectiveness and safety of industrial storage tank designs.",
      date: "2023-05-22",
      category: "Engineering",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      id: "ribbon-blender-efficiency",
      title: "Maximizing Efficiency in Ribbon Blender Operations",
      excerpt: "Practical tips and techniques to optimize the performance and output of industrial ribbon blenders.",
      date: "2023-04-18",
      category: "Equipment",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "industrial-safety-practices",
      title: "Essential Safety Practices for Industrial Facilities",
      excerpt: "A comprehensive guide to implementing and maintaining robust safety protocols in manufacturing environments.",
      date: "2023-03-30",
      category: "Safety",
      imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
    },
    {
      id: "sustainable-manufacturing",
      title: "Sustainable Manufacturing: A Path Forward",
      excerpt: "How industrial manufacturers are adapting eco-friendly practices and technologies to reduce environmental impact.",
      date: "2023-02-14",
      category: "Sustainability",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    },
    {
      id: "custom-fabrication-benefits",
      title: "The Business Benefits of Custom Fabrication",
      excerpt: "Why investing in tailored fabrication solutions can drive efficiency, quality, and competitive advantage.",
      date: "2023-01-20",
      category: "Business Insights",
      imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    }
  ];

  const categories = [
    "All Categories",
    "Industry Trends",
    "Engineering",
    "Equipment",
    "Safety",
    "Sustainability",
    "Business Insights"
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Our Blog" 
        breadcrumb={[
          { name: "Blog", path: "/blog" }
        ]} 
      />

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-aditya-blue" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard 
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageUrl={post.imageUrl}
                category={post.category}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav>
              <ul className="flex space-x-1">
                <li>
                  <Button variant="outline" size="sm">&lt; Previous</Button>
                </li>
                <li>
                  <Button size="sm" className="bg-aditya-blue">1</Button>
                </li>
                <li>
                  <Button variant="outline" size="sm">2</Button>
                </li>
                <li>
                  <Button variant="outline" size="sm">3</Button>
                </li>
                <li>
                  <Button variant="outline" size="sm">Next &gt;</Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest articles, industry insights, and company news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-aditya-blue focus:border-aditya-blue" 
              />
              <Button className="bg-aditya-blue hover:bg-blue-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Have Questions About Our Services?"
        description="Contact our engineering experts to discuss your project requirements."
        buttonText="Contact Us"
        buttonLink="/contact"
        bgColor="gradient"
      />
    </MainLayout>
  );
};

export default Blog;
