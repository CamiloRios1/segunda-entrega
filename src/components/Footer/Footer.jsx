import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="social-icons">
              <a href="https://www.facebook.com/tiendadegatos" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/tiendadegatos" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/tiendadegatos/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              Todos los derechos reservados &copy; 2024 | Tienda de Gatos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
