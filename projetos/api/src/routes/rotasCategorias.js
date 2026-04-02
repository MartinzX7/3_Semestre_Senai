import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os categorias
router.get('/categorias', async (req, res) => {
    try {

        //cria uma variavel para enviar o comando sql
        const comando = `SELECT * FROM categorias WHERE ativo = true`

        //cria uma variavel para receber o retorno do sql
        const categorias = await BD.query(comando);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
        return res.status(200).json(categorias.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar categorias', error.message);
        return res.status(500).json({ error: 'Erro ao listar categorias' })
    }
})


router.post('/categorias', async (req, res) => {
    const { nome, descricao, cor, icone, tipo } = req.body;
    try {


        const comando = `INSERT INTO categorias(nome, descricao,cor,icone,tipo) VALUES($1, $2, $3, $4,$5)`
        const valores = [nome, descricao, cor, icone, tipo];

        await BD.query(comando, valores)
        console.log(comando, valores);

        return res.status(201).json("categorias cadastrado.");
    } catch (error) {
        console.error('Erro ao cadastrar categorias ', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar categorias' })
    }
})

// endpoint para atualizar um unico categorias // recebendo o parametro pelo id e buscando o usuario
router.put('/categorias/:id_categoria', async (req, res) => {
    // Id recebido via parametro
    const { id_categoria } = req.params;

    // Dados do usuario recebido via Corpo da página
    const { nome, descricao,cor,icone,tipo } = req.body;
    try {
        //Verificar se o usuario existe
        const verificarCategoria = await BD.query(`SELECT * FROM categorias
            WHERE id_categoria = $1 and ativo = true`, [id_categoria])
        if (verificarCategoria.rows.length === 0) {
            return res.status(404).json({ message: 'Categoria não encontrada' })
        }
       

        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE categorias SET ativo = false WHERE id_categoria = $1`;
        const valores = [nome,descricao,cor,icone,tipo ];
        await BD.query(comando, valores);

        return res.status(200).json('Categoria foi atualizado!');
    } catch (error) {
        console.error('Erro ao atualizar categorias ', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar categorias' })
    }
})


router.delete('/categorias/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    try {
        //Executa o comando de update
        const comando = `UPDATE categorias SET ativo = false WHERE id_categoria = $1 `
        await BD.query(comando, [id_categoria])
        return res.status(200).json({ message: "Categoria removido com sucesso" })
    } catch (error) {
        console.error('Erro ao atualizar categoria', error.message)
        return res.status(500).json({ message: "Erro interno so servidor" + error.message })
    }
})



export default router