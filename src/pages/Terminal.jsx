import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Terminal.css';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [currentTyping, setCurrentTyping] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const scrollRef = useRef(null);

  const scriptData = [
    { type: 'input', text: 'whoami' },
    { 
      type: 'output', 
      content: (
        <div>
          <strong>Yaqeen Khazaleh</strong><br/>
          DevOps Engineer <br/>
          <span className="comment"># "Fueled by making the world a better place, every achievement at a time."</span>
        </div>
      ) 
    },
    { type: 'input', text: 'cat stack.json' },
    { 
      type: 'output', 
      content: (
        <div className="code-block">
          {'{'} <br/>
          &nbsp;&nbsp;"Frontend": [<span className="path">"React"</span>, <span className="path">"vite"</span>, <span className="path">"CSS"</span>, <span className="path">"HTML"</span>, <span className="path">"Figma"</span>],<br/>
          &nbsp;&nbsp;"Backend": [<span className="path">"Java-SpringBoot"</span>, <span className="path">"Node.js - Express.js"</span>],<br/>
          &nbsp;&nbsp;"DevOps": [<span className="path">"AWS ECS,S3, CloudFront, EC2..."</span>, <span className="path">"Github CI/CD"</span>, <span className="path">"Cloudflare"</span>, <span className="path">"Bash Scripting"</span>, <span className="path">"Docker"</span>]<br/>
          {'}'}
        </div>
      ) 
    },
    { type: 'input', text: 'ls ./projects -al' },
    { 
      type: 'output', 
      content: (
        <div className="ascii-grid">
          <div className="ascii-card">
            <div className="ascii-title">./UML_FACTORY</div>
            <p>UML Modeling Web App - ReactJS - Java SpringBoot</p>
            <br/>
            <a href="https://github.com/yaqeen-i/UMLFactory" className="link">[SOURCE_CODE]</a>
          </div>
          <div className="ascii-grid">
              <div className="ascii-card">
                <div className="ascii-title">./TRAINEES_ADMINSTRATION_SITE</div>
                <p>Admin Dashboard for Training Program - ReactJS - Node.js</p>
                <br />
                <a href="https://github.com/yaqeen-i/Trainees-Adminstration-System" className="link">[SOURCE_CODE]</a>
              </div>
          </div>
          <div className="ascii-card">
            <div className="ascii-title">./PORTFOLIO</div>
            <p>This terminal interface along with others.</p>
            <br/>
            <a href="https://github.com/yaqeen-i/Portfolio" className="link">[SOURCE_CODE]</a>
          </div>
        </div>
      ) 
    },
    { type: 'input', text: './contact.sh' },
    { 
      type: 'output', 
      content: (
        <div>
          initiating handshake...<br/>
          email: <a href="mailto:yaqeen.hamza98@gmail.com" className="link">yaqeen.hamza98@gmail.com</a><br/>
          github: <a href="https://github.com/yaqeen-i" className="link">github.com/yaqeen-i</a><br/>
          status: <span style={{color: 'var(--accent-color)'}}>ONLINE</span>
        </div>
      ) 
    },
    // Added this command so you can switch to the other page
    { type: 'input', text: './launch_gui.sh' },
    { 
      type: 'output', 
      content: (
        <div>
          <span style={{color: '#00ff41'}}>GUI Interface Detected.</span><br/>
          Loading graphical user interface...<br/><br/>
          <Link to="/" className="link">[CLICK TO GO BACK]</Link>
        </div>
      ) 
    },
  ];

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
  hasRun.current = true;

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const runScript = async () => {
      await delay(800);

      for (const line of scriptData) {
        if (line.type === 'input') {
          let tempString = '';
          for (const char of line.text) {
            tempString += char;
            setCurrentTyping(tempString);
            await delay(Math.random() * 50 + 30); 
          }
          await delay(300);
          setHistory((prev) => [...prev, { ...line }]);
          setCurrentTyping('');
        } else {
          setHistory((prev) => [...prev, { ...line }]);
          await delay(300);
        }
      }
      setIsTyping(false);
    };

    runScript();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, currentTyping]);

  return (
    <div className="terminal-body">
      <div className="cyber-grid"></div>
      <div className="ambient-glow"></div>
      <div className="scanlines"></div>

      <div className="terminal-window">
        <div className="title-bar">
          <div className="buttons">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>
          <div className="title">guest@server: ~</div>
        </div>

        <div className="terminal-content" ref={scrollRef}>
          {history.map((line, index) => (
            <div key={index}>
              {line.type === 'input' ? (
                <div className="prompt-line">
                  <span className="prompt">guest@server:~$</span>
                  <span className="command">{line.text}</span>
                </div>
              ) : (
                <div className="output">
                  {line.content}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="prompt-line">
              <span className="prompt">guest@server:~$</span>
              <span className="command">{currentTyping}</span>
              <span className="cursor"></span>
            </div>
          )}

          {!isTyping && (
             <div className="prompt-line">
              <span className="prompt">guest@server:~$</span>
              <span className="cursor"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;