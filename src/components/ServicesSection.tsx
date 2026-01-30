import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  TrendingUp,
  Globe2,
  Code,
  Palette,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Strategic planning, market analysis, competitive positioning, and operational optimization.',
    features: ['Business Planning', 'Market Analysis', 'Growth Frameworks'],
    color: 'primary',
  },
  {
    icon: Megaphone,
    title: 'Marketing Consulting',
    description: 'Branding, digital marketing strategy, lead generation, and analytics-driven optimization.',
    features: ['Digital Strategy', 'Lead Generation', 'Social Media'],
    color: 'secondary',
  },
  {
    icon: Globe2,
    title: 'Import & Export',
    description: 'Documentation, supplier sourcing, logistics coordination, and global trade management.',
    features: ['Global Sourcing', 'Logistics', 'Compliance'],
    color: 'primary',
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description: 'E-commerce development, automated systems, LMS solutions, and custom applications.',
    features: ['E-commerce', 'Automation', 'Custom Apps'],
    color: 'secondary',
  },
  {
    icon: Palette,
    title: 'Design Services',
    description: 'Logo design, branding, video animation, packaging, and marketing collateral.',
    features: ['Logo Design', 'Branding', 'Animation'],
    color: 'primary',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'SEO, paid campaigns, social media marketing, and performance optimization.',
    features: ['SEO', 'Paid Ads', 'Analytics'],
    color: 'secondary',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we provide end-to-end services to help your business 
            thrive in domestic and international markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.color === 'primary' 
                    ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
