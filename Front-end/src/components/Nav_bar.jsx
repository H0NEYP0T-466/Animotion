import React from 'react'
import './Nav_bar.css'

const Nav_bar = () => {
  return (
    <div id='nav'>
      <h1>LAZARAV.</h1>
      <div className="navpart2">
        <h4>CASE STUDIES</h4>
        <h4>AREA OF EXPERTISE</h4>
        <h4>UI UX DESIGN</h4>
        <h4>PRODUCT DESIGN</h4>
        <h4>DESIGN PROCESS</h4>
        <h4>ABOUT AGENCY</h4>
      </div>
      <button>Let's Talk <svg fill="none" viewBox="0 0 20 20">
                <path fill="#fff"
                    d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z">
                </path>
            </svg></button>
      <div id="nav_bottom">
        <div className="bottom-div">
            <h5><span>Case_Studies</span></h5>
        </div>
         <div className="bottom-div">
            <h5><span>AI & ML</span></h5>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>E_Commerce</span></h5>
            <h5><span>Web3</span></h5>
        </div>
        <div className="bottom-div">
            <h5><span>AI & ML</span></h5>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>E_Commerce</span></h5>
        </div>
        <div className="bottom-div">
            <h5><span>AI & ML</span></h5>
            <h5><span>Fintech</span></h5>
        </div>
          <div className="bottom-div">
            <h5><span>AI & ML</span></h5>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>E_Commerce</span></h5>
        </div>
             <div className="bottom-div">
            <h5><span>AI & ML</span></h5>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>E_Commerce</span></h5>
        </div>
        
        
      </div>
    </div>
  )
}

export default Nav_bar
