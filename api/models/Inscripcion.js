/**
 * Inscripcion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    persona: {
      model: 'persona',
      required: true,
    },

    curso: {
      model: 'curso',
      required: true,
    },

    baja: {
      type: 'boolean',
      defaultsTo: false,
    },

  },

};

