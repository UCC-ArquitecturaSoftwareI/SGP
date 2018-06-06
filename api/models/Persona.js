/**
 * Persona.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true,
    },

    apellido: {
      type: 'string',
      required: true,
    },

    dni: {
      type: 'string',
      required: true,
    },

    correo: {
      type: 'string',
      required: true,
    },

    direccion: {
      type: 'string',
      required: true,
    },

    borrada: {
      type: 'boolean',
      defaultsTo: false,
    },

    /*
    Collections
    */

    cursos: {
      collection: 'inscripcion',
      via: 'persona',
    },

    asistencias: {
      collection: 'asistencia',
      via: 'persona',
    },

    padrinazgos: {
      collection: 'turnoBautismo',
      via: 'padrinos',
    },

  },

};

