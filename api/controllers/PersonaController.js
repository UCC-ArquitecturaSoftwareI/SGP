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

    datos = await Persona.create(nuevapersona);
    var personas = await Persona.find({});
    res.view('pages/personas/listasa', {persona: personas});
  },
  modificar: async function (req, res) {

  },
  eliminar: async function (req, res) {

    console.log(JSON.stringify(req.allParams()));
    res.redirect('/lista');
  },
  devolverFormulario: async function (req, res) {
    if (req == null){
      var ret;
      ret = {
        nombre: null,
        apellido: null,
        dni: null,
        correo: null,
        direccion: null
      };
    } else ret = req;
    res.view('pages/personas/formulario', {persona: ret});
  },
  buscar: async function (req, res) {

  },
  lista: async function (req, res) {
    var personas = await Persona.find({});

    res.view('pages/personas/listasa', {persona: personas});
  },

};

