import { Link } from 'react-router-dom';

function Inicio() {

  return (
    <div>
      <h1>Bem-Vindo</h1>
      <Link to="/detalhes">Detalhes</Link>
    </div>
  )

}

export default Inicio