import React from 'react'
import './Nav_bar.css'
import { useRef } from 'react';
import gsap from 'gsap';

const Nav_bar = () => {
    const navBottomRef = useRef(null);

  const handleHover = () => {
  gsap.to(navBottomRef.current, {
    height: "12vw",
    stagger: 0.1,
    duration: 0.2,
    ease: "expo.out", 
  });
};

const handleLeave = () => {
  gsap.to(navBottomRef.current, {
    height: "0vw",
    duration: 0.3,
    ease: "expo.inOut", 
  });
};

  return (
    <div id='nav'>
      <h1>LAZARAV.</h1>
       <div className="navpart2" 
       onMouseEnter={handleHover}
        onMouseLeave={handleLeave}>
            <div className="nav-elem">
                <h4>Case Studies</h4>
                <h5><span>Case Studies</span></h5>
            </div>
            <div className="nav-elem">
                <h4>Areas of experties</h4>
                <h5><span>AI & ML</span></h5>
                <h5><span>Fintech</span></h5>
                <h5><span>Real Estate</span></h5>
                <h5><span>E-commerce</span></h5>
                <h5><span>Web 3</span></h5>
            </div>
            <div className="nav-elem">
                <h4>UIUX Design</h4>
                <h5><span>Fintech</span></h5>
                <h5><span>Real Estate</span></h5>
                <h5><span>E-commerce</span></h5>
                <h5><span>Web 3</span></h5>
            </div>
            <div className="nav-elem">
                <h4>PRoduct design</h4>
                <h5><span>Fintech</span></h5>
                <h5><span>Real Estate</span></h5>
                <h5><span>E-commerce</span></h5>
                <h5><span>Web 3</span></h5>
            </div>
            <div className="nav-elem">
                <h4>Design Process</h4>

                <h5><span>E-commerce</span></h5>
                <h5><span>Web 3</span></h5>
            </div>
            <div className="nav-elem">
                <h4>About Agency</h4>
                <h5><span>Fintech</span></h5>
                <h5><span>Real Estate</span></h5>
                <h5></h5>
                <h5><span>Web 3</span></h5>
            </div>
        </div>

      <button>Let's Talk <svg fill="none" viewBox="0 0 20 20">
                <path fill="#fff"
                    d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z">
                </path>
            </svg></button>
      <div ref={navBottomRef } id="nav_bottom">
      
        
      </div>
    </div>
  )
}

export default Nav_bar
