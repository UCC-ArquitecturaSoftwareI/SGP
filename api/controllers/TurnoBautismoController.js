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

  buscar: async function (req, res) {

    var bautismos = await TurnoBautismo.find({nombre: req.allParams().nombre});

    res.view('pages/bautismos/bautismos', {a: bautismos});

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
    var bautismo = await TurnoBautismo.find({id: req.allParams().id});
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
};

