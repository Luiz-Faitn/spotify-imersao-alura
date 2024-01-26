import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="disclaimer-premium">
      <div className="text">
        <p className="disclaimer-premium-title">Teste o Premium de graça!</p>
        <p className="disclaimer-premium-subtitle">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div className="button">
        <button type="button">Inscreva-se Grátis</button>
      </div>
    </footer>
  );
};

export default Footer;
