import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Wrench, Clock, Facebook, Instagram } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Top Bar - Contact Info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden sm:block">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} className="text-blue-500" /> 0161 123 4567
            </span>
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
              <MapPin size={14} className="text-blue-500" /> Baguley, Manchester
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-blue-500" /> Mon-Sat: 9AM - 6PM
            </span>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
             <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-40 shadow-sm border-b border-slate-100">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Wrench size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">BAGULEY</span>
                <span className="text-sm font-semibold text-slate-500 tracking-wider leading-none">MOT CENTRE</span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive ? 'text-blue-600' : 'text-slate-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Book MOT
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 border-b border-slate-50 ${
                      isActive ? 'text-blue-600' : 'text-slate-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-blue-600 text-white text-center py-3 rounded-md font-semibold mt-4"
              >
                Book Your MOT
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Wrench className="text-blue-500" size={24} />
                <span className="font-bold text-lg">BAGULEY MOT</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Your local, trusted MOT centre. Fast service, honest results, and fair prices for Manchester drivers.
              </p>
              <div className="flex space-x-4">
                 <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <Facebook size={16} />
                 </div>
                 <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <Instagram size={16} />
                 </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">Class 4 MOT</NavLink></li>
                <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">Pre-MOT Checks</NavLink></li>
                <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">MOT Re-tests</NavLink></li>
                <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">Minor Repairs</NavLink></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/about" className="hover:text-blue-400 transition-colors">About Us</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-blue-400 transition-colors">Contact</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-blue-400 transition-colors">FAQ</NavLink></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Find Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-blue-500 mt-1 shrink-0" size={16} />
                  <span>Baguley, Manchester<br/>(Exact address pending)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-blue-500 shrink-0" size={16} />
                  <span>0161 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-blue-500 shrink-0" size={16} />
                  <span>Mon-Sat: 9am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Baguley MOT Centre. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;