// app/components/Navbar.tsx
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import searchResultsData from '../../../data/searchResults.json'; // Adjust the import path to where your searchResults.json is located.

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Filter search results based on searchTerm
    if (searchTerm) {
      const filteredResults = searchResultsData.filter(result =>
        result.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {/* <li><Link href="/learn">Learn</Link></li> */}
            <li>
              <a>About</a>
              <ul className="p-2">
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/offer">Offer</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <img src="/logo.png" alt="Travilabs.com Logo" className="btn btn-ghost" />
          Travilabs.com
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-[1]">
          {/* <li><Link href="/learn">Learn</Link></li> */}
          <li>
            <details>
              <summary>About</summary>
              <ul className="p-2">
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/offer">Offer</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="relative">
          <label className="input input-bordered flex items-center gap-2">
            <input 
              type="text"
              className="grow"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </label>
          <div className="absolute w-full bg-[#222] z-[1001]">
            {searchResults.map((result) => (
              <div key={result.title} className="p-2">
                <Link href={result.path}>{result.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="navbar-end">
  <Link href="https://t.me/dszafranski" className="btn flex items-center gap-2">
    <img src="/telegram.png" alt="Telegram Logo" className="w-8 h-8" /> {/* Adjust the width and height as needed */}
    Rapid Contact
  </Link>
</div>

    </div>
  );
};

export default Navbar;
