import './Header.css';
import cvjhonathan from '../../assets/cvjhonathan.pdf';
import logo from "../../assets/logo.png";
import ds from "../../assets/ds.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaBriefcase } from 'react-icons/fa';

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Dev. Front End e entusiasta da tecnologia.</h1>
        <p>
          Sou o Jhonathan, desenvolvedor front end e empreendedor que mora em São Paulo.
          Sou fundador da <span className="highlight">NovaFront</span>, onde desenvolvemos soluções digitais
          para micro empresas que desejam destacar sua marca no mundo digital, com interfaces elegantes e responsivas.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jhonathan-de-lima-42332b1b7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jhonathancodes" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://wa.me/5511962619817" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:jhonathan.novais3450@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Linha de imagens fora do container */}
      <div className="image-row">
        <img src={img1} alt="Imagem 1" />
        <img src={img2} alt="Imagem 2" />
        <img src={img3} alt="Imagem 3" />
        <img src={img4} alt="Imagem 4" />

      </div>

      <div className="work-card">
        <div className="work-header">
          <FaBriefcase className="work-icon" />
          <h2>Trabalho</h2>
        </div>

        <div className="work-content">
          <div className="work-left">
            <img src={ds} alt="Logo da empresa" className="company-logo" />
            <div>
              <span className="company-name">Ds Consultoria Ltda</span>
              <p className="job-title">Estagiário Front-End</p>
            </div>
          </div>
          <span className="work-duration">Fev 2025 - Atual</span>
        </div>

        <a href={cvjhonathan} download='cvjhonathan' className="download-btn">
          Currículo ↓
        </a>
      </div>


    </>
  );
}

export default Header;
