import Nav from './components/navbar/Nav';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

import './App.css'

function Projetos() {
  return (
    <div className="background-div">
      <div className="content-div">
        <Nav />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default Projetos;

