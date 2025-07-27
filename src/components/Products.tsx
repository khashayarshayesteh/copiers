import React from 'react';
import { Monitor, Building2, Home, Zap } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Building2,
      title: 'Commercial Copiers',
      description: 'High-volume multifunction devices for busy offices',
      features: ['Up to 100+ ppm', 'Advanced finishing', 'Network integration', 'Security features'],
      image: 'https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Monitor,
      title: 'Desktop Printers',
      description: 'Compact and efficient printers for individual workstations',
      features: ['Laser & inkjet options', 'Wireless connectivity', 'Mobile printing', 'Energy efficient'],
      image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Production Systems',
      description: 'Industrial-grade printing solutions for high-volume environments',
      features: ['Professional quality', 'Variable data printing', 'Color management', 'Automated workflows'],
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Home,
      title: 'Small Office Solutions',
      description: 'Perfect balance of features and affordability for small businesses',
      features: ['All-in-one functionality', 'Cloud connectivity', 'Cost-effective', 'Easy maintenance'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const brands = [
    { name: 'Canon', logo: 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'HP', logo: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Xerox', logo: 'https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Brother', logo: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Our Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of printing and copying solutions from industry-leading 
            manufacturers to meet every business need and budget.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4 bg-gray-900 p-3 rounded-xl border border-gray-700">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brands Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted Brands We Carry</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border border-gray-700"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mb-3 mx-auto flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-300">{brand.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-400">{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Inquiry CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help Choosing?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our experts will help you find the perfect printing solution for your specific needs and budget. 
              Get personalized recommendations today.
            </p>
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Get Product Recommendations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;