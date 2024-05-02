// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Your header content goes here */}
      <h1>Website Logo</h1>
      <nav className='nave'>
        <ul className='unOrder '>
          <li><a href="https://www.wix.com/:">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
