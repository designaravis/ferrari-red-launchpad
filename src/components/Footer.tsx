import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-1 bg-gradient-to-r from-primary via-ferrari-glow to-primary" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="Inotriz Global"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 max-w-md mb-6">
              Inotriz Global accelerates and scales businesses through a powerful 
              synergy of Business Consulting, Marketing, and Import/Export services.
            </p>
            <p className="text-primary font-display text-xl font-semibold">
              Grow With Confidence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors hover-underline inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Business Consulting',
                'Marketing Consulting',
                'Import & Export',
                'Web Development',
                'Design Services',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors hover-underline inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Inotriz Global Private Limited. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-ferrari"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
