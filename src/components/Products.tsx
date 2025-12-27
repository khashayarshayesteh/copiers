import React from 'react';
import BandW from '../assets/BandW.jpg';
import Color from '../assets/Color.jpg';
import SharpLogo from '../assets/sharp.png';
import CanonLogo from '../assets/canon.png';
import HpLogo from '../assets/hp.png';
import BrotherLogo from '../assets/brother.png';
import KyoceraLogo from '../assets/kyocera.png';

const Products: React.FC = () => {
  const categories = [
    {
      title: 'B & W Printer & Copiers',
      description: 'High-volume to desktop Black and White multifunction printers.',
      features: ['Up to 100+ ppm', 'Advanced finishing', 'Network integration', 'Security features'],
      image: BandW
    },
    {
      title: 'Color Printer & Copiers',
      description: 'High-volume to desktop Color multifunction printers.',
      features: ['Laser & inkjet options', 'Wireless connectivity', 'Mobile printing', 'Energy efficient'],
      image: Color
    }
  ];

  const brands = [
    { name: 'Sharp', logo: SharpLogo },
    { name: 'Canon', logo: CanonLogo },
    { name: 'HP', logo: HpLogo },
    { name: 'Brother', logo: BrotherLogo },
    { name: 'Kyocera', logo: KyoceraLogo }
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
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="relative w-full h-60">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
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
          ))}
        </div>

        {/* Brands Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Brands We Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-700"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-32 h-32 object-contain mb-3"
                />
                <span className="text-lg font-semibold text-gray-200">{brand.name}</span>
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
