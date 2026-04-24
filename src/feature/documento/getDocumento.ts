import {Request, Response} from "express";
import { documentos } from "../../shared/database"

export const getDocumento = (req: Request, res: Response) =>{
    return res.json(documentos);
}