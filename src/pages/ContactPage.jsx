import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Calendar, User, MessageSquare, 
  CheckCircle, Clock, Award, Star, Shield, Heart 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    guests: '',
    location: '',
    package: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({
      name: '', email: '', phone: '', weddingDate: '', 
      guests: '', location: '', package: '', message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['(+977) 123-4567', 'Available 9AM-6PM EST'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['hello@eternalmoments.com', 'Response within 24 hours'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Studio',
      details: ['Simpani, Pokhara-1', 'By appointment only'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Consultation',
      details: ['Free 45-minute session', 'Virtual or In-person'],
      color: 'bg-gold-50 text-gold-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: '45-minute virtual meeting to discuss your vision',
      icon: <MessageSquare size={20} />
    },
    {
      step: '02',
      title: 'Custom Proposal',
      description: 'Personalized package tailored to your needs',
      icon: <Award size={20} />
    },
    {
      step: '03',
      title: 'Planning Session',
      description: 'Detailed timeline and shot list creation',
      icon: <Calendar size={20} />
    },
    {
      step: '04',
      title: 'Wedding Day',
      description: 'Beautiful, stress-free photography experience',
      icon: <Star size={20} />
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="badge">Let's Connect</span>
            <h1>Begin Your Love Story</h1>
            <p className="subtitle">
              Share your vision with us, and let's create timeless memories together. 
              We're excited to be part of your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="contact-card"
              >
                <div className={`contact-icon ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="contact-title">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="contact-detail">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="form-container"
            >
              <div className="form-header">
                <h2>Share Your Story</h2>
                <p>Fill out the form below, and we'll respond within 24 hours</p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>We've received your inquiry and will contact you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">
                        <User size={16} />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John & Sarah"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Mail size={16} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">
                        <Phone size={16} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Calendar size={16} />
                        Wedding Date
                      </label>
                      <input
                        type="date"
                        className="form-input"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({...formData, weddingDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">
                        👥 Guest Count
                      </label>
                      <select
                        className="form-input"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      >
                        <option value="">Select count</option>
                        <option value="1-50">1-50 Guests</option>
                        <option value="51-150">51-150 Guests</option>
                        <option value="151-300">151-300 Guests</option>
                        <option value="300+">300+ Guests</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <MapPin size={16} />
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="Wedding venue or city"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      📦 Package Interest
                    </label>
                    <select
                      className="form-input"
                      value={formData.package}
                      onChange={(e) => setFormData({...formData, package: e.target.value})}
                    >
                      <option value="">Select package</option>
                      <option value="essential">Essential Collection</option>
                      <option value="premium">Premium Collection</option>
                      <option value="luxury">Luxury Collection</option>
                      <option value="custom">Custom Package</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MessageSquare size={16} />
                      Your Love Story *
                    </label>
                    <textarea
                      required
                      className="form-input h-40"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your vision, special moments, and what makes your love story unique..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary flex-1"
                    >
                      {isLoading ? (
                        <>
                          <div className="spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Heart size={20} />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields. By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="process-container"
            >
              <div className="process-header">
                <Shield size={32} className="shield-icon" />
                <h2>Our Process</h2>
                <p>From inquiry to "I do" - here's how we work together</p>
              </div>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <div className="step-header">
                        <div className="step-icon">{step.icon}</div>
                        <h3 className="step-title">{step.title}</h3>
                      </div>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Working with Eternal Moments was an absolute dream. 
                  They made us feel so comfortable and captured every special moment perfectly.
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Sarah & James</h4>
                    <p className="author-date">June 2023 • Malibu Beach Wedding</p>
                  </div>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" stroke="#D4AF37" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Frequently Asked Questions</h2>
            <p className="subtitle">Common questions about our process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How far in advance should we book?",
                a: "We recommend booking 9-12 months in advance, especially for popular dates. Some dates book up 18 months ahead."
              },
              {
                q: "Do you travel for destination weddings?",
                a: "Absolutely! We love destination weddings and are passport-ready. We've photographed in 15+ countries."
              },
              {
                q: "How many photos will we receive?",
                a: "Typically 50-100 edited photos per hour of coverage. Every image is individually edited for perfection."
              },
              {
                q: "What's included in your packages?",
                a: "All packages include high-resolution digital files, printing rights, online gallery, and professional editing."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container text-center">
          <Clock size={48} className="cta-icon" />
          <h2 className="cta-title">Limited Availability</h2>
          <p className="cta-text">
            We accept a limited number of weddings each year to ensure 
            each couple receives our full attention and care.
          </p>
          <button className="btn btn-primary btn-lg">
            Check Our Availability
            <Calendar size={20} />
          </button>
        </div>
      </section>

      <style jsx>{`
        .section-hero {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.2);
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
          margin-bottom: 2rem;
          font-size: 0.875rem;
          letter-spacing: 1px;
        }

        .subtitle {
          font-size: 1.125rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 1rem auto;
        }

        .contact-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 2rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .contact-title {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .contact-detail {
          color: var(--gray);
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .form-container {
          background: white;
          border-radius: var(--radius-xl);
          padding: 3rem;
          box-shadow: var(--shadow-lg);
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-group {
          position: relative;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--navy);
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid var(--gray-light);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .success-message {
          text-align: center;
          padding: 3rem 1rem;
        }

        .success-icon {
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .process-container {
          position: sticky;
          top: 2rem;
        }

        .process-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .shield-icon {
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .process-step {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          background: white;
          border-radius: var(--radius-lg);
          margin-bottom: 1rem;
          border-left: 4px solid var(--gold);
        }

        .step-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .step-icon {
          color: var(--gold);
        }

        .step-title {
          font-size: 1.125rem;
          margin: 0;
        }

        .step-description {
          color: var(--gray);
          font-size: 0.875rem;
        }

        .testimonial-card {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          color: white;
          border-radius: var(--radius-lg);
          padding: 2rem;
          margin-top: 3rem;
          position: relative;
        }

        .testimonial-quote {
          font-family: var(--font-heading);
          font-size: 4rem;
          color: rgba(255, 255, 255, 0.2);
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .testimonial-text {
          font-size: 1.125rem;
          font-style: italic;
          margin: 1rem 0 2rem;
        }

        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .author-date {
          opacity: 0.8;
          font-size: 0.875rem;
        }

        .stars {
          display: flex;
          gap: 0.25rem;
        }

        .faq-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 2rem;
          border: 1px solid var(--gray-light);
          transition: var(--transition);
        }

        .faq-card:hover {
          border-color: var(--gold);
          box-shadow: var(--shadow-md);
        }

        .faq-question {
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
        }

        .faq-answer {
          color: var(--gray);
          line-height: 1.6;
        }

        .section-cta {
          background: linear-gradient(135deg, var(--cream) 0%, white 100%);
          padding: 4rem 0;
          text-align: center;
          border-top: 1px solid var(--gray-light);
        }

        .cta-icon {
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .cta-title {
          margin-bottom: 1rem;
        }

        .cta-text {
          max-width: 600px;
          margin: 0 auto 2rem;
          color: var(--gray);
        }

        .btn-lg {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Color classes */
        .bg-blue-50 { background: #EFF6FF; }
        .text-blue-600 { color: #2563EB; }
        .bg-purple-50 { background: #F5F3FF; }
        .text-purple-600 { color: #7C3AED; }
        .bg-green-50 { background: #F0FDF4; }
        .text-green-600 { color: #16A34A; }
        .bg-gold-50 { background: #FEFCE8; }
        .text-gold-600 { color: #D4AF37; }
      `}</style>
    </>
  );
};

export default Contact;