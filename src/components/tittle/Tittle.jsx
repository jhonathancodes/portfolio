import logo from "../../assets/logo.png";
import perfil from "../../assets/img1.jpg"; 
import { FaReact, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiMui } from "react-icons/si";
import './Tittle.css';

function Tittle() {
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="text-content">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <h1>Projetando Experiências</h1>
                    <p>
                        Desde pequeno, a tecnologia sempre despertou minha atenção — dos controles de videogame aos primeiros cliques no computador. Eu queria entender como tudo funcionava por trás das telas.<br /><br />
                        Com o tempo, essa curiosidade virou caminho. Comecei a estudar programação e me apaixonei pelo desenvolvimento front-end. Cada projeto foi um passo para aprender mais, evoluir e entregar resultados melhores.<br /><br />
                        Hoje sou fundador da <span className="highlight">NovaFront</span> e atuo como desenvolvedor front-end, unindo design e código para criar interfaces que realmente fazem sentido para quem usa. Mais do que saber usar ferramentas, busco sempre inovar e entregar o melhor em cada detalhe.
                        <br /><br />
                        A jornada continua, e a vontade de crescer também.
                    </p>

                    <h1 className="skills-title">Principais habilidades em Front-End</h1>
                    <div className="skills-icons">
                        <FaReact title="React.js" />
                        <SiNextdotjs title="Next.js" />
                        <SiJavascript title="JavaScript" />
                        <SiTypescript title="TypeScript" />
                        <SiHtml5 title="HTML5" />
                        <SiCss3 title="CSS3" />
                        <SiMui title="Material UI" />
                    </div>
                </div>

                <div className="photo-container">
                    <img src={perfil} alt="Foto de Jhonathan" />
                </div>
            </div>

            <div className="contact-info">
                <h1 className="titulo">Contato</h1>
                <div className="contact-row">
                    <a href="https://github.com/jhonathancodes" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> <span>Github</span>
                    </a>
                </div>
                <div className="contact-row">
                    <a href="https://www.linkedin.com/in/jhonathan-de-lima-42332b1b7/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> <span>LinkedIn</span>
                    </a>
                </div>

                <div className="contact-space" />

                <div className="contact-row">
                    <a href="https://wa.me/5511962619817" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp /> <span>(11) 96261-9817</span>
                    </a>
                </div>
                <div className="contact-row">
                    <a href="mailto:jhonathan.novais3450@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail /> <span>jhonathandev7@gmail.com</span>
                    </a>
                </div>
            </div>

        </div>
    );
}



export default Tittle;
