import { Request, Response } from "express";
import { documentos } from "../../shared/database";

export const deleteDocument = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = documentos.findIndex(d => d.id == id);

    if(index === -1)
        return res.status(404).json({message: "Documento não encontrado"});

    documentos.splice(index, 1);

    return res.status(204).send();
}