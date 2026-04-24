import {Request, Response} from "express";
import {documentos} from "../../shared/database";
import {v4 as uuid} from "uuid";

export const createDocumento = (req: Request, res: Response) => {
    const {titulo, conteudo } = req.body

    const novoDocumento = {
        id: uuid(),
        titulo,
        conteudo,
        criadoEm: new Date()
    }

    documentos.push(novoDocumento);

    return res.status(201).json(novoDocumento);
}