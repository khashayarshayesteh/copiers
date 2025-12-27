import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Star, Users, Wrench } from 'lucide-react';
import HeroBanner from '../assets/HeroBanner.png';

const Hero: React.FC = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = '+19493729853';
  const supportRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (supportRef.current && !supportRef.current.contains(event.target as Node)) {
        setShowPhone(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section
      id="home"
      className="bg-white bg-cover bg-center bg-no-repeat py-24 lg:py-32 relative"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Complete
                <span className="text-blue-400 block">Print Solution</span>
                Partner
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                From high-volume commercial copiers to desktop printers, we provide sales,
                leasing, and expert repair services to keep your business running smoothly.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>

              {/* Clickable 24/7 Support */}
              <div className="relative" ref={supportRef}>
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="flex items-center gap-2 text-sm font-medium bg-blue-500 px-4 py-2 rounded-xl shadow-lg hover:bg-blue-600 transition"
                >
                  <Wrench className="h-5 w-5 text-white" />
                  24/7 Support
                </button>

                {showPhone && (
                  <div className="absolute mt-2 p-3 bg-white text-black rounded shadow-lg text-sm">
                    Call us: <a href={`tel:${phoneNumber}`} className="font-semibold hover:text-blue-500">{phoneNumber}</a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#services"
                className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 text-center"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
