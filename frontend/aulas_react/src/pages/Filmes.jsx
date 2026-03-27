import { useParams, useNavigate } from 'react-router-dom';

function Filmes() {
    const { nome } = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <h1>Nome do filme:{nome}</h1>
            <button onClick={() => navigate('/')}>Voltar</button>


        </div>
    )

}

export default Filmes