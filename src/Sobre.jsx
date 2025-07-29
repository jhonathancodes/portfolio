import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer';
import Tittle from './components/tittle/Tittle';
import './App.css'

function Sobre() {
  return (
    <div className="background-div">
      <div className="content-div">
        <Nav />
        <Tittle />
        <Footer />
      </div>
    </div>
  );
}

export default Sobre;

