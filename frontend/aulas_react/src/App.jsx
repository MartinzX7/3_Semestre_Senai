import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';
import Inicio from './pages/Inicio';
import Detalhes from './pages/Detalhes';
import Contato from './pages/Contato';
import Filmes from './pages/Filmes';

function App (){
return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/perfil/:nome' element={<Perfil />}/>
        <Route path='/inicio' element={<Inicio />}/>
        <Route path='/detalhes' element={<Detalhes />}/>
        <Route path='/Contato' element={<Contato />}/>
        <Route path='/filmes/:nome' element={<Filmes />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App