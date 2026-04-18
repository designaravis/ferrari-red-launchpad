import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'; 
import logo from '@/assets/logoo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-1 bg-gradient-to-r from-primary via-ferrari-glow to-primary" />

      <div className="container mx-auto px-2 lg:px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 -ml-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="Inotriz Global"
              className="h-80 w-auto mb-1" 
            />
            
            {/* Alignment container: adjusted padding to match the "I" in the logo */}
            <div className="pl-10 md:pl-14"> 
              <p className="text-secondary-foreground/70 max-w-md mb-6 leading-relaxed">
                Inotriz Global accelerates and scales businesses through a powerful 
                synergy of Business Consulting, software solutions, and Document scanning & Digitalization services.
              </p>
              
              {/* Social Media Links Section */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -3, color: '#FF2800' }} 
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary-foreground/70 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <p className="text-primary font-display text-xl font-semibold">
                Grow With Confidence
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
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
                'Document scanning & Digitalization',
                'Scanning & OCR Services',
                'Software Solutions',
                'Design Services',
                'Digital Services',
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