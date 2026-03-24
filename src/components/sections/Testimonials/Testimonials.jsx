import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// In your Testimonials component:


const Testimonials = () => {


const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "A & J",
      text: "They captured our day perfectly — we can't stop smiling.",
      date: "October 2024",
      rating: 5,
    },
    {
      id: 2,
      name: "M & S",
      text: "Professional, calm, and creative. Highly recommend.",
      date: "September 2024",
      rating: 5,
    },
    { 
      id: 3, 
      name: "L & R", 
      text: "Our photos are timeless — we love them.",
      date: "August 2024",
      rating: 5,
    },
    {
      id: 4,
      name: "K & T",
      text: "Made us feel comfortable and the photos are stunning.",
      date: "July 2024",
      rating: 5,
    },
  ];

  // Styles
  const styles = {
    section: {
      padding: "4rem 1rem",
      background: "linear-gradient(135deg, #f9f7fe 0%, #f0edfc 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#2d3748",
      marginBottom: "0.5rem",
      fontWeight: "700",
    },
    subtitle: {
      color: "#718096",
      fontSize: "1.1rem",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    stars: {
      display: "flex",
      gap: "0.25rem",
      marginBottom: "1rem",
    },
    star: {
      fontSize: "1.5rem",
      color: "#e2e8f0",
    },
    starFilled: {
      color: "#fbbf24",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      marginBottom: "3rem",
    },
    card: {
      background: "white",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      transition: "all 0.3s ease",
      border: "1px solid #e2e8f0",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    },
    quote: {
      fontSize: "1.1rem",
      lineHeight: "1.7",
      color: "#4a5568",
      margin: "1.5rem 0",
      fontStyle: "italic",
      position: "relative",
      padding: "0 1rem",
    },
    quoteIcon: {
      position: "absolute",
      fontSize: "3rem",
      color: "rgba(79, 70, 229, 0.1)",
      fontWeight: "bold",
    },
    quoteIconLeft: {
      left: "-10px",
      top: "-15px",
    },
    quoteIconRight: {
      right: "-10px",
      bottom: "-25px",
    },
    footer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    cite: {
      fontStyle: "normal",
    },
    name: {
      display: "block",
      fontWeight: "600",
      color: "#2d3748",
      fontSize: "1.1rem",
    },
    date: {
      display: "block",
      color: "#718096",
      fontSize: "0.9rem",
    },
    carousel: {
      display: "none",
      position: "relative",
      overflow: "hidden",
      marginBottom: "2rem",
      borderRadius: "12px",
    },
    carouselTrack: {
      display: "flex",
      transition: "transform 0.3s ease",
    },
    carouselSlide: {
      minWidth: "100%",
      padding: "2rem",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    carouselBtn: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "white",
      border: "none",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      fontSize: "1.5rem",
      cursor: "pointer",
      zIndex: "2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    indicators: {
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      marginTop: "1.5rem",
    },
    indicator: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      border: "none",
      background: "#cbd5e0",
      cursor: "pointer",
      padding: "0",
    },
    indicatorActive: {
      background: "#4f46e5",
      transform: "scale(1.2)",
    },
    ctaContainer: {
      textAlign: "center",
      padding: "2rem",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    },
    ctaText: {
      fontSize: "1.3rem",
      color: "#2d3748",
      marginBottom: "1.5rem",
      fontWeight: "500",
    },
    ctaButton: {
      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      color: "white",
      border: "none",
      padding: "1rem 2rem",
      fontSize: "1.1rem",
      borderRadius: "50px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(79, 70, 229, 0.25)",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(79, 70, 229, 0.35)",
    },
  };

  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div style={styles.stars} aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            style={{
              ...styles.star,
              ...(i < rating ? styles.starFilled : {})
            }}
            role="img"
            aria-hidden="true"
          >
            {i < rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      style={styles.section}
      aria-labelledby="testimonials-heading"
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 id="testimonials-heading" style={styles.heading}>
            What Couples Say About Us
          </h2>
          <p style={styles.subtitle}>
            Hear from the wonderful couples we've had the pleasure of working with
          </p>
        </div>

        {/* Grid view for all screens */}
        <div style={styles.grid}>
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
              tabIndex="0"
            >
              {renderStars(testimonial.rating)}
              <blockquote style={styles.quote}>
                <span style={{ ...styles.quoteIcon, ...styles.quoteIconLeft }}>"</span>
                <p>{testimonial.text}</p>
                <span style={{ ...styles.quoteIcon, ...styles.quoteIconRight }}>"</span>
              </blockquote>
              <footer style={styles.footer}>
                <cite style={styles.cite}>
                  <strong style={styles.name}>{testimonial.name}</strong>
                  <time style={styles.date} dateTime={testimonial.date}>
                    {testimonial.date}
                  </time>
                </cite>
              </footer>
            </article>
          ))}
        </div>
        
        {/* CTA Section */}
        <div style={styles.ctaContainer}>
          <p style={styles.ctaText}>
            Ready to capture your special moments?
          </p>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.buttonHover.transform;
              e.currentTarget.style.boxShadow = styles.buttonHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = styles.ctaButton.boxShadow;
            }}
            onClick={() => navigate('/contact')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/contact')}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;