import React from 'react';
import { Printer, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const services = [
    'Commercial Copiers',
    'Desktop Printers',
    'Equipment Leasing',
    'Repair & Maintenance',
    'Managed Print Services',
    'Preventive Maintenance'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
    { name: 'Request Quote', href: '#contact' },
    { name: 'Emergency Service', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Printer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PrintTech Solutions</h3>
                <p className="text-gray-400 text-sm">Sales • Lease • Repair</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for comprehensive printing and copying solutions. 
              Serving businesses with quality equipment and exceptional service since 2009.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Business Park Drive</p>
                  <p>Suite 200, Your City, ST 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>(949) 372-9853</p>
                  <p className="text-sm">Emergency: 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>sales@printtechsolutions.com</p>
                  <p className="text-sm">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8AM - 6PM</p>
                  <p>Saturday: 9AM - 2PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-blue-500 rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold mb-2">Emergency Service Available 24/7</h4>
          <p className="mb-4">Printer down? Need immediate assistance? We're here to help.</p>
          <a
            href="tel:+15551234567"
            className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Call Emergency Line
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 PrintTech Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;