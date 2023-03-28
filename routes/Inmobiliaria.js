const express = require("express");
const router = express.Router();
const {
  propiedades,
  addProp,
  deleteProp,
  modify,
  filtrarPropiedades,
  addFoto,
} = require("../controllers/Inmobiliaria");
const { verifyToken } = require("../validators/verifyToken");

/*Configuracion multer: */
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../inmobiliariaFront/proyecto-final/public/Images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/propiedades", propiedades);
router.post("/propiedades/add", addProp);
router.delete("/propiedades/delete/:id", deleteProp);
router.patch("/propiedades/editar/:id", modify);
router.get("/propiedades/buscar", filtrarPropiedades);
router.post("/propiedades/add/foto", upload.single("img"), addFoto);
module.exports = router;
