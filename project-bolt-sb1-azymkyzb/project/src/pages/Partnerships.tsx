import React from 'react';
import { Mail, TrendingUp, FileText, Users, Calendar, CheckSquare } from 'lucide-react';

const Partnerships: React.FC = () => {
  return (
    <div className="min-h-screen bg-rev-light">
      {/* Hero Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1524591652733-73fa1ae7b5ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        >
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-rev-brown font-heading">Partnerships & Sponsorships</h1>
            <p className="text-xl text-gray-700 mb-8">
              Looking to collaborate with an automotive influencer who connects with over 290k followers across platforms? Let's work together to create engaging sponsored content that resonates with car enthusiasts worldwide.
            </p>
            <a 
              href="mailto:revreignauto@gmail.com" 
              className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition-colors"
            >
              <Mail className="mr-2" size={20} />
              Contact Me for Sponsorships
            </a>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-rev-brown text-center font-heading">Audience & Engagement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rev-beige/20 p-6 rounded-lg text-center">
              <div className="bg-rev-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-rev-brown mb-2">290k+</h3>
              <p className="text-gray-700">Total Followers</p>
              <p className="text-sm text-gray-500 mt-2">Across TikTok, Instagram, and YouTube</p>
            </div>
            
            <div className="bg-rev-beige/20 p-6 rounded-lg text-center">
              <div className="bg-rev-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-rev-brown mb-2">13-17%</h3>
              <p className="text-gray-700">Engagement Rate</p>
              <p className="text-sm text-gray-500 mt-2">Outperforming industry benchmarks</p>
            </div>
            
            <div className="bg-rev-beige/20 p-6 rounded-lg text-center">
              <div className="bg-rev-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckSquare size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-rev-brown mb-2">30.81%</h3>
              <p className="text-gray-700">Reach Rate</p>
              <p className="text-sm text-gray-500 mt-2">Instagram Reels average reach</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Past Work Section */}
      <section className="py-16 bg-rev-beige/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-rev-brown text-center font-heading">Past Collaborations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1622042991322-9fa8dd98713d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Welding Tools" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rev-brown">Welding Tools Showcase</h3>
                <p className="text-gray-700 mb-4">
                  Demonstrated the functionality and benefits of premium welding equipment through a series of tutorial videos.
                </p>
                <div className="flex items-center text-rev-orange">
                  <TrendingUp size={18} className="mr-2" />
                  <span className="text-sm font-medium">22% engagement rate</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Car Parts Review" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rev-brown">Performance Parts Review</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive testing and installation of aftermarket performance parts with before/after results.
                </p>
                <div className="flex items-center text-rev-orange">
                  <TrendingUp size={18} className="mr-2" />
                  <span className="text-sm font-medium">18% engagement rate</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Tool Comparison" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rev-brown">Budget vs. Premium Tools</h3>
                <p className="text-gray-700 mb-4">
                  Side-by-side comparison of budget-friendly and professional-grade automotive tools to help viewers make informed decisions.
                </p>
                <div className="flex items-center text-rev-orange">
                  <TrendingUp size={18} className="mr-2" />
                  <span className="text-sm font-medium">25% engagement rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Projects Section */}
      <section className="py-16 bg-rev-brown text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center font-heading">Upcoming Projects</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-rev-dark/50 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <Calendar size={24} className="text-rev-orange mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Turbo Build Series</h3>
                  <p className="text-gray-200">
                    A comprehensive multi-part series showcasing the complete process of turbocharging a naturally aspirated engine. Perfect for tool and parts sponsorships.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-rev-dark/50 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <Calendar size={24} className="text-rev-orange mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Caveman's Garage Overhaul</h3>
                  <p className="text-gray-200">
                    Complete workshop transformation featuring storage solutions, tool organization, and workspace upgrades. Ideal for tool brands and garage equipment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-rev-dark/50 p-6 rounded-lg">
              <div className="flex items-start">
                <Calendar size={24} className="text-rev-orange mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Budget Restoration Challenge</h3>
                  <p className="text-gray-200">
                    Restoring a classic vehicle on a tight budget, showcasing affordable products and creative solutions. Great for parts, tools, and cleaning product promotions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rate Card Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-rev-brown font-heading">Partnership Rates</h2>
            <p className="text-gray-700 mb-10">
              Rates vary based on the scope, platform, and deliverables required. Below are starting rates for standard promotional content:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-rev-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-rev-brown">TikTok & Instagram</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Single Post/Reel</span>
                    <span className="font-bold">$500+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Multi-Post Campaign</span>
                    <span className="font-bold">$1,200+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>24h Story Takeover</span>
                    <span className="font-bold">$300+</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-rev-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-rev-brown">YouTube</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Dedicated Review</span>
                    <span className="font-bold">$1,000+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Integration (60-90 sec)</span>
                    <span className="font-bold">$750+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Series Sponsorship</span>
                    <span className="font-bold">$2,500+</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <a 
                href="mailto:revreignauto@gmail.com" 
                className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Contact For Custom Quote
              </a>
              <a 
                href="#" 
                className="border-2 border-rev-brown text-rev-brown hover:bg-rev-brown hover:text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
              >
                <FileText className="mr-2" size={20} />
                Download Full Rate Card
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-rev-beige/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-rev-brown font-heading">Ready to Collaborate?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's create automotive content that drives engagement and showcases your products to an audience of passionate car enthusiasts. Contact me today to discuss how we can work together.
          </p>
          <a 
            href="mailto:revreignauto@gmail.com" 
            className="bg-rev-brown hover:bg-rev-dark text-white font-bold py-4 px-8 rounded-lg inline-flex items-center transition-colors"
          >
            <Mail className="mr-2" size={20} />
            revreignauto@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;