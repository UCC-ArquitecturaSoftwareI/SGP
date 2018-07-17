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

  // Metodos estaticos  ---


  /**
   * Devuelve un array de personas inscriptas a un curso
   * @param opts Mapa que contiene cursoId
   * @returns {Promise<*>}
   *
   * Ejemplo:
   *     var inscriptos = await Inscripcion.getInscriptos({cursoId: 1});
   */

  getInscriptos: async function(opts) {

    // Buscamos inscripciones al cursoId y llenamos datos de persona
    var inscripciones = await Inscripcion.find({curso: opts.cursoId}).populate('persona');

    // Descartamos las inscripciones dadas de baja y tambien las personas borradas
    inscripciones = inscripciones.filter(inscripcion => inscripcion.baja === false && inscripcion.persona.borrada === false);

    // Devolvemos la lista de personas inscriptas
    return await inscripciones.map(inscripcion => inscripcion.persona);
  },
};

