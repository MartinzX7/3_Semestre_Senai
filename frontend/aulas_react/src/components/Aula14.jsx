import { estilos } from "../style/Estilos"
import { Link,useNavigate} from 'react-router-dom'

const Aula14 = () => {

    const navigate = useNavigate()

return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - Router</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas</h3>
            <hr />
            <Link to='/'>Página Principal</Link><br />
            <Link to='/sobre'>Sobre</Link><br />
            <Link to='/paginanaoencontrada'>NotFound</Link>
            <hr />
            <button onClick={() => navigate("/sobre")}>Sobre</button>
            <hr />
            <h3>Rota dinaminca com useParams</h3>

            <button onClick={() => navigate("/perfil/Ricardo")}>Perfil Ricardo</button>
            <button onClick={() => navigate("/perfil/Douglas")}>Perfil Douglas</button>

            


        </div>
    )
}

export default Aula14