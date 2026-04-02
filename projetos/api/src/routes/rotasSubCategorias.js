import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/subcategorias', async(req,res) => {
    try {
        const query = `SELECT * FROM subcategorias`
        const subcategorias = await BD.query(query)

        return res.status(200).json(subcategorias.rows)
    } catch (error) {
        console.error("Erro ao listar subcategorias", error.message)
        return res.status(500).json({error: "Erro ao listar"})
    }
})

router.post('/subcatergorias', async(req,res) => {
    const {nome, id_categoria} = req.body

    try {
        const query = `INSERT INTO subcategorias (nome, id_categoria) VALUES($1, $2)`
        const valores = [nome,id_categoria]
        await BD.query(query,valores)

        return res.status(200).json("Subcategoria cadastrada")
    } catch (error) {
        
        
    }
})


export default router