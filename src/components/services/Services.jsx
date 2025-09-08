import logo from "../../assets/logo.png";
import ds from "../../assets/ds.jpg";
import nova from "../../assets/nova.png";
import microlins from '../../assets/microlins.webp';
import kids from '../../assets/kids.jpg';
import { FiExternalLink } from 'react-icons/fi';
import './Services.css';

function Services() {
    return (
        <div className="services-section">
            <div className="services-logo-wrapper">
                <img src={logo} alt="Logo NovaFront" className="services-logo" />
            </div>
            <h1 className="services-heading">
                Projetos em destaque
            </h1>
            <p className="services-text">
                Veja uma seleção dos meus projetos em destaque.
            </p>

            <div className="projects-wrapper">
                <div className="project-card">
                    <h2 className="project-title">Ds Consultoria Ltda</h2>
                    <p className="project-summary">
                        Site institucional desenvolvido para o escritório de contabilidade. O site apresenta os serviços da empresa, transmite credibilidade e facilita o contato com os clientes.
                    </p>
                    <a href="https://dscontabilidade.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink style={{ marginLeft: '6px' }} /> dsconsultoria.com.br
                    </a>
                </div>

                <div className="project-card">
                    <h2 className="project-title">Andrade Barber</h2>
                    <p className="project-summary">
                        Sistema de gestão de agendamentos e horários para a Andrade Barber.
                    </p>
                    <a href="https://novafront.com.br/web/" target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink style={{ marginLeft: '6px' }} /> andradebarber.com
                    </a>
                </div>

                <div className="project-card">
                    
                    <h2 className="project-title">Landing Page Microlins</h2>
                    <p className="project-summary">
                        Landing Page desenvolvida para a empresa Microlins, com o objetivo de captar leads para um WorkShop na instituição.
                    </p>
                    <a href="https://workshopmicrolins.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink style={{ marginLeft: '6px' }} /> workshopmicrolins.com.br
                    </a>
                </div>

                 <div className="project-card">
                    
                    <h2 className="project-title">ASCOM Doações</h2>
                    <p className="project-summary">
                        Sistema desenvolvido para uma ONG com o objetivo de arrecadar objetos para crianças carentes.
                    </p>
                    <a href="https://ascomdoacao.vercel.app/login" target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink style={{ marginLeft: '6px' }} /> ascomdoacao.org
                    </a>
                </div>

                <div className="project-card">
                    <h2 className="project-title">Catálogo Novafront</h2>
                    <p className="project-summary">
                        Criamos landing pages de alta conversão impacto que converte visitantes. Com um design elegante e atrativo com foco em resultados, ajudamos você a destacar sua marca e aumentar suas conversões.
                    </p>
                    <a href="https://novafront.com.br/web/" target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink style={{ marginLeft: '6px' }} /> novafront.com.br
                    </a>
                </div>


              
            </div>

        </div>




    );
}

export default Services;
