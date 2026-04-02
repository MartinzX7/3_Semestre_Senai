import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar (){
  return(
    <header className='navbar'>
      <div className='navbar-conteudo'>
          <Link to= '/' className = 'navbar-logo'>📈 Renda Fixa</Link>

          <nav className='navbar-links'>
            <Link to = '/' className= 'navbar-links'> 🧮 Calculadora</Link>
            <Link to = '/sobre' className= 'navbar-links'> ℹ️ Sobre</Link>

          </nav>
      </div>
    </header>
  )
}

export default NavBar