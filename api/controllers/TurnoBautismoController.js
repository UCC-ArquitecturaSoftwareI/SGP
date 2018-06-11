/**
 * TurnoBautismoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async function (req, res) {

    var bautismos = await TurnoBautismo.find({});

    console.log(bautismos);

    res.view('pages/bautismos/bautismos', {a: bautismos});
  },

  agregar: async function (req, res) {
    var param = req.allParams();
    var nuevobautismo = {
      nombre: param.nombre,
      dni: param.dni,
      fecha: param.fecha,
      turno: param.turno,
      padrinos: param.padrinos,                 <!-- preguntar como manejar colecciones -->
    };

    datos = await TurnoBautismo.create(nuevobautismo);
    var bautismos = await TurnoBautismo.find({});
    res.view('pages/bautismos/bautismos', {a: bautismos});
  },

  eliminar: async function (req, res) {
    await TurnoBautismo.destroy({id: req.allParams().id});
    console.log(JSON.stringify(req.allParams()));
    var bautismos = await TurnoBautismo.find({});
    res.view('pages/bautismos/bautismos', {a: bautismos});
  },

  eliminard: async function (req, res) {
    //await Persona.destroy({id: req.allParams().id});
    let persona = await Persona.find({id: req.allParams().id});
    persona[0].borrada = true;
    await Persona.update({id: req.allParams().id},persona[0]);
    res.redirect('/persona/lista');
  },

  buscarJSON: async function (req, res) {
    var bautismos = await TurnoBautismo.find(
      {
        or: [
          {nombre: {contains: req.allParams().nombre}},
          {dni: {contains: req.allParams().nombre}},
        ]
      });
    console.log(req.allParams());
    res.json(bautismos);

  },

  listarJSON: async function (req, res) {
    var bautismos = await TurnoBautismo.find({});

    console.log(bautismos);

    res.json(bautismos);
  },

  ver: async function (req, res) {
    var ret;
    var bautismo = await TurnoBautismo.find({id: req.allParams().id}).populate('padrinos');

    ret = {
      id: bautismo[0].id,
      padrinos: bautismo[0].padrinos,
      nombre: bautismo[0].nombre,
      dni: bautismo[0].dni,
      fecha: bautismo[0].fecha,
      turno: bautismo[0].turno,
    };
    res.view('pages/bautismos/verBautismo', {a: ret});
  },

  listarpersonas: async function (req,res) {
    var personas = await Persona.find({});

    res.view('pages/bautismos/addBautismo', {persona: personas});
  },

  listarpersonasJSON: async function (req,res) {
    var personas = await Persona.find({});

    res.json(personas);
  }
};

