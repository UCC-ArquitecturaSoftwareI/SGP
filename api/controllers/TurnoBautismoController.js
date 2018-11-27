/**
 * TurnoBautismoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async function (req, res) {

    var bautismos = await TurnoBautismo.find({eliminado: false}).populate('padrinos');

    //console.log(bautismos);

    res.view('pages/bautismos/bautismos', {a: bautismos});
  },

  agregar: async function (req, res) {
    console.log(req.allParams());
    var param = req.allParams();

    //arreglo con los ids de los padrinos
    let padrinos = JSON.parse(param.inputpadrinos);

    let date = new Date(param.inputfecha);
    //Se compensa la conversion a milisegundos
    date.setDate(date.getDate() + 1);
    date = date.getTime();

    var nuevobautismo = {
      nombre: param.inputnombre,
      dni: param.inputdni,
      fecha: date,
      turno: param.inputturno,
    };

    let elemento = await TurnoBautismo.create(nuevobautismo).fetch();
    await TurnoBautismo.addToCollection(elemento.id, 'padrinos').members(padrinos);

    var bautismos = await TurnoBautismo.find({eliminado: false});
    res.view('pages/bautismos/bautismos', {a: bautismos});
  },

  eliminar: async function (req, res) {
    //await TurnoBautismo.destroy({id: req.allParams().id});

    var bautismos = await TurnoBautismo.find({id: req.allParams().id});
    bautismos[0].eliminado = true;

    await TurnoBautismo.update({id: req.allParams().id}, bautismos[0]);

    var bautismo = await TurnoBautismo.find({eliminado: false});
    res.view('pages/bautismos/bautismos', {a: bautismo});
  },

  modificar: async function (req, res) {
    console.log(req.allParams());
    var param = req.allParams();

    let padrinos = JSON.parse(param.inputpadrinos);

    let date = new Date(param.inputfecha);
    //Se compensa la conversion a milisegundos
    date.setDate(date.getDate() + 1);
    date = date.getTime();

    var nuevobautismo = {
      nombre: param.inputnombre,
      dni: param.inputdni,
      fecha: date,
      turno: param.inputturno,
    };

    await TurnoBautismo.update({id: param.inputid}, nuevobautismo);
    await TurnoBautismo.replaceCollection(param.inputid, 'padrinos').members(padrinos);

    var bautismos = await TurnoBautismo.find({eliminado: false});
    res.view('pages/bautismos/bautismos', {a: bautismos});
  },

  buscarJSON: async function (req, res) {
    var bautismos = await TurnoBautismo.find(
      {
        or: [
          {nombre: {contains: req.allParams().nombre}},
          {dni: {contains: req.allParams().nombre}},
        ],
        eliminado: false
      });
    //console.log(req.allParams());
    res.json(bautismos);
  },

  listarJSON: async function (req, res) {
    var bautismos = await TurnoBautismo.find({eliminado: false});

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

  vermodificar: async function (req, res) {
    var ret;
    var bautismo = await TurnoBautismo.find({id: req.allParams().id}).populate('padrinos');

    //console.log(bautismo);
    //console.log(JSON.stringify(bautismo[0].padrinos));

    var ids = [];

    for(var i = 0; i<bautismo[0].padrinos.length; i++){
      ids[i] = bautismo[0].padrinos[i].id;
    }

    //console.log(JSON.stringify(ids));

    ret = {
      id: bautismo[0].id,
      padrinos: bautismo[0].padrinos,
      idspadrinos: ids,
      nombre: bautismo[0].nombre,
      dni: bautismo[0].dni,
      fecha: bautismo[0].fecha,
      turno: bautismo[0].turno,
    };

    var personas = await Persona.find({});
    res.view('pages/bautismos/modificarBautismo', {a: ret, persona: personas});
  },
  listarpersonas: async function (req, res) {
    var personas = await Persona.find({});

    res.view('pages/bautismos/addBautismo', {persona: personas});
  },
};

