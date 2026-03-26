import { Link, useParams } from 'react-router-dom';

function Filmes() {
    const { nome } = useParams()

    return (
        <div>
            <h1>Nome do filme: {nome}</h1>
            <Link to="/">Voltar para principla</Link>
        </div>
    )

}

export default Filmes