import {Router} from "express";
import {createDocumento} from "./createDocumento"
import {getDocumento} from "./getDocumento"
import {updateDocumento} from "./updateDocumento"
import { deleteDocument } from "./deleteDocument";

const router = Router();

router.post("/", createDocumento);
router.get("/", getDocumento);
router.put("/:id", updateDocumento);
router.delete("/:id", deleteDocument);

export default router;
