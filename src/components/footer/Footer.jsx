import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
      </div>
      <div className="footer-copyright">
        © 2025 NovaFront Developer.
      </div>
    </div>
  );
}

export default Footer;
