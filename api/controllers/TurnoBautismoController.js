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
          {turno: {contains: req.allParams().nombre}},
        ]
      });
    console.log(req.allParams());
    res.json(bautismos);

  },
};

