/**
 * TurnoBautismo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    padrinos: {
      collection: 'persona',
      via: 'padrinazgos',
    },

    nombre: {
      type: 'string',
      required: true
    },

    dni: {
      type: 'string',
      required: true
    },

    fecha: {
      type: 'string',
      required: true
    },

    turno: {
      type: 'string',
      required: true
    },

    eliminado: {
      type: 'boolean',
      defaultsTo: false
    },

  },

};

