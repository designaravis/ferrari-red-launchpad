import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online store with payment integration',
  },
  {
    title: 'Healthcare Website',
    category: 'Medical',
    description: 'Patient portal with appointment booking system',
  },
  {
    title: 'Brand Identity',
    category: 'Design',
    description: 'Complete branding for food industry client',
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'Marketing',
    description: 'Lead generation campaign with 300% ROI',
  },
  {
    title: 'Import-Export Portal',
    category: 'Impex',
    description: 'Global trade management platform',
  },
  {
    title: 'LMS Solution',
    category: 'Education',
    description: 'Custom learning management system',
  },
];

const clients = [
  'Gentize Innovations',
  'Kinesis Healthcare',
  'True Accessibility',
  'Chennai Breast Care',
  'Holistic Pain Clinic',
  'Archana Temple',
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Projects That Speak For Us
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            A glimpse of our successful collaborations across various industries.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
                  {item.category}
                </span>
                
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-secondary-foreground/60 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-medium text-secondary-foreground/60 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-secondary-foreground/40 hover:text-primary font-semibold text-lg transition-colors cursor-default"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
