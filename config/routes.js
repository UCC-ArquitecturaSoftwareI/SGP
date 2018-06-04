/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/inicio.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  /*
        Pagina de la parroquia
  */

  '/': {
    view: 'pages/pagina/index',
    locals:{
      layout: 'layouts/layout_pagina'
    }
  },


  /*
        Sistema de Gestión de Usuarios
   */
  'GET /login':{
    view: 'pages/usuario/login',
    locals:{
      layout: 'layouts/layout_pagina'
    }
  },
  'POST /login': {
    controller: 'UsuarioController',
    action: 'login'
  },
  '/logout': {
    controller: 'UsuarioController',
    action: 'logout'
  },


  /*
        Pagina principal del sistema
   */
  '/inicio': {
    controller: 'UsuarioController',
    action: 'dashboard'
  },


  /*
        ABM Usuarios (no hay grupo)
   */




  /*
        ABM Personas (AbstractTeam)
   */

  '/persona/lista':{
    controller: 'PersonaController',
    action: 'lista',
  },
  'POST /persona/agregar': {
    controller: 'PersonaController',
    action: 'agregar'
  },
  '/persona/formulario/:id': {
    controller: 'PersonaController',
    action: 'devolverFormulario'
  },
  '/persona/modificar': {
    controller: 'PersonaController',
    action: 'modificar'
  },
  '/persona/eliminar/:id': {
    controller: 'PersonaController',
    action: 'eliminar'
  },
  '/persona/buscar': {
    controller: 'PersonaController',
    action: 'buscar'
  },


  /*
        ABM Bautismos (PUBG)
   */
  '/bautismos/add': {
    view: 'pages/bautismos/addBautismo'
  },
  '/bautismos': {
    view: 'pages/bautismos/bautismos'
  },

  /*
        ABM Cursos (ABMCursos)
   */

  '/cursos/lista':{
    controller: 'CursoController',
    action: 'listaCurso',
  },
  'POST /cursos/agregar': {
    controller: 'CursoController',
    action: 'agregarCurso'
  },
  '/cursos/formulario': {
    controller: 'CursoController',
    action: 'frmCurso'
  },
  '/cursos/modificar': {
    controller: 'CursoController',
    action: 'modificarCurso'
  },
  '/cursos/eliminar/:id': {
    controller: 'CursoController',
    action: 'eliminarCurso'
  },
  '/cursos/buscar': {
    controller: 'CursoController',
    action: 'buscarCurso'
  },




  /*
        Gestión de Cursos (Alpha)
    */
  '/inscripcion':{
    controller: 'InscripcionController',
    action: 'inscripcion',
  },





  /*
        Asistencia (Fortnite)
   */
  'GET /asistencia':{
    controller: 'AsistenciaController',
    action: 'lista',
  },
  'GET /asistencia2':{
    controller: 'AsistenciaControler',
    action: 'lista2',
  },


};
