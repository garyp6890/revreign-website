import React from 'react';
import SocialButton from '../components/SocialButton';
import { TikTok, Instagram, Youtube } from '../components/SocialIcons';

const Links: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rev-beige/30 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">Connect With Revreign</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Follow, message, or share my automotive content across all platforms. Join over 290k followers in the community of car enthusiasts!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SocialButton 
            platform="tiktok"
            username="@revreignofficial"
            followers="185k followers"
            url="https://tiktok.com/@revreignofficial"
            icon={<TikTok size={32} />}
          />
          
          <SocialButton 
            platform="instagram"
            username="@revreignauto"
            followers="103k followers"
            url="https://instagram.com/revreignauto"
            icon={<Instagram size={32} />}
          />
          
          <SocialButton 
            platform="youtube"
            username="@revreign"
            followers="2.79k subscribers"
            url="https://youtube.com/@revreign"
            icon={<Youtube size={32} />}
          />
          
          <div className="mt-12 bg-rev-dark text-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-rev-orange font-heading">Why Follow Revreign?</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                Revreign stands out in the crowded world of social media influencers by combining technical expertise with creativity. Whether you're a seasoned mechanic or a casual car enthusiast, my content offers something for everyone.
              </p>
              <p>
                From the viral "Caveman Mechanics" series to detailed turbocharger tutorials, I'm here to educate, entertain, and inspire your automotive journey.
              </p>
              <p>
                Join our growing community of automotive enthusiasts who follow Revreign for laughs, learning, and all things cars!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;