import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovingImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  // Sample images data (replace with your actual images)
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'AI Solutions'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'EdTech Platform'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      title: 'Digital Marketing'
    },
    {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Business Growth'
    },
    {
      url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      title: 'Data Analytics'
    },
    {
      url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Cloud Solutions'
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [carouselImages.length]);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-display text-white mb-6 leading-tight">
            Delivering Digital 
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Transformation Solutions
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We help organizations redefine their business processes, adapt to new technologies, 
            and implement change that drives measurable outcomes and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="xl" className="group" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline-white" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Moving Image Carousel */}
        <div className="relative">
          {/* Main carousel container */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            {/* Background Images */}
            {carouselImages.map((image, index) => {
              const isActive = index === currentImage;
              const isPrev = index === (currentImage - 1 + carouselImages.length) % carouselImages.length;
              const isNext = index === (currentImage + 1) % carouselImages.length;
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    isActive 
                      ? 'opacity-100 scale-100 z-10' 
                      : isPrev || isNext
                      ? 'opacity-60 z-5'
                      : 'opacity-0 z-0'
                  } ${
                    isPrev ? 'scale-105 -translate-x-4' : 
                    isNext ? 'scale-105 translate-x-4' : 
                    'scale-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              );
            })}

            {/* Floating Images Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {carouselImages.slice(0, 4).map((image, index) => (
                <div
                  key={`floating-${index}`}
                  className="absolute w-20 h-20 rounded-lg overflow-hidden shadow-2xl animate-float opacity-80"
                  style={{
                    left: `${15 + index * 20}%`,
                    top: `${20 + index * 15}%`,
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${4 + index}s`
                  }}
                >
                  <img
                    src={carouselImages[(currentImage + index + 1) % carouselImages.length].url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Morphing shapes around the carousel */}
          <div className="absolute -inset-4 pointer-events-none">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s' }} />
          </div>

          {/* Progress indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-white w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS for float animation */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MovingImageCarousel;