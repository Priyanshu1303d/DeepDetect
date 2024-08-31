import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-5 text-center">
      <p>&copy; {new Date().getFullYear()} Deepfake Detection System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;