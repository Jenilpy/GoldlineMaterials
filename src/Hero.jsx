import React from 'react'
import './Hero.css'
import hotfixImg from './assets/hotfix.jpg'
import tapeRollImg from './assets/tape roll.jpg'
import msImg from './assets/MS.webp'
import dmcImg from './assets/dmc.jpg'

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <header>
        <div className="container header-container">
            <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              KOHINOOR Sales<span>.</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="hero" className="hero">
        <div className="container">
            <h1>KOHINOOR SALES</h1>
            <p>Specialized Supplies for Garment & Embroidery Industry</p>
        </div>
    </section>

    <section id="about" className="about">
        <div className="container">
            <div className="section-title">
                <h2>About KOHINOOR</h2>
            </div>
            <div className="about-content">
                <p>KOHINOOR is a wholesale trading business focused on supplies for the garment and embroidery industry. The firm deals in hot fix rhinestones, tape rolls, diamond sheets, DMC materials and MS items used in professional production and finishing.</p>
                <p>The website is a static, informational profile only. It is designed to reflect the official visiting card and WhatsApp Business identity for verification and reference purposes, without any pricing or online ordering.</p>
            </div>
        </div>
    </section>

    <section id="products" className="products">
        <div className="container">
            <div className="section-title">
                <h2>Product Categories</h2>
            </div>
            <div className="products-grid">
                <div className="product-card">
                    <div className="product-image">
                        <img src={hotfixImg} alt="Hot Fix Rhinestones" />
                    </div>
                    <div className="product-card-content">
                        <h3>Hot Fix Rhinestones</h3>
                        <p>Flat-back hot fix rhinestones and crystals used for garment, sari, and fashion embellishment.</p>
                        <div className="product-specs">
                            <strong>Material & Usage:</strong>
                            <ul>
                                <li>Glass and acrylic stones with heat-activated adhesive</li>
                                <li>Applied using heat press or iron for permanent bonding</li>
                                <li>Suitable for blouses, dresses, kidswear and designer work</li>
                                <li>Available in assorted sizes, colours and packing options</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="product-card">
                    <div className="product-image">
                        <img src={tapeRollImg} alt="Tape Rolls" />
                    </div>
                    <div className="product-card-content">
                        <h3>Tape Rolls</h3>
                        <p>Adhesive and support tapes used in embroidery, garment fabrication and position marking.</p>
                        <div className="product-specs">
                            <strong>Material & Usage:</strong>
                            <ul>
                                <li>High tack tapes for temporary fixing and layering</li>
                                <li>Options suitable for hooping, border work and panel alignment</li>
                                <li>Compatible with common industrial embroidery machines</li>
                                <li>Supplied in practical roll widths for workshop use</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="product-card">
                    <div className="product-image">
                        <img src={msImg} alt="Diamond Sheets and MS Items" />
                    </div>
                    <div className="product-card-content">
                        <h3>Diamond Sheets &amp; MS Items</h3>
                        <p>Diamond sheets and MS based articles used in decorative garment work and support fixtures.</p>
                        <div className="product-specs">
                            <strong>Material & Usage:</strong>
                            <ul>
                                <li>Patterned sheets and MS components for value addition</li>
                                <li>Used in borders, panels and accessory manufacturing</li>
                                <li>Suitable for bulk production requirements</li>
                                <li>Supplied as per standard trade packing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="product-card">
                    <div className="product-image">
                        <img src={dmcImg} alt="DMC Materials and Accessories" />
                    </div>
                    <div className="product-card-content">
                        <h3>DMC Materials &amp; Related Items</h3>
                        <p>DMC related materials used for embroidery, sampling and fine detailing work.</p>
                        <div className="product-specs">
                            <strong>Material & Usage:</strong>
                            <ul>
                                <li>Items suitable for machine and hand embroidery work</li>
                                <li>Used by job workers, boutiques and small units</li>
                                <li>Supports matching work with hot fix, diamond and MS items</li>
                                <li>Intended for information and identification of product range</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <h2>Business Information</h2>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Business Address</h3>
                    <ul className="contact-details">
                        <li>KOHINOOR SALES</li>
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
                        <li>Monday to Saturday: <br />9:00 AM-9:00 PM</li>
                        <li>Sunday: Closed</li>
                        <li>Public Holidays: Closed</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footer-content">
                <div
                  className="logo"
                  style={{ fontSize: '1.8rem', marginBottom: '1rem' }}
                >
                  KOHINOOR Sales<span>.</span>
                </div>
                <div className="copyright">
                    <p>&copy; 2026 KOHINOOR Sales. All Rights Reserved.</p>
                    <p>This website serves as the official digital identity of KOHINOOR Sales for business verification purposes only.</p>
                    <p>No commercial transactions are conducted through this website.</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Hero
