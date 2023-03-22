const knex = require("../config/knex");

exports.propiedades = (req, res) => {
  knex("propiedades")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.addProp = (req, res) => {
  const {
    operacion,
    tipo_inmueble,
    departamento,
    barrio,
    precio,
    dormitorios,
    baños,
    metros_terreno,
    metros_edificio,
    descripcion,
    foto,
  } = req.body;
  knex("propiedades")
    .insert({
      operacion: operacion,
      tipo_inmueble: tipo_inmueble,
      departamento: departamento,
      barrio: barrio,
      precio: precio,
      dormitorios: dormitorios,
      baños: baños,
      metros_terreno: metros_terreno,
      metros_edificio: metros_edificio,
      descripcion: descripcion,
      foto: foto,
    })
    .then(() => {
      knex("propiedades")
        .select()
        .then((propiedades) => {
          res.json({
            propiedades,
            message: `Se agrego la propiedad correctamente`,
          });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.deleteProp = (req, res) => {
  const id = req.params.id;
  knex("propiedades")
    .where("id", id)
    .del()
    .then(() => {
      knex("propiedades")
        .select()
        .then((propiedades) => {
          res.json({
            propiedades,
            message: `Se elimino la propiedad con el id ${id}`,
          });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.modify = (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const {
    operacion,
    tipo_inmueble,
    departamento,
    barrio,
    precio,
    dormitorios,
    baños,
    metros_terreno,
    metros_edificio,
    descripcion,
  } = req.body;
  knex("propiedades")
    .where("id", id)
    .update({
      operacion: operacion,
      tipo_inmueble: tipo_inmueble,
      departamento: departamento,
      barrio: barrio,
      precio: Number(precio),
      dormitorios: Number(dormitorios),
      baños: Number(baños),
      metros_terreno: Number(metros_terreno),
      metros_edificio: Number(metros_edificio),
      descripcion: descripcion,
    })
    .then(() => {
      knex("propiedades")
        .select()
        .then((propiedades) => {
          res.json({
            propiedades,
            message: `Se modifico correctamente la propiedad ${id}`,
          });
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    });
};

exports.filtrarPropiedades = (req, res) => {
  let consulta = new Object(); //Objeto vacio para almacenar los parametros de cunsulta
  if (req.query.operacion != null) {
    console.log(req.query.operacion);
    if (req.query.operacion !== "alquilerVenta") {
      consulta.operacion = req.query.operacion;
    }
  }
  if (req.query.departamento != null) {
    consulta.departamento = req.query.departamento;
  }
  if (req.query.tipo_inmueble != null) {
    consulta.tipo_inmueble = req.query.tipo_inmueble;
  }
  if (req.query.dormitorios != null) {
    consulta.dormitorios = req.query.dormitorios;
  }
  //Si los valores no son null se añaden al objeto consulta

  knex("propiedades")
    .where(consulta)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.addFoto = (req, res) => {
  try {
    res.send("Imagen subida correctamente");
  } catch (error) {
    res.status(500).send(error);
  }
};
