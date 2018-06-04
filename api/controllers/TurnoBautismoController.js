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
};

