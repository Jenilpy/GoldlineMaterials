import React from 'react'
import './Hero.css'
import hotfixImg from './assets/hotfix.jpg'
import tapeRollImg from './assets/tape roll.jpg'
import msImg from './assets/MS.webp'
import dmcImg from './assets/dmc.jpg'

const Header = ({ onLogoClick }) => (
  <header>
    <div className="container header-container">
      <div className="logo logo--clickable" onClick={onLogoClick}>
        Goldline Materials<span>.</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

const HeroSection = () => (
  <section id="hero" className="hero">
    <div className="container">
      <h1>GOLDLINE MATERIALS</h1>
      <p>Specialized Supplies for Garment &amp; Embroidery Industry</p>
    </div>
  </section>
)

const AboutSection = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="section-title">
        <h2>About Goldline Materials</h2>
      </div>
      <div className="about-content">
        <p>
          Goldline Materials is a wholesale trading business focused on supplies for the garment and
          embroidery industry. The firm deals in hot fix rhinestones, tape rolls, diamond sheets,
          DMC materials and MS items used in professional production and finishing.
        </p>
        <p>
          The website is a static, informational profile only. It is designed to reflect the
          official visiting card and WhatsApp Business identity for verification and reference
          purposes, without any pricing or online ordering.
        </p>
      </div>
    </div>
  </section>
)

const productCategories = [
  {
    id: 'hotfix-rhinestones',
    image: hotfixImg,
    alt: 'Hot Fix Rhinestones',
    title: 'Hot Fix Rhinestones',
    description:
      'Flat-back hot fix rhinestones and crystals used for garment, sari, and fashion embellishment.',
    specsTitle: 'Material & Usage:',
    specs: [
      'Glass and acrylic stones with heat-activated adhesive',
      'Applied using heat press or iron for permanent bonding',
      'Suitable for blouses, dresses, kidswear and designer work',
      'Available in assorted sizes, colours and packing options',
    ],
  },
  {
    id: 'tape-rolls',
    image: tapeRollImg,
    alt: 'Tape Rolls',
    title: 'Tape Rolls',
    description:
      'Adhesive and support tapes used in embroidery, garment fabrication and position marking.',
    specsTitle: 'Material & Usage:',
    specs: [
      'High tack tapes for temporary fixing and layering',
      'Options suitable for hooping, border work and panel alignment',
      'Compatible with common industrial embroidery machines',
      'Supplied in practical roll widths for workshop use',
    ],
  },
  {
    id: 'diamond-sheets-ms-items',
    image: msImg,
    alt: 'Diamond Sheets and MS Items',
    title: 'Diamond Sheets & MS Items',
    description:
      'Diamond sheets and MS based articles used in decorative garment work and support fixtures.',
    specsTitle: 'Material & Usage:',
    specs: [
      'Patterned sheets and MS components for value addition',
      'Used in borders, panels and accessory manufacturing',
      'Suitable for bulk production requirements',
      'Supplied as per standard trade packing',
    ],
  },
  {
    id: 'dmc-materials',
    image: dmcImg,
    alt: 'DMC Materials and Accessories',
    title: 'DMC Materials & Related Items',
    description:
      'DMC related materials used for embroidery, sampling and fine detailing work.',
    specsTitle: 'Material & Usage:',
    specs: [
      'Items suitable for machine and hand embroidery work',
      'Used by job workers, boutiques and small units',
      'Supports matching work with hot fix, diamond and MS items',
      'Intended for information and identification of product range',
    ],
  },
]

const ProductCard = ({ image, alt, title, description, specsTitle, specs }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} alt={alt} />
    </div>
    <div className="product-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="product-specs">
        <strong>{specsTitle}</strong>
        <ul>
          {specs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const ProductsSection = () => (
  <section id="products" className="products">
    <div className="container">
      <div className="section-title">
        <h2>Product Categories</h2>
      </div>
      <div className="products-grid">
        {productCategories.map((category) => (
          <ProductCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  </section>
)

const ContactSection = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-title">
        <h2>Business Information</h2>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Business Address</h3>
          <ul className="contact-details">
            <li>Goldline Materials</li>
            <li>Shop No. 5, Keshav Park Soc.</li>
            <li>Boot Bhawani, Sitanagar-BRTS Road</li>
            <li>Surat, Gujarat 395006</li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contact Details</h3>
          <ul className="contact-details">
            <li>Phone: +91 9054456000</li>
            <li>Email: kohinoord109@gmail.com</li>
            {/* <li>Business Registration: GUJ123456789</li> */}
          </ul>
        </div>

        <div className="contact-info">
          <h3>Business Hours</h3>
          <ul className="business-hours">
            <li>
              Monday to Saturday: <br />
              9:00 AM-9:00 PM
            </li>
            <li>Sunday: Closed</li>
            <li>Public Holidays: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="logo footer-logo">
          Goldline Materials<span>.</span>
        </div>
        <div className="copyright">
          <p>&copy; 2026 Goldline Materials. All Rights Reserved.</p>
          <p>
            This website serves as the official digital identity of Goldline Materials for business
            verification purposes only.
          </p>
          <p>No commercial transactions are conducted through this website.</p>
        </div>
      </div>
    </div>
  </footer>
)

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <Header onLogoClick={scrollToTop} />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Hero
