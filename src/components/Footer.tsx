import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-900 pt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">

          {/* Brand Col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-12 lg:col-span-4 space-y-6"
          >
            <Link to="/" className="inline-block">
              <img src={logo} className="h-10 w-auto" alt='red-logo' />
            </Link>
            <p className="text-gray-500 leading-relaxed font-light pr-4">
              Crafting premium beverages that refresh, energize, and inspire global communities. Built on quality ingredients and exceptional taste since day one.
            </p>
            <div className="flex space-x-3 pt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href={idx === 0 ? "https://www.facebook.com/share/1H2rUaqeax/?mibextid=wwXIfr" : "#"}
                  className="w-10 h-10 bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-500 rounded-full flex items-center justify-center transition-all duration-300"
                  target={idx === 0 ? '_blank' : undefined}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 lg:col-span-2 space-y-6 lg:ml-auto"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Explore</h3>
            <ul className="space-y-4 text-gray-500 font-medium">
              {['Home', 'Products', 'About Us', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#ee1e23] transition-colors inline-block w-full">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 lg:col-span-2 space-y-6 lg:ml-auto"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Legal</h3>
            <ul className="space-y-4 text-gray-500 font-medium">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#ee1e23] transition-colors inline-block w-full">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 lg:col-span-4 space-y-6 lg:ml-auto"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Contact</h3>
            <ul className="space-y-5 text-gray-500">
              <li className="flex items-start shadow-sm border border-gray-100 rounded-2xl p-4 transition-all hover:border-gray-200 hover:shadow-md bg-white">
                <MapPin className="w-5 h-5 text-[#ee1e23] mt-0.5 flex-shrink-0" />
                <span className="ml-4 font-light leading-relaxed">
                  No,4/3, Artigala road,<br /> Artigala, Hanwella
                </span>
              </li>
              <li className="flex items-center shadow-sm border border-gray-100 rounded-2xl p-4 transition-all hover:border-gray-200 hover:shadow-md bg-white">
                <Phone className="w-5 h-5 text-[#ee1e23] flex-shrink-0" />
                <Link to="tel:+94770139200" className="ml-4 font-light hover:text-[#ee1e23] transition-colors">
                  +94 770139200
                </Link>
              </li>
              <li className="flex items-center shadow-sm border border-gray-100 rounded-2xl p-4 transition-all hover:border-gray-200 hover:shadow-md bg-white">
                <Mail className="w-5 h-5 text-[#ee1e23] flex-shrink-0" />
                <Link to="mailto:redbeverages1@gmail.com" className="ml-4 font-light hover:text-[#ee1e23] transition-colors">
                  redbeverages1@gmail.com
                </Link>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 py-6 border-t border-gray-200/60 mt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} Red Beverages. All rights reserved.
          </p>
          <div className="text-sm font-bold tracking-tight text-gray-300 pointer-events-none select-none hidden md:block">
            M A X <span className="text-[#ee1e23] opacity-50">•</span> B E V E R A G E S
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;