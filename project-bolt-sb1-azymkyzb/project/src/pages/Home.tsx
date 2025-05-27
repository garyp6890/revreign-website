import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, ShoppingBag, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { isCavemanMode } = useTheme();

  return (
    <div className="bg-rev-light">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[270px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black" 
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1544381332-230b11b13886?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 font-heading">
              Revreign
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-200">Cars. Creativity. Community.</p>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-200 max-w-2xl">
              Bringing humor, education, and DIY car culture to life across social media. Join over 290k followers in learning how to fix and modify your ride.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link 
                to="/links" 
                className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors inline-flex items-center text-sm sm:text-base"
              >
                <Share2 className="mr-2" size={18} />
                Connect With Me
              </Link>
              <Link 
                to="/partnerships" 
                className="bg-white hover:bg-rev-beige text-rev-brown font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors inline-flex items-center text-sm sm:text-base"
              >
                <TrendingUp className="mr-2" size={18} />
                Partnership Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600661653561-629509216228?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Car Enthusiast Working on Engine" 
                className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-rev-brown font-heading">About Revreign</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Revreign is Jack—a car enthusiast and social media creator who brings humor, education, and DIY car culture to life across TikTok, Instagram, and YouTube. Known for his 'Caveman Mechanics' skits and turbocharger tutorials, he's here to entertain and inspire automotive enthusiasts worldwide.
              </p>

              {/* Mobile Slider / Desktop Grid */}
              <div className="mb-6">
                <div className="hidden sm:grid sm:grid-cols-3 gap-4">
                  <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                    <h3 className="font-bold text-rev-orange text-xl mb-1">TikTok</h3>
                    <p className="text-2xl font-bold text-rev-brown">185k</p>
                    <p className="text-gray-600 text-sm">followers</p>
                  </div>
                  <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                    <h3 className="font-bold text-rev-orange text-xl mb-1">Instagram</h3>
                    <p className="text-2xl font-bold text-rev-brown">103k</p>
                    <p className="text-gray-600 text-sm">followers</p>
                  </div>
                  <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                    <h3 className="font-bold text-rev-orange text-xl mb-1">YouTube</h3>
                    <p className="text-2xl font-bold text-rev-brown">2.79k</p>
                    <p className="text-gray-600 text-sm">followers</p>
                  </div>
                </div>
                
                <div className="sm:hidden relative">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}
                    className="w-full"
                  >
                    <SwiperSlide>
                      <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-rev-orange text-xl mb-1">TikTok</h3>
                        <p className="text-2xl font-bold text-rev-brown">185k</p>
                        <p className="text-gray-600 text-sm">followers</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-rev-orange text-xl mb-1">Instagram</h3>
                        <p className="text-2xl font-bold text-rev-brown">103k</p>
                        <p className="text-gray-600 text-sm">followers</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-rev-orange text-xl mb-1">YouTube</h3>
                        <p className="text-2xl font-bold text-rev-brown">2.79k</p>
                        <p className="text-gray-600 text-sm">followers</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  
                  <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-rev-brown/50 rounded-full p-1 cursor-pointer text-white hover:bg-rev-brown transition-colors">
                    <ChevronLeft size={20} />
                  </div>
                  <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-rev-brown/50 rounded-full p-1 cursor-pointer text-white hover:bg-rev-brown transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
              
              <Link 
                to="/links" 
                className="inline-flex items-center text-rev-orange hover:text-rev-brown font-semibold"
              >
                Follow me across platforms <Share2 className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Merch Section */}
      <section className="py-16 bg-rev-beige/30">
        <div className="container mx-auto px-4" style={!isCavemanMode ? {
          '--rev-brown': '#3A2A1B',
          '--rev-beige': '#D8C3A5',
          '--rev-orange': '#E8871E',
          '--rev-yellow': '#FFC107',
          '--rev-dark': '#1E1810',
          '--rev-light': '#F5F0E8'
        } as React.CSSProperties : undefined}>
          <h2 className="text-3xl font-bold mb-2 text-rev-brown text-center font-heading">Caveman Collection</h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Show your support with our exclusive Caveman-themed merchandise. Each purchase helps fuel more automotive content!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 bg-rev-brown flex justify-center items-center p-4">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <img 
                    src="https://drive.google.com/file/d/15FVERl0LXqD0R_7XqhlGIyLLI4SJkDGX/view?usp=sharing"
                    alt="Caveman Race Team T-shirt Design" 
                    className="h-full object-contain"
                  />
                  <img 
                    src="https://drive.google.com/file/d/1XpFcgYZq6RzXdgsqbzkXqsqbHxmfvOkR/view?usp=sharing"
                    alt="Caveman Race Team T-shirt Model" 
                    className="h-full object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rev-brown">Caveman Race Team T-shirt</h3>
                <p className="text-gray-700 mb-4">Premium cotton tee featuring our signature Caveman Race Team logo with the classic "UGGA DUGGA" car repair catchphrase. Available in multiple sizes.</p>
                <a 
                  href="#" 
                  className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  Buy Now - $29.99
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 bg-rev-brown flex justify-center items-center p-4">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1586357449920-37726b4553c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Caveman Mechanics T-shirt Design" 
                    className="h-full object-contain"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Caveman Mechanics T-shirt Model" 
                    className="h-full object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rev-brown">Caveman Mechanics T-shirt</h3>
                <p className="text-gray-700 mb-4">Soft and durable tee with the iconic Caveman Mechanics design featuring our mascot with thumbs up and "MECH-AN-ICS" lettering. Perfect for garage days!</p>
                <a 
                  href="#" 
                  className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  Buy Now - $29.99
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Section */}
      <section className="py-16 bg-rev-brown text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">Partner With Revreign</h2>
              <p className="mb-6 text-gray-200 leading-relaxed">
                Looking to collaborate with an automotive influencer who connects with over 290k followers across platforms? Let's work together to create engaging sponsored content that resonates with car enthusiasts worldwide.
              </p>
              
              <div className="bg-rev-dark/50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-3 text-rev-orange">Key Engagement Stats</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center">
                    <span className="bg-rev-orange rounded-full p-1 mr-2"></span>
                    13-17% average engagement rate on TikTok
                  </li>
                  <li className="flex items-center">
                    <span className="bg-rev-orange rounded-full p-1 mr-2"></span>
                    30.81% reach rate on Instagram Reels
                  </li>
                  <li className="flex items-center">
                    <span className="bg-rev-orange rounded-full p-1 mr-2"></span>
                    High audience retention on YouTube tutorials
                  </li>
                </ul>
              </div>
              
              <Link 
                to="/partnerships" 
                className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-6 rounded inline-flex items-center transition-colors"
              >
                <Users className="mr-2" size={18} />
                Learn About Partnerships
              </Link>
            </div>
            
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Car Workshop" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Storefronts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-rev-brown text-center font-heading">Shop My Recommended Tools</h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Discover the tools and products I personally use and recommend for your DIY automotive projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-rev-beige/20 rounded-lg p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Amazon Storefront" 
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-rev-brown">Amazon Storefront</h3>
              <p className="text-gray-700 mb-4">
                Explore curated tools and products for DIY car projects—all handpicked by Revreign to help you fix your vehicle on a budget.
              </p>
              <Link 
                to="/amazon" 
                className="bg-rev-brown hover:bg-rev-dark text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
              >
                Shop Amazon Picks
              </Link>
            </div>
            
            <div className="bg-rev-beige/20 rounded-lg p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1599707254454-df28ef993360?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Walmart Storefront" 
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-rev-brown">Walmart Storefront</h3>
              <p className="text-gray-700 mb-4">
                Discover affordable tools and products for DIY mechanics through my Walmart storefront. Every purchase helps support my content creation.
              </p>
              <Link 
                to="/walmart" 
                className="bg-rev-brown hover:bg-rev-dark text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
              >
                Shop Walmart Picks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;