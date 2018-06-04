/**
 * Curso.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaInicio: {
      type: 'number',
      required: true
    },

    fechaFin: {
      type: 'number',
      required: true
    },

    dias: {
      type: 'json',
      required: true
    },

    horaInicio: {
      type: 'number',
      required: true
    },

    horaFin: {
      type: 'number',
      required: true
    },

    nombre: {
      type: 'string',
      required: true
    },

    descripcion: {
      type: 'string',
      required: true
    },

    aula: {
      type: 'string',
      required: true
    },

    docentes: {
      collection: 'usuario',
      via: 'docencia',
    },

    cupo: {
      type: 'number',
      required: true
    },

    inscriptos: {
      collection: 'inscripcion',
      via: 'curso',
    },

  },

};
