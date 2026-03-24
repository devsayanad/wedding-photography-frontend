import React from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.brand}>
              <Camera className={styles.brandIcon} />
              <div>
                <h3 className={styles.brandName}>Eternal Moments</h3>
                <p className={styles.brandTagline}>Wedding Photography</p>
              </div>
            </div>
            <p className={styles.brandDescription}>
              Capturing authentic, romantic moments that tell your unique love
              story. Specializing in elegant wedding photography that stands the
              test of time.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={styles.footerLink}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#essential" className={styles.footerLink}>
                  Essential Package
                </a>
              </li>
              <li>
                <a href="#premium" className={styles.footerLink}>
                  Premium Package
                </a>
              </li>
              <li>
                <a href="#luxury" className={styles.footerLink}>
                  Luxury Package
                </a>
              </li>
              <li>
                <a href="#engagement" className={styles.footerLink}>
                  Engagement Photos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={18} />
                <span>(+977) 123-4567</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} />
                <span>info@eternalmoments.com</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={18} />
                <span>Simpani,Pokhara-1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className={styles.bottomBar}>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://pinterest.com"
              className={styles.socialLink}
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
          </div>

          <div className={styles.copyright}>
            <p>
              &copy; {currentYear} Eternal Moments Photography. All rights
              reserved.
            </p>
            <p className={styles.legalLinks}>
              <Link to="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.separator}>•</span>
              <Link to="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
