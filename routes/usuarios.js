import Router from "express";

import {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
} from "../controllers/usuarios.js";

const router = Router();

router.get("/", usuariosGet);

router.post("/", usuariosPost);

router.put("/:id", usuariosPut);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

export default router;
