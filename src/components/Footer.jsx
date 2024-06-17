import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </Container>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#4A90E2',
  color: '#333',
  padding: '20px 0',
  marginTop: '50px',
  textAlign: 'center',
};

export default Footer;