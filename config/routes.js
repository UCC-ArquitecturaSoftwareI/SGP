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
  'POST /persona/modificar': {
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
    action: 'lista',
  },
  'POST /cursos/agregar': {
    controller: 'CursoController',
    action: 'agregar'
  },
  '/cursos/formulario': {
    controller: 'CursoController',
    action: 'formulario'
  },
  '/cursos/modificar': {
    controller: 'CursoController',
    action: 'modificar'
  },
  '/cursos/eliminar/:id': {
    controller: 'CursoController',
    action: 'eliminar'
  },
  '/cursos/buscar': {
    controller: 'CursoController',
    action: 'buscar'
  },




  /*
        Gestión de Cursos (Alpha)
    */
  '/inscripcion':{
    controller: 'InscripcionController',
    action: 'inscripcion',
  },

  'POST /inscripcion/buscar': {
    controller: 'InscripcionController',
    action: 'buscarCurso'
  },

  //'/inscripcion/buscar': 'InscripcionController.buscarCurso',



  /*
        Asistencia (Fortnite)
   */
  '/asistencia/curso':{
    controller: 'AsistenciaController',
    action: 'curso',
  },
  '/asistencia/lista/:id':{
    controller: 'AsistenciaController',
    action: 'lista',
  },

  '/asistencia/verAsistencia/:id':{
    controller:'AsistenciaController',
    action: 'verAsistencia',
  },


  '/asistencia/putAsistencia/:clase/:persona':{
    controller:'AsistenciaController',
    action: 'putAsistencia',
  },
};
