import React from 'react';
import { ShoppingCart, RefreshCw, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Sales',
      description: 'Brand new copiers and printers from leading manufacturers like Canon, HP, Xerox, and Brother.',
      features: [
        'Latest technology models',
        'Competitive pricing',
        'Volume discounts available',
        'Trade-in programs'
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Leasing',
      description: 'Flexible leasing options that preserve your capital while keeping you current with technology.',
      features: [
        'Low monthly payments',
        'Tax advantages',
        'Upgrade flexibility',
        'Maintenance included'
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Wrench,
      title: 'Repair & Maintenance',
      description: 'Expert technicians providing fast, reliable repair services to minimize your downtime.',
      features: [
        'Certified technicians',
        'Same-day service',
        'Genuine parts only',
        'Preventive maintenance'
      ],
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive solutions for all your printing and copying needs, 
            from initial purchase to ongoing maintenance and support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className={`inline-flex p-3 rounded-xl ${service.color.replace('bg-blue-50 text-blue-600', 'bg-blue-500/20 text-blue-400').replace('bg-green-50 text-green-600', 'bg-green-500/20 text-green-400').replace('bg-purple-50 text-purple-600', 'bg-purple-500/20 text-purple-400')} mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and customized quote for your business needs.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;