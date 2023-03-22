const knex = require("../config/knex");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { TOKEN_SECRET } = require("../validators/verifyToken");

exports.registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const contraseña = await bcrypt.hash(req.body.contraseña, salt);
  const newUser = {
    usuario: req.body.usuario,
    email: req.body.email,
    contraseña: contraseña,
  };
  knex("users")
    .insert(newUser)
    .then(() => {
      res.status(200).json({ success: true, newUser: newUser });
    })
    .catch((error) => {
      // res.status(400).json({ error: error.message });
    });
};

exports.login = async (req, res) => {
  const { email, contraseña } = req.body;
  await knex("users")
    .where("email", email)
    .then(async (usuarioDB) => {
      let usuario = usuarioDB[0];
      console.log(usuario);
      const validPassword = await bcrypt.compare(
        contraseña,
        usuario.contraseña
      );
      if (!validPassword) {
        return res.status(400).json({ error: "Contraseña no valida" });
      }
      const token = jwt.sign(
        {
          usuario: usuario.usuario,
          id: usuario.id,
        },
        TOKEN_SECRET
      );
      res.json({ error: null, data: "Login exitoso", token });
    });
};
