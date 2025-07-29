import Nav from './components/navbar/Nav';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css'

function Home() {
  return (
    <div className="background-div">
      <div className="content-div">
        <Nav />
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

