import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Award, Users, Target } from 'lucide-react';

const features = [
  'End-to-end execution support',
  'Strategy to implementation',
  'Global market expansion',
  'Sustainable success approach',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary via-primary to-ferrari-dark p-8 lg:p-12 rounded-3xl shadow-ferrari text-primary-foreground relative overflow-hidden"
              >
                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
                
                <div className="relative z-10">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                    INOTRIZ GLOBAL
                  </h3>
                  <p className="text-primary-foreground/90 text-lg mb-8">
                    Unlike traditional consulting firms, we don't just advise—we execute.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Award className="w-10 h-10 mx-auto mb-2 opacity-90" />
                      <p className="text-sm opacity-80">ISO Certified</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-10 h-10 mx-auto mb-2 opacity-90" />
                      <p className="text-sm opacity-80">Expert Team</p>
                    </div>
                    <div className="text-center">
                      <Target className="w-10 h-10 mx-auto mb-2 opacity-90" />
                      <p className="text-sm opacity-80">Results Driven</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle2 className="w-10 h-10 mx-auto mb-2 opacity-90" />
                      <p className="text-sm opacity-80">Proven Track</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -right-6 lg:-right-12 bg-card p-4 rounded-2xl shadow-card-hover border border-border"
              >
                <div className="text-center">
                  <span className="font-display text-3xl font-bold text-primary">10+</span>
                  <p className="text-xs text-muted-foreground mt-1">Years of<br />Excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Accelerating Business Growth Globally
            </h2>
            <p className="text-white text-lg mb-6">
              Inotriz Global accelerates and scales businesses through a powerful synergy of services. 
              We offer Business Consulting, Software solutions and Document scanning & Digitalization to 
              expand your reach across global borders.
            </p>
            <p className="text-white mb-8">
              From strategy to implementation, we manage the end-to-end growth journey, 
              ensuring businesses achieve sustainable success in both domestic and international markets.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ferrari px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold"
            >
              Explore Our Services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
