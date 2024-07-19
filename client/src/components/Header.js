import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="IMDB Clone Logo" />
      <input type="text" placeholder="Search IMDB" />
    </div>
  );
};

export default Header;
