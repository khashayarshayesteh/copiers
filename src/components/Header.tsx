import React, { useState } from 'react';
import { Menu, X, Printer, Phone, Mail } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-slate-500 border-b border-slate-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Top Row ===== */}
        <div className="flex justify-between items-center py-5">

          {/* Logo + Name */}
          <div className="flex items-center gap-4">


            <div>
              <h1 className="text-3xl md:text-4xl tracking-tight font-bold text-white">
                PrintTech Solutions
              </h1>
              <p className="text-slate-300 text-sm">
                Lease • Rental • Repair
              </p>

              {/* Contact */}
              <div className="hidden md:flex gap-6 mt-1">
                <a
                  href="tel:+9493729853"
                  className="flex items-center gap-2 text-slate-200 hover:text-blue-400"
                >
                  <Phone className="h-4 w-4" />
                  (949)372-9853
                </a>

                <a
                  href="mailto:shayesteh.office@gmail.com"
                  className="flex items-center gap-2 text-slate-200 hover:text-blue-400"
                >
                  <Mail className="h-4 w-4" />
                  shayesteh.office@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-200 hover:text-blue-400 font-medium transition"
              >
                {item.name}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Get Quote
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/YourPrinterBusinessPage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ===== Mobile Menu ===== */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-6">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </a>

              {/* Mobile Contact */}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+9493729853"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Phone className="h-5 w-5 text-blue-500" />
                  (949)3729853
                </a>

                <a
                  href="mailto:shayesteh.office@gmail.com"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Mail className="h-5 w-5 text-blue-500" />
                  shayesteh.office@gmail.com
                </a>

                <a
                  href="https://www.facebook.com/YourPrinterBusinessPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-blue-600"
                >
                  <FaFacebook className="w-7 h-7" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
