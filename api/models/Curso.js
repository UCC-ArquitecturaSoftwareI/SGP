/**
 * Curso.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaInicioCurso: {
      type: 'number',
      required: true
    },

    fechaFinCurso: {
      type: 'number',
      required: true
    },

    diasDeCursos: {
      type: 'string',
      required: true
    },

    horaInicioCurso: {
      type: 'number',
      required: true
    },

    horaFinCurso: {
      type: 'number',
      required: true
    },

    nombreDelCurso: {
      type: 'string',
      required: true
    },

    descripcionCurso: {
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

    cupoCurso: {
      type: 'number',
      required: true
    },

    inscriptos: {
      collection: 'inscripcion',
      via: 'curso',
    },

  },

};
