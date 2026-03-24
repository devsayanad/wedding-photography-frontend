import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Camera, Heart, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background with gradient overlay */}
      <div className={styles.heroBackground}>
        <div className={styles.overlay}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <motion.div
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heart size={16} />
            <span>10+ Years of Love Stories</span>
            <Sparkles size={12} />
          </motion.div>

          {/* Main Heading */}
          <h1 className={styles.mainHeading}>
            <span className={styles.headingLine}>Capture Your</span>
            <span className={styles.headingAccent}>Eternal Love Story</span>
          </h1>

          {/* Subheading */}
          <p className={styles.subheading}>
            Professional wedding photography that transforms fleeting moments into
            timeless memories. Authentic, elegant, and uniquely yours.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar size={20} />
              Book a Consultation
            </motion.button>
            <motion.button
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/portfolio'}
            >
              <Camera size={20} />
              View Our Work
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Weddings Captured</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Happiness</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* Floating Elements for visual interest */}
      <div className={styles.floatingElements}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.floatingElement}
            style={{
              '--delay': `${i * 0.5}s`,
              '--size': `${20 + i * 10}px`,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;