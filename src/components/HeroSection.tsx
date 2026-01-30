import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, Zap } from 'lucide-react';
import worldMap from '@/assets/world-map.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* World Map Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={worldMap}
            alt=""
            className="w-full max-w-6xl object-contain"
          />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                ISO 9001:2015 Certified
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Grow With{' '}
              <span className="text-gradient">Confidence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              We accelerate and scale businesses through powerful synergy of Business Consulting, 
              Marketing, and Global Trade solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ferrari px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-foreground/20 text-lg font-semibold hover:border-primary hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Stats Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="card-3d bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  50+
                </h3>
                <p className="text-muted-foreground text-sm">Countries Served</p>
              </motion.div>

              {/* Stats Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -10, rotateY: -5 }}
                className="card-3d bg-primary text-primary-foreground p-6 rounded-2xl shadow-ferrari mt-8"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold mb-1">
                  200+
                </h3>
                <p className="text-primary-foreground/80 text-sm">Projects Delivered</p>
              </motion.div>

              {/* Stats Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="card-3d bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold mb-1">
                  98%
                </h3>
                <p className="text-secondary-foreground/80 text-sm">Client Satisfaction</p>
              </motion.div>

              {/* Stats Card 4 */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -10, rotateY: -5 }}
                className="card-3d bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover border border-border/50 mt-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">★</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  10+
                </h3>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
