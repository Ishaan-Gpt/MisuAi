
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Chrome Extension', href: '#' }
    ],
    solutions: [
      { name: 'Sales Teams', href: '#' },
      { name: 'Agencies', href: '#' },
      { name: 'Startups', href: '#' },
      { name: 'Enterprise', href: '#' },
      { name: 'Recruiting', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  };

  return (
    <footer className="sp-footer">
      {/* Main footer */}
      <div className="sp-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-white">MisuAi</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The smartest way to send cold emails. Our AI helps you write personalized emails 
              that get replies and close deals.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="sp-footer-link hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="sp-footer-link hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="sp-footer-link hover:text-blue-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="sp-footer-link hover:text-blue-400">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@misuai.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="sp-footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="sp-footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="sp-footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-4">Stay updated</h4>
            <p className="text-gray-300 mb-4">
              Get the latest tips and strategies for cold email success.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button className="sp-btn-primary rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="sp-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MisuAi. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="sp-footer-link">Privacy Policy</a>
              <a href="#" className="sp-footer-link">Terms of Service</a>
              <a href="#" className="sp-footer-link">Cookie Policy</a>
              <a href="#" className="sp-footer-link">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
