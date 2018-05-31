/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

  if (await Usuario.count() === 0) { // si no hay por lo menos un usuario, se
    const roles = await Rol.createEach([
      {nombre: 'Docente'},
      {nombre: 'Administrador'},
      {nombre: 'Bautismo'},
      {nombre: 'Cursos'},
    ]).fetch();

    const rolAdmin = roles.find(rol => rol.nombre === 'Administrador');

    await Usuario.create(
      {correo: 'a@a.a', contrasenia: '1234', nombre: 'Admin', apellido: 'Admin', roles: [rolAdmin.id]}
    );
  }

  if(await Curso.count() === 0) {
    // AlphaTeam: Creamos cursos truchos para probar
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso1', descripcionCurso: 'descripcionCurso1', aula: 'aula1', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso2', descripcionCurso: 'descripcionCurso2', aula: 'aula2', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso3', descripcionCurso: 'descripcionCurso3', aula: 'aula3', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso4', descripcionCurso: 'descripcionCurso4', aula: 'aula4', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso5', descripcionCurso: 'descripcionCurso5', aula: 'aula5', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso6', descripcionCurso: 'descripcionCurso6', aula: 'aula6', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso7', descripcionCurso: 'descripcionCurso7', aula: 'aula7', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso8', descripcionCurso: 'descripcionCurso8', aula: 'aula8', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso9', descripcionCurso: 'descripcionCurso9', aula: 'aula9', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso10', descripcionCurso: 'descripcionCurso10', aula: 'aula10', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso11', descripcionCurso: 'descripcionCurso11', aula: 'aula11', cupoCurso: 20});
    await Curso.create({fechaInicioCurso: 1, fechaFinCurso: 2, diasDeCursos: 'lun-mar-mier', horaInicioCurso: 2, horaFinCurso: 3, nombreDelCurso: 'curso12', descripcionCurso: 'descripcionCurso12', aula: 'aula12', cupoCurso: 20});
  }

  return done();

};
