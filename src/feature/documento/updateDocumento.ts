import {Request, Response} from "express";
import {documentos} from "../../shared/database"

export const updateDocumento = (req: Request, res: Response) =>{
    const {id} = req.params;
    const {titulo, conteudo} = req.body;

    const doc = documentos.find(a => a.id == id);

    if(!doc)
        return res.status(404).json({message: "Documento não encontrado"});

    doc.titulo = titulo ?? doc.titulo;
    doc.conteudo = conteudo ?? doc.conteudo;

    return res.json(doc);
}