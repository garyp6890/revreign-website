import React from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import ProductCategory from '../components/ProductCategory';

const AmazonStorefront: React.FC = () => {
  // Example product data - in a real application, this would come from an API or database
  const mustHaveTools = [
    {
      id: '1',
      name: 'Professional Socket Set',
      description: 'Complete 40-piece socket set with quick-release ratchet',
      price: '$49.99',
      imageUrl: 'https://images.unsplash.com/photo-1581147036728-317d157dde4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '2',
      name: 'Digital Multimeter',
      description: 'Accurate electrical testing with auto-ranging capability',
      price: '$29.99',
      imageUrl: 'https://images.unsplash.com/photo-1589241062272-c0a000072901?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '3',
      name: 'Hydraulic Floor Jack',
      description: '3-ton capacity with quick lift technology',
      price: '$89.99',
      imageUrl: 'https://images.unsplash.com/photo-1630329273801-8f629dba0a72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    }
  ];
  
  const safetyEquipment = [
    {
      id: '4',
      name: 'Mechanic Gloves',
      description: 'Oil-resistant with touchscreen compatibility',
      price: '$18.99',
      imageUrl: 'https://images.unsplash.com/photo-1595857981255-93c5e8a5a9a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '5',
      name: 'Safety Glasses',
      description: 'Impact-resistant with anti-fog coating',
      price: '$15.49',
      imageUrl: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '6',
      name: 'Disposable Coveralls',
      description: 'Full-body protection for messy jobs',
      price: '$22.99',
      imageUrl: 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    }
  ];
  
  const trustedProducts = [
    {
      id: '7',
      name: 'Wall-Mounted Tool Organizer',
      description: 'Heavy-duty pegboard system with customizable hooks and holders',
      price: '$89.99',
      imageUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '8',
      name: 'Rolling Tool Cabinet',
      description: 'Professional-grade storage with ball-bearing drawers',
      price: '$299.99',
      imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '9',
      name: 'Overhead Storage Rack',
      description: 'Adjustable ceiling-mounted storage system',
      price: '$159.99',
      imageUrl: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    }
  ];

  const garageStorage = [
    {
      id: '10',
      name: 'Heavy-Duty Storage Bins',
      description: 'Stackable containers with secure lids for parts organization',
      price: '$34.99',
      imageUrl: 'https://images.unsplash.com/photo-1587582423113-8f443441a2d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '11',
      name: 'Magnetic Tool Holder',
      description: 'Strong magnetic strip for keeping tools organized and accessible',
      price: '$24.99',
      imageUrl: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    },
    {
      id: '12',
      name: 'Corner Shelf Unit',
      description: '5-tier shelving system perfect for maximizing garage corner space',
      price: '$79.99',
      imageUrl: 'https://images.unsplash.com/photo-1595909315417-2edd382a56dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://amazon.com'
    }
  ];

  return (
    <div className="min-h-screen bg-rev-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">Amazon Storefront</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore curated tools and products for DIY car projects—all handpicked by Revreign to help you fix your vehicle on a budget. These affiliate links support my work at no extra cost to you!
          </p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Amazon Storefront" 
                className="w-32 h-32 rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rev-brown mb-2 font-heading">Shop My Complete Collection</h2>
              <p className="text-gray-700 mb-4">
                Visit my Amazon storefront to browse all my recommended products in one place. From basic tools to advanced equipment, I've curated everything you need for your automotive projects.
              </p>
              <a 
                href="https://amazon.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
              >
                <ShoppingBag className="mr-2" size={20} />
                Shop My Amazon Storefront
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <ProductCategory 
          title="Must-Have Tools" 
          description="Essential tools every DIY mechanic should have in their garage. These are the tools I use in almost every video."
          link="https://amazon.com/shop/revreign/tools"
          products={mustHaveTools}
        />
        
        <ProductCategory 
          title="Safety Equipment & PPE" 
          description="Protect yourself while working on your vehicle with these high-quality safety products."
          link="https://amazon.com/shop/revreign/safety"
          products={safetyEquipment}
        />
        
        <ProductCategory 
          title="Trusted & Reviewed Products" 
          description="Products I've personally tested and can vouch for their quality and performance."
          link="https://amazon.com/shop/revreign/reviewed"
          products={trustedProducts}
        />
        
        <ProductCategory 
          title="Garage Storage & Organization" 
          description="Transform your workspace with these storage solutions from my upcoming Garage Overhaul series."
          link="https://amazon.com/shop/revreign/storage"
          products={garageStorage}
        />
      </div>
    </div>
  );
};

export default AmazonStorefront;