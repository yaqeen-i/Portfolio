import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SpotlightPortfolio.css';

const SpotlightPortfolio = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    // get cards inside the container
    const cards = containerRef.current.getElementsByClassName('sp-card');

    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <div className="sp-container" onMouseMove={handleMouseMove}>
      
      <div className="sp-ambient-light"></div>

      <main className="sp-main" ref={containerRef}>
        
        <header className="sp-header">
          <div className="sp-badge">DevOps Engineer</div>
          <h1 className="sp-title">
            Yaqeen Khazaleh
          </h1>
          <p className="sp-subtitle">
            A software engineer with expertise in Backend development using Node.js and Java SpringBoot,
            and Frontend development using ReactJS. Skilled in AWS, Github Actions.
            Passionate about making the world a better place through code.
          </p>
          
          <div className="sp-tech-pills">
            <div className="sp-pill">AWS</div>
            <div className="sp-pill">Github Actions</div>
            <div className="sp-pill">Docker</div>
            <div className="sp-pill">REST API Development (Node.js - Java )</div>
            <div className="sp-pill">JavaScript (ES6+)</div>
            <div className="sp-pill">Vite</div>
            <div className="sp-pill">CloudFlare</div>
          </div>
        </header>

        {/* projects section */}
        <div className="sp-section-header">
          <h2>Selected Projects</h2>
        </div>

        <div className="sp-grid">
          <div className="sp-card">
            <div className="sp-card-content">
              <div className="sp-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M2 12l5-5"></path><path d="M2 12l5 5"></path></svg>
              </div>
              <h3>UML Modeling Tool</h3>
              <p>A collaborative web-based modeling tool featuring user-friendly workspaces and real-time chat. Built with ReactJS (Vite) and SpringBoot.</p>
              <div className="sp-card-footer">
                <a href="https://github.com/yaqeen-i/UMLFactory" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sp-btn-link"
                >
                  View Details 
                </a>
              </div>
            </div>
          </div>

          <div className="sp-card">
            <div className="sp-card-content">
              <div className="sp-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3>Professional Portfolio</h3>
              <p>A multi-style portfolio platform demonstrating versatile UI/UX capabilities using ReactJS and modern design principles.</p>
              <div className="sp-card-footer">
                <a href="https://github.com/yaqeen-i/Portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sp-btn-link"
                >
                  View Details 
                </a>
              </div>
            </div>
          </div>

           <div className="sp-card">
            <div className="sp-card-content">
              <div className="sp-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              </div>
              <h3>Trainees Admin Dashboard</h3>
              <p>Designed client and admin interfaces for Admin operations. Focused on smooth UI, performance optimization, and cross-browser compatibility.</p>
              <div className="sp-card-footer">

                <a href="https://github.com/yaqeen-i/Trainees-Adminstration-System" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sp-btn-link"
                >
                  View Details 
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* experience section */}
        <div className="sp-section-header">
          <h2>Experience</h2>
        </div>
        <div className="sp-grid">
          <div className="sp-card" style={{gridColumn: 'span 3'}}>
            <div className="sp-card-content" style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <div>
                <h3 style={{margin: 0}}>DevOps Engineer @ Quiqflow</h3>
                <p style={{margin: '0.5rem 0 0 0', color: 'var(--sp-text-secondary)'}}>Oct 2025 - Present (Remote)</p>
                <p style={{fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8}}>
                  Optimized CI/CD pipelines by Github Actions, reducing deployment times by 12-15%. <br />
                  Implemented AWS Infrastructure and troubleshooted issues with an uptime of 99%.<br /> 
                  Implemented proper routing and origin rules for cloudflare.
                  Reduced Dockerfiles sizes from 1.7-2GB to 300-400MB by optimizing layers and using multi-stage builds.
                </p>
              </div>
            </div>
          </div>

          <div className="sp-card" style={{gridColumn: 'span 3'}}>
            <div className="sp-card-content" style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <div>
                <h3 style={{margin: 0}}>Backend Developer @ OpsHeaven</h3>
                <p style={{margin: '0.5rem 0 0 0', color: 'var(--sp-text-secondary)'}}>Aug 2025 - Oct 2025</p>
                 <p style={{fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8}}>
                  Delivered high-quality API, led MVC architecture implementation, and handled unit/integration testing and Frontend development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="sp-contact-area">
          <h2>Let's build something great.</h2>
          <p style={{color: 'var(--sp-text-secondary)', margin: '1rem 0 2rem 0'}}>
            I'm currently available for new opportunities.
          </p>
          <a href="mailto:yaqeen.hamza98@gmail.com" className="sp-pill" style={{background: '#fff', color: '#000', border: 'none', fontWeight: 600, padding: '12px 30px', textDecoration: 'none'}}>
            Email Me
          </a>
          <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#888'}}>
            <p>Phone: +962 77 686 6493</p>
          </div>
        </div>

        <div style={{textAlign:'center', marginTop: '2rem'}}>
             <Link to="/" style={{color: '#555', textDecoration: 'none', fontSize: '0.8rem'}}>
                Return to Main Menu
             </Link>
        </div>

      </main>
    </div>
  );
};

export default SpotlightPortfolio;