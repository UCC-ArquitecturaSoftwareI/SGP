/**
 * PersonaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  agregar: async function (req, res){

  },
  modificar: async function (req, res){

  },
  eliminar: async function (req, res){

  },
  lista2: async function (req, res){
    res.view('pages/asistencia/lista');

  },
  lista: async function (req, res){
    var user = await Usuario.find({id:req.session.usuario.id}).populate('docencia');
    console.log(user);
    res.view('pages/asistencia/curso', {docencia: user.docencia});
  },
};
