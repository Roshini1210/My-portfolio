import React from 'react';

function Navbar() {
  return (
    <nav style={{
      padding: '1.5rem 2rem',
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #334155',
      backgroundColor: '#0f172a',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <h2 style={{ color: '#38bdf8', fontSize: '1.5rem' }}>Rose.dev</h2>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#skills" style={linkStyle}>Skills</a></li>
        <li><a href="#projects" style={linkStyle}>Projects</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500'
};

export default Navbar;