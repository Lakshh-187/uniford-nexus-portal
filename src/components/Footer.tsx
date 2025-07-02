
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Users, 
  ExternalLink,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  PenTool,
  Crown,
  Monitor,
  Home,
  Info,
  HandHeart,
  Shield,
  DollarSign,
  Heart,
  Stamp,
  Settings,
  FileCheck,
  Zap,
  Briefcase,
  BookOpen,
  Code2,
  Receipt
} from 'lucide-react';

const Footer = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'UNSIP', path: '/unsip', icon: Zap },
    { name: 'MOU & Collaboration', path: '/mou-collaboration', icon: HandHeart },
    { name: 'Authentication', path: '/authentication', icon: Shield },
    { name: 'Grants Portal', path: '/grants', icon: DollarSign },
    { name: 'Donation Portal', path: '/donation', icon: Heart },
    { name: 'Our Team', path: '/team', icon: Users },
  ];

  const unsipPortals = [
    { name: 'UIS-1: Opportunities', path: '/uis-1', icon: Briefcase },
    { name: 'UIS-2: Resources', path: '/uis-2', icon: BookOpen },
    { name: 'UIS-3: Projects', path: '/uis-3', icon: Code2 },
  ];

  const advancedFeatures = [
    { name: 'Tech Support Portal', path: '/tech-support-portal', icon: Monitor },
    { name: 'Advanced Document Generator', path: '/advanced-document-generator', icon: Crown },
    { name: 'Template Generator', path: '/template-generator', icon: FileText },
    { name: 'Letter Generator', path: '/letter-generator', icon: PenTool },
    { name: 'Invoice Generator', path: '/invoice-generator', icon: Receipt },
    { name: 'Policy & Agreement', path: '/policy-agreement', icon: Settings },
    { name: 'Stamp & Signature', path: '/stamp-signature', icon: Stamp },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
  ];

  const handleUnifordClick = () => {
    window.open('https://www.uniford.org', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <div className="text-xl font-bold">UNCIF</div>
                <div className="text-sm text-purple-300">Uniford National Council</div>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transforming educational institutions through innovation, collaboration, and excellence.
              Building the future of learning together.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-purple-300">
                UNCIF is registered as{' '}
                <button 
                  onClick={handleUnifordClick}
                  className="text-yellow-400 hover:text-yellow-300 underline font-medium inline-flex items-center"
                >
                  Uniford Foundation
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Main Pages</h3>
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.name}>
                  <Link 
                    to={page.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-md flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <page.icon className="w-3 h-3" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {page.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UNSIP Portals */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">UNSIP Portals</h3>
            <ul className="space-y-3">
              {unsipPortals.map((portal) => (
                <li key={portal.name}>
                  <Link 
                    to={portal.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-md flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <portal.icon className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:translate-x-1 transition-transform">{portal.name}</div>
                      <div className="text-xs text-indigo-300">Portal Access</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Advanced Tools</h3>
            <ul className="space-y-3">
              {advancedFeatures.map((page) => (
                <li key={page.name}>
                  <Link 
                    to={page.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-md flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <page.icon className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:translate-x-1 transition-transform">{page.name}</div>
                      <div className="text-xs text-purple-300">Latest Tool</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info - Full Width */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-purple-300">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 text-sm">
              <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-300">info@uncif.org</div>
                <div className="text-gray-400 text-xs">General Inquiries</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 text-sm">
              <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-300">+91 98765 43210</div>
                <div className="text-gray-400 text-xs">Support Helpline</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-300">New Delhi, India</div>
                <div className="text-gray-400 text-xs">Headquarters</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Uniford Foundation. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <button 
                onClick={handleUnifordClick}
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                Powered by Uniford Foundation
                <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
