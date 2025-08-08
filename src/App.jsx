
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Home from './Home.jsx';
import Sobre from './Sobre.jsx';
import Projetos from './Projetos.jsx';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/projetos' element={<Projetos />}/>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App;
