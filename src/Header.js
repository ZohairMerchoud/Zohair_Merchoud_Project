
import React from 'react';

const headerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '35vh', // Estimation de la hauteur pour la zone supérieure
  overflow: 'hidden',
  zIndex: 0,
};


const largeShapeStyle = {
  position: 'absolute',
  top: '-15vh',
  left: '-20vw',
  width: '70vw',
  height: '70vh',
  backgroundColor: '#0070e0', // Bleu vif estimé
  borderRadius: '0 0 50% 50%',
  transform: 'rotate(-20deg)',
};


const waveShapeStyle = {
  position: 'absolute',
  top: '-5vh',
  right: '-10vw',
  width: '80vw',
  height: '40vh',
  backgroundColor: '#0070e0',
  borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%',
  opacity: 0.9,
  transform: 'rotate(10deg)',
};

const HeaderGraphics = () => (
  <div style={headerStyle}>
    {/* La forme courbe en haut à droite */}
    <div style={waveShapeStyle}></div>
    {/* La forme plus grande et décalée en haut à gauche */}
    <div style={largeShapeStyle}></div>
  </div>
);

export default HeaderGraphics;
