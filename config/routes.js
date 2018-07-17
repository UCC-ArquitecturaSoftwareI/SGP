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
    controller: 'TurnoBautismoController',
    action: 'listarpersonas',
  },
  '/bautismos': {
    controller: 'TurnoBautismoController',
    action: 'list'
  },
  '/bautismos/:id': {
    controller: 'TurnoBautismoController',
    action: 'ver'
  },
  /*
  'POST /addBautismo': {
    controller: 'TurnoBautismoController',
    action: 'agregar',
  },
  */
  '/bautismos/eliminar/:id': {
    controller: 'TurnoBautismoController',
    action: 'eliminar',
  },
  '/bautismos/buscar': 'TurnoBautismoController.buscarJSON',
  '/bautismos/listar': 'TurnoBautismoController.listarJSON',
  '/bautismos/listarpersonas': 'TurnoBautismoController.listarpersonasJSON',
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
  '/cursos/formulario/:id': {
    controller: 'CursoController',
    action: 'formulario'
  },

  'POST /cursos/modificar': {
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

  'GET /inscripcion/cursoDetalle/:cursoId': {
    controller: 'InscripcionController',
    action: 'cursoDetalle',
  },

  'POST /inscripcion/removerAlumno': {
    controller: 'InscripcionController',
    action: 'removerAlumno'
  },

  'POST /inscripcion/inscribir' : {
    controller: 'InscripcionController',
    action: 'inscribir'
  },

  'POST /inscripcion/Inscriptos' : {
    controller: 'InscripcionController',
    action: 'buscarInscriptos'
  },




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
