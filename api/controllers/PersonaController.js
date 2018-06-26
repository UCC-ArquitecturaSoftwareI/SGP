/**
 * PersonaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  agregar: async function (req, res) {
    var param = req.allParams();
    var nuevapersona = {
      nombre: param.nombre,
      apellido: param.apellido,
      dni: param.dni,
      correo: param.correo,
      direccion: param.direccion,
    };

    datos = await Persona.create(nuevapersona).exec((err, valores) => {
      if (err){
        res.serverError();
      } else {
        res.redirect('/persona/lista');
      }
    });

  },
  modificar: async function (req, res) {
    var param = req.allParams();
    var nuevapersona = {
      nombre: param.nombre,
      apellido: param.apellido,
      dni: param.dni,
      correo: param.correo,
      direccion: param.direccion,
    };

    datos = await Persona.update({id: param.id},nuevapersona).exec((err, valores) => {
      if (err){
        res.serverError();
      } else {
        res.redirect('/persona/lista');
      }
    });
  },
  eliminar: async function (req, res) {
    //await Persona.destroy({id: req.allParams().id});
    let persona = await Persona.find({id: req.allParams().id});
    persona[0].borrada = true;
    await Persona.update({id: req.allParams().id},persona[0]);
    res.redirect('/persona/lista');
  },
  devolverFormulario: async function (req, res) {
    var ret;
    if (req.allParams().id === '0'){
      ret = {
        id: null,
        nombre: null,
        apellido: null,
        dni: null,
        correo: null,
        direccion: null,
        act: 'agregar',
        modalText: 'No se guardará la nueva persona',
      };
    } else {
      var sujeto = await Persona.find({id: req.allParams().id});
      ret = {
        id: sujeto[0].id,
        nombre: sujeto[0].nombre,
        apellido: sujeto[0].apellido,
        dni: sujeto[0].dni,
        correo: sujeto[0].correo,
        direccion: sujeto[0].direccion,
        act: 'modificar',
        modalText: 'No se modificarán los datos de la persona',
      };
    }
    res.view('pages/personas/formulario', {persona: ret});
  },
  buscar: async function (req, res) {
    var personas = await Persona.find(
      {
        or: [
          {nombre: {contains: req.allParams().dato}},
          {apellido: {contains: req.allParams().dato}},
          {dni: {contains: req.allParams().dato}},
        ],
        borrada: false,
      });
    res.json(personas);
  },
  lista: async function (req, res) {
    var personas = await Persona.find({borrada: false});

    res.view('pages/personas/listasa', {persona: personas});
  },

};

