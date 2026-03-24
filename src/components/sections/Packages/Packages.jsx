import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Clock, Users, Camera, Gift } from 'lucide-react';
import styles from './Packages.module.css';

const Packages = () => {
  const packages = [
    {
      id: 'essential',
      name: 'Essential Collection',
      price: 'Rs. 12,000',
      description: 'Perfect for intimate weddings or elopements',
      popular: false,
      features: [
        { icon: Clock, text: '6 hours of coverage' },
        { icon: Users, text: '1 photographer' },
        { icon: Camera, text: '300+ edited digital photos' },
        { icon: Gift, text: 'Online gallery for 1 year' },
        { icon: Check, text: 'Printing rights included' },
        { icon: Check, text: 'Engagement session (optional add-on)' }
      ],
      bestFor: 'Small weddings, courthouse ceremonies, elopements'
    },
    {
      id: 'premium',
      name: 'Premium Collection',
      price: 'Rs. 24,000',
      description: 'Our most popular package for complete coverage',
      popular: true,
      features: [
        { icon: Clock, text: '10 hours of coverage' },
        { icon: Users, text: '2 photographers' },
        { icon: Camera, text: '600+ edited digital photos' },
        { icon: Gift, text: 'Online gallery for 2 years' },
        { icon: Check, text: 'Printing rights included' },
        { icon: Check, text: 'Engagement session included' },
        { icon: Check, text: '10×10 premium photo album' },
        { icon: Check, text: 'Sneak peek within 48 hours' }
      ],
      bestFor: 'Traditional weddings with full-day coverage'
    },
    {
      id: 'luxury',
      name: 'Luxury Collection',
      price: 'Rs. 48,000',
      description: 'Ultimate experience for destination or multi-day weddings',
      popular: false,
      features: [
        { icon: Clock, text: 'Full weekend coverage' },
        { icon: Users, text: 'Lead photographer + 2 assistants' },
        { icon: Camera, text: '1000+ edited digital photos' },
        { icon: Gift, text: 'Online gallery for lifetime' },
        { icon: Check, text: 'Engagement + bridal sessions' },
        { icon: Check, text: 'Custom luxury album + parent albums' },
        { icon: Check, text: '48-hour sneak peek' },
        { icon: Check, text: 'Drone footage (where permitted)' },
        { icon: Check, text: 'Custom wedding timeline planning' }
      ],
      bestFor: 'Destination weddings, multi-day celebrations, luxury events'
    }
  ];

  return (
    <section className={styles.packages}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Photography Packages</h2>
          <p className={styles.subtitle}>
            Choose the perfect package for your special day. All packages include
            our signature elegant editing style and personalized service.
          </p>
        </div>

        <div className={styles.packageGrid}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {pkg.popular && (
                <div className={styles.popularBadge}>
                  <Star size={16} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className={styles.packageHeader}>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <div className={styles.packagePrice}>
                  <span className={styles.price}>{pkg.price}</span>
                  <span className={styles.priceNote}>Starting at</span>
                </div>
                <p className={styles.packageDescription}>{pkg.description}</p>
              </div>

              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>What's Included:</h4>
                <ul className={styles.featuresList}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <feature.icon className={styles.featureIcon} size={18} />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.bestFor}>
                <strong>Best for:</strong> {pkg.bestFor}
              </div>

              <div className={styles.cta}>
                <button className={styles.inquireButton}>
                  Inquire About This Package
                </button>
                <button className={styles.detailsButton}>
                  View Full Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.customPackage}>
          <div className={styles.customContent}>
            <h3 className={styles.customTitle}>Custom Package</h3>
            <p className={styles.customDescription}>
              Every love story is unique. Let's create a custom package tailored
              specifically to your vision and needs.
            </p>
            <ul className={styles.customFeatures}>
              <li>Mix and match services</li>
              <li>Flexible hours and coverage</li>
              <li>Destination wedding options</li>
              <li>Special requirements welcome</li>
            </ul>
            <button className={styles.customCta}>
              Schedule a Custom Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;