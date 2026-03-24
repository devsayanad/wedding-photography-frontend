import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X, ZoomIn, Heart } from 'lucide-react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ceremony', label: 'Ceremony' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'reception', label: 'Reception' },
    { id: 'details', label: 'Details' },
    { id: 'getting-ready', label: 'Getting Ready' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/src/assets/images/gallery/wedding1.jpg',
      alt: 'Sunset beach wedding couple kiss',
      category: 'ceremony',
      title: 'Beach Sunset Kiss',
      description: 'Golden hour beach ceremony in Malibu',
      featured: true
    },
    {
      id: 2,
      src: '/src/assets/images/gallery/wedding2.jpg',
      alt: 'Elegant ballroom wedding reception',
      category: 'reception',
      title: 'Grand Ballroom Celebration',
      description: 'Luxury hotel reception in New York',
      featured: true
    },
    {
      id: 3,
      src: '/src/assets/images/gallery/wedding3.jpg',
      alt: 'Romantic forest wedding portraits',
      category: 'portraits',
      title: 'Enchanted Forest',
      description: 'Woodland portraits in Oregon',
      featured: true
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Wedding dress details lace closeup',
      category: 'details',
      title: 'Bridal Details',
      description: 'Intricate lace and pearl details',
      featured: false
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Couple laughing during getting ready',
      category: 'getting-ready',
      title: 'Morning Preparations',
      description: 'Joyful getting ready moments',
      featured: false
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Traditional church wedding ceremony',
      category: 'ceremony',
      title: 'Cathedral Vows',
      description: 'Traditional church ceremony',
      featured: false
    },
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Our Gallery</h2>
          <p className={styles.subtitle}>
            Browse through our collection of beautiful wedding moments
          </p>
        </div>

        {/* Search and Filter */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search photos by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.categoryFilter}>
            <Filter size={18} />
            <div className={styles.categoryButtons}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.categoryButton} ${
                    selectedCategory === category.id ? styles.active : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`${styles.galleryItem} ${image.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={styles.galleryImage}
                />
                <div className={styles.imageOverlay}>
                  <ZoomIn size={24} />
                  <div className={styles.imageInfo}>
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className={styles.emptyState}>
            <Heart size={48} />
            <h3>No photos found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeModal}
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
            <div className={styles.modalInfo}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <div className={styles.modalMeta}>
                <span className={styles.categoryTag}>
                  {categories.find(c => c.id === selectedImage.category)?.label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;