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




  /*
        ABM Alumnos (PUBG)
   */




  /*
        ABM Cursos (ABMCursos)
   */

  '/lista':{
    controller: 'CursoController',
    action: 'listaCurso',
  },
  'POST /agregar': {
    controller: 'CursoController',
    action: 'agregarCurso'
  },
  '/formulario': {
    controller: 'CursoController',
    action: 'frmCurso'
  },
  '/modificar': {
    controller: 'CursoController',
    action: 'modificarCurso'
  },
  '/eliminar/:id': {
    controller: 'CursoController',
    action: 'eliminarCurso'
  },
  '/buscar': {
    controller: 'CursoController',
    action: 'buscarCurso'
  },




  /*
        Gestión de Cursos (Alpha)
   */




  /*
        Asistencia (Fortnite)
   */


};
