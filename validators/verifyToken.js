const jwt = require("jsonwebtoken");
const TOKEN_SECRET = "ClaveToken";

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado" });
  }
  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.usuario = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "El token no es valido" });
  }
};

module.exports = {
  verifyToken,
  TOKEN_SECRET,
};
