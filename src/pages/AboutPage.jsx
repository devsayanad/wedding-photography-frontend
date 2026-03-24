import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Heart, Award, Users, Globe, Star, 
  Shield, Zap, Palette, Clock, Target, Sparkles 
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Lead Photographer & Founder',
      experience: '12+ Years',
      specialty: 'Artistic Storytelling',
      bio: 'With a background in fine arts, Alex brings an artistic eye to every wedding.',
      image: '/team/alex.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      experience: '8+ Years',
      specialty: 'Editorial Style',
      bio: 'Former magazine editor who creates elegant, timeless wedding stories.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Marcus Johnson',
      role: 'Second Photographer',
      experience: '6+ Years',
      specialty: 'Candid Moments',
      bio: 'Expert at capturing genuine emotions and spontaneous moments.',
      image: '/team/marcus.jpg'
    }
  ];

  const values = [
    {
      icon: <Heart size={24} />,
      title: 'Heart-Centered',
      description: 'We approach each wedding with genuine care and emotional connection.'
    },
    {
      icon: <Target size={24} />,
      title: 'Attention to Detail',
      description: 'Every frame is carefully composed and thoughtfully edited.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Professional Integrity',
      description: 'We deliver on our promises with honesty and transparency.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Artistic Excellence',
      description: 'Pushing creative boundaries while maintaining timeless elegance.'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Founded Eternal Moments' },
    { year: '2013', event: 'First Destination Wedding' },
    { year: '2015', event: 'Featured in Wedding Magazine' },
    { year: '2018', event: '500th Wedding Captured' },
    { year: '2022', event: 'International Award Winner' },
    { year: '2023', event: 'Luxury Brand Partnership' }
  ];

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="badge">Our Story</span>
            <h1>More Than Photographers</h1>
            <p className="hero-subtitle">
              We are storytellers, memory-makers, and trusted partners 
              in your journey to "I do."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mission-badge">
                <Camera size={24} />
                Our Mission
              </div>
              <h2 className="mission-title">
                Capturing Love, <span className="text-gradient">Creating Legacy</span>
              </h2>
              <p className="mission-text">
                At Eternal Moments, we believe wedding photography is more than just 
                taking pictures—it's about preserving the essence of your love story 
                in a way that feels authentic, elegant, and timeless.
              </p>
              <p className="mission-text">
                Our approach combines artistic vision with genuine connection, ensuring 
                every image reflects the unique beauty of your relationship.
              </p>
              <div className="stats-grid">
                {[
                  { icon: <Award size={20} />, value: '25+', label: 'Awards' },
                  { icon: <Globe size={20} />, value: '15+', label: 'Countries' },
                  { icon: <Users size={20} />, value: '500+', label: 'Couples' },
                  { icon: <Star size={20} />, value: '5.0', label: 'Rating' }
                ].map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mission-image"
            >
              {/* Image placeholder - replace with actual image */}
              <div className="image-placeholder">
                <Camera size={48} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ color: 'white' }}>Our Core Values</h2>
            <p className="subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Meet Our Team</h2>
            <p className="subtitle">
              Passionate artists dedicated to telling your love story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="team-card"
              >
                <div className="team-image">
                  <div className="image-placeholder">
                    <Users size={32} />
                  </div>
                  <div className="team-experience">
                    <Clock size={14} />
                    {member.experience}
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-specialty">
                    <Zap size={14} />
                    {member.specialty}
                  </div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Our Journey</h2>
            <p className="subtitle">Milestones along our path</p>
          </div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <div className="timeline-dot"></div>
                  <div className="timeline-event">{milestone.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className="philosophy-card">
            <div className="philosophy-icon">
              <Palette size={32} />
            </div>
            <h2 className="philosophy-title">Our Artistic Philosophy</h2>
            <div className="philosophy-content">
              <p>
                We blend three distinct approaches to create images that are both 
                beautiful and authentic:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    title: 'Fine Art',
                    description: 'Carefully composed images with attention to light, color, and composition.',
                    color: 'bg-blue-50 text-blue-600'
                  },
                  {
                    title: 'Photojournalism',
                    description: 'Candid moments captured naturally as the day unfolds.',
                    color: 'bg-purple-50 text-purple-600'
                  },
                  {
                    title: 'Editorial',
                    description: 'Styled portraits that could grace the pages of a luxury magazine.',
                    color: 'bg-gold-50 text-gold-600'
                  }
                ].map((approach, index) => (
                  <div key={index} className={`approach-card ${approach.color}`}>
                    <h3 className="approach-title">{approach.title}</h3>
                    <p className="approach-description">{approach.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Create Together?</h2>
          <p className="cta-text">
            Let's discuss how we can tell your unique love story through our lens.
          </p>
          <button className="btn btn-primary btn-lg">
            Schedule Consultation
            <Heart size={20} />
          </button>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          background: linear-gradient(135deg, 
            rgba(26, 54, 93, 0.95) 0%, 
            rgba(45, 74, 140, 0.85) 100%),
            url('/about-hero.jpg') center/cover no-repeat;
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 1.5rem auto 0;
          line-height: 1.6;
        }

        .mission-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gold-50);
          color: var(--gold);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .mission-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .mission-text {
          color: var(--gray);
          margin-bottom: 1rem;
          line-height: 1.7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-icon {
          color: var(--gold);
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
        }

        .stat-label {
          color: var(--gray);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 0.25rem;
        }

        .mission-image {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .image-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: inherit;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          padding: 2rem;
          text-align: center;
          transition: var(--transition);
        }

        .value-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .value-icon {
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .value-title {
          color: white;
          margin-bottom: 0.75rem;
          font-size: 1.125rem;
        }

        .value-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .team-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .team-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .team-experience {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--gold);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .team-content {
          padding: 1.5rem;
        }

        .team-name {
          margin-bottom: 0.25rem;
        }

        .team-role {
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .team-specialty {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .team-bio {
          color: var(--gray);
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gold);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 45%;
        }

        .timeline-item.left {
          left: 0;
        }

        .timeline-item.right {
          left: 55%;
        }

        .timeline-year {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 0.5rem;
        }

        .timeline-content {
          position: relative;
          background: white;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .timeline-dot {
          position: absolute;
          top: 50%;
          width: 12px;
          height: 12px;
          background: var(--gold);
          border-radius: 50%;
          transform: translateY(-50%);
        }

        .timeline-item.left .timeline-dot {
          right: -56px;
        }

        .timeline-item.right .timeline-dot {
          left: -56px;
        }

        .timeline-event {
          font-weight: 500;
          color: var(--navy);
        }

        .philosophy-card {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          color: white;
          border-radius: var(--radius-xl);
          padding: 4rem;
          text-align: center;
        }

        .philosophy-icon {
          color: var(--gold);
          margin-bottom: 1.5rem;
        }

        .philosophy-title {
          margin-bottom: 1.5rem;
          font-size: 2rem;
        }

        .philosophy-content p {
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .approach-card {
          border-radius: var(--radius-lg);
          padding: 2rem;
          text-align: center;
          transition: var(--transition);
        }

        .approach-card:hover {
          transform: translateY(-5px);
        }

        .approach-title {
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
        }

        .approach-description {
          font-size: 0.875rem;
          line-height: 1.5;
          opacity: 0.8;
        }

        .section-cta {
          background: linear-gradient(135deg, var(--cream) 0%, white 100%);
          padding: 4rem 0;
          text-align: center;
        }

        .cta-title {
          margin-bottom: 1rem;
        }

        .cta-text {
          max-width: 600px;
          margin: 0 auto 2rem;
          color: var(--gray);
        }

        /* Color classes */
        .bg-blue-50 { background: #EFF6FF; }
        .text-blue-600 { color: #2563EB; }
        .bg-purple-50 { background: #F5F3FF; }
        .text-purple-600 { color: #7C3AED; }
        .bg-gold-50 { background: #FEFCE8; }
        .text-gold-600 { color: #D4AF37; }
      `}</style>
    </>
  );
};

export default About;