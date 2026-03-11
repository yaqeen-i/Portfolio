import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import '../styles/InterstellarPortfolio.css'; 

const InterstellarPortfolio = () => {
  const mountRef = useRef(null);
  
  //  usage of useRef for mouse coordinates so the site can be responsive
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    //scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // clear canvas to avoid duplicates on re-render
    if (mountRef.current) {
        mountRef.current.innerHTML = '';
        mountRef.current.appendChild(renderer.domElement);
    }

    //geometry setup
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00f3ff, 
        wireframe: true,
        transparent: true,
        opacity: 0.5
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // particles setup
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15; 
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // mouse interaction handler
    const handleMouseMove = (event) => {
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
    };
    
    // catch mouse movement and update the ref values
    window.addEventListener('mousemove', handleMouseMove);

    // animation loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // default rotation
        sphere.rotation.y += 0.005;
        sphere.rotation.x += 0.002;
        particlesMesh.rotation.y = -elapsedTime * 0.05;
        
        // calc target based on Ref values
        const targetX = (mouse.current.x / window.innerWidth) * 2 - 1;
        const targetY = (mouse.current.y / window.innerHeight) * 2 - 1;

        // smooth rotation
        sphere.rotation.y += 0.05 * (targetX - sphere.rotation.y);
        sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);

        // breathing effect
        const scale = 1 + Math.sin(elapsedTime) * 0.05;
        sphere.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // cleanup function to remove event listeners and dispose of Three.js resources
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        
        if (mountRef.current && renderer.domElement) {
             if (mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
             }
        }
        geometry.dispose();
        material.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
    };
  }, []); 

  return (
    <div className="visual-mode-container">
        <div ref={mountRef} className="canvas-container"></div>

        <main className="ui-layer">
            <nav>
                <div className="logo">YAQEEN_DEV</div>
                <div>
                    <Link to="/" className="link">HOME</Link>
                    <span className="menu-link">
                        <a href="https://github.com/yaqeen-i"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="link"
                        >
                            About
                        </a>
                    </span>
                    <span className="menu-link">
                        <a href="mailto:yaqeen.hamza98@gmail.com" className="link">Contact</a>
                    </span>
                </div>
            </nav>

            <section className="hero">
                <h1 className="hero-title">DevOps <br /> Engineer</h1>
                <p className="subtitle">
                    Fueled by making the world a better place, every achievement at a time.
                    <br/>
                    Specializing in DevOps and Backend Development.
                </p>
                
                <a href="https://github.com/yaqeen-i"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="cta-btn"
                >
                    View GitHub Work
                </a>
            </section>

            <div className="project-scroll">
                <a 
                    href="https://github.com/yaqeen-i/UMLFactory" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-item active"
                >
                    01 // UML_FACTORY
                </a>

                <a 
                    href="https://github.com/yaqeen-i/Trainees-Adminstration-System" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-item"
                >
                    02 // TRAINEES_ADMINSTRATION_SITE
                </a>
                
                <a 
                    href="https://github.com/yaqeen-i/Portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-item"
                >
                    03 // THIS_PORTFOLIO
                </a>
            </div>
        </main>
    </div>
  );
};

export default InterstellarPortfolio;