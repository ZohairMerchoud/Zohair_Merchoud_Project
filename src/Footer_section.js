
import React from 'react';

const footerStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '20vh', 
  overflow: 'hidden',
  zIndex: 0,
};


const mountainShapeStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '150%', 
  backgroundColor: '#0070e0',
  clipPath: 'polygon(0% 100%, 15% 40%, 30% 90%, 45% 30%, 60% 80%, 75% 10%, 90% 100%, 100% 100%)',
  // Ce clip-path simule les pics de montagne vus sur l'image
};


const starStyle = {
  position: 'absolute',
  bottom: '5vh',
  left: '45vw', 
  fontSize: '2rem',
  color: '#333', 
  transform: 'rotate(45deg)', 
  zIndex: 1,
};

const FooterGraphics = () => (
  <div style={footerStyle}>
    <div style={mountainShapeStyle}></div>
    <div style={starStyle}>*</div> 
  </div>
);

export default FooterGraphics;
