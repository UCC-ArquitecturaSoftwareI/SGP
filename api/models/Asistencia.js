/**
 * Asistencia.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    persona: {
      model: 'Persona',
      required: true,
    },

    curso: {
      model: 'curso',
      required: true,
    },

    clase: {
      type: 'number',
      required: true
    },

    asistio:{
      type: 'boolean',
      required: true
    },

  },

};

