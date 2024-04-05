// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    
    <footer className="footer footer-center p-10 bg-base-600 text-base-content rounded">
        <div className="flex flex-col w-full border-opacity-50">
  <div className="divider"><img src="/logo.png" alt="Travilabs.com Logo" className="btn btn-ghost" /></div>
</div>
      <nav className="grid grid-flow-col gap-4">
        <a href="/about" className="link link-hover">About</a>
        <a href="/contact" className="link link-hover">Contact</a>
        <a href="/portfolio" className="link link-hover">Portfolio</a>
        <a href="/offer" className="link link-hover">Offer</a>
        {/* <a href="/learn" className="link link-hover">Learn</a> */}
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              {/* Twitter Icon Path */}
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              {/* YouTube Icon Path */}
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              {/* Facebook Icon Path */}
            </svg>
          </a>
        </div>
      </nav> 
      <aside>
        <p>Travilabs © 2024 - Digital Vision to Life</p>
      </aside>
    </footer>
  );
};

export default Footer;
