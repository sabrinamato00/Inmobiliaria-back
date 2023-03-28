const { check } = require("express-validator");

exports.inmuebleValidator = [
  check("nombre")
    .not()
    .isEmpty()
    .withMessage("El campo nombre debe ser ingresado")
    .isString()
    .withMessage("El campo nombre debe ser un texto"),
  check("metros2")
    .not()
    .isEmpty()
    .withMessage("El campo metros2 debe ser ingresado")
    .isNumeric()
    .withMessage("El campo metros2 debe ser numerico")
    .isLength({ max: 3 })
    .withMessage("El numero de tener hasta 3 cifras"),
  check("direccion")
    .not()
    .isEmpty()
    .withMessage("El campo direccion debe ser ingresado")
    .isString()
    .withMessage("El campo direccion debe ser un texto"),
  check("precio")
    .not()
    .isEmpty()
    .withMessage("El campo precio debe ser ingresado")
    .isNumeric()
    .withMessage("El campo precio debe ser numerico")
    .isLength({ max: 6 })
    .withMessage("El numero de tener hasta 6 cifras"),
];
