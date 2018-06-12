/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your sails app gets lifted.
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
    sails.log(`Se crearon ${roles.length} roles`);

    const rolAdmin = roles.find(rol => rol.nombre === 'Administrador');
    const rolDocente = roles.find(rol => rol.nombre === 'Docente');
    const rolBautismo = roles.find(rol => rol.nombre === 'Bautismo');
    const rolCursos = roles.find(rol => rol.nombre === 'Cursos');

    const usuarios = await Usuario.createEach([
      {correo: 'a@a.a', contrasenia: '1234', nombre: 'rolAdmin', apellido: 'rolAdmin', roles: [rolAdmin.id]},
      {correo: 'd@d.d', contrasenia: '1234', nombre: 'rolDocente', apellido: 'rolDocente', roles: [rolDocente.id]},
      {correo: 'd2@d2.d2', contrasenia: '1234', nombre: 'rolDocente', apellido: 'rolDocente', roles: [rolDocente.id]},
      {correo: 'd3@d3.d3', contrasenia: '1234', nombre: 'rolDocente', apellido: 'rolDocente', roles: [rolDocente.id]},
      {correo: 'b@b.b', contrasenia: '1234', nombre: 'rolBautismo', apellido: 'rolBautismo', roles: [rolBautismo.id]},
      {correo: 'c@c.c', contrasenia: '1234', nombre: 'rolCursos', apellido: 'rolCursos', roles: [rolCursos.id]},
    ]).fetch();

    sails.log(`Se crearon ${usuarios.length} usuarios`);

    const docente1 = usuarios.find(user => user.correo === 'd@d.d');
    const docente2 = usuarios.find(user => user.correo === 'd2@d2.d2');
    const docente3 = usuarios.find(user => user.correo === 'd3@d3.d3');

    // AlphaTeam: Creamos cursos truchos para probar
    const cursos = await Curso.createEach([
      {
        fechaInicio: 1530414000000, // Julio 1, 2018 en milisegundos
        fechaFin: 1533092400000,    // Agosto 1, 2018
        dias: [1, 3, 5], // Domingo es 0, lunes es 1, y así...
        horaInicio: 17,  // 0 a 23
        horaFin: 19,
        nombre: 'Electricidad',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque vel nunc ac egestas. Cras porta fringilla sem. Nullam tempus odio purus, non tincidunt nisl pellentesque varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eu nisi tellus. Nullam viverra nisi sem, sit amet mollis velit rhoncus a. Fusce id vulputate quam, et vehicula tellus. Sed lorem est, placerat at aliquam vel, dapibus et dui. Suspendisse mi diam, pulvinar at eros sit amet, varius varius quam. ',
        aula: 'aula1',
        cupo: 20,
        docentes: [docente1.id]
      },
      {
        fechaInicio: 1530414000000, // Julio 1, 2018 en milisegundos
        fechaFin: 1533092400000,    // Agosto 1, 2018
        dias: [1, 3, 5], // Domingo es 0, lunes es 1, y así...
        horaInicio: 19,  // 0 a 23
        horaFin: 21,
        nombre: 'Mecanica',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque vel nunc ac egestas. Cras porta fringilla sem. Nullam tempus odio purus, non tincidunt nisl pellentesque varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eu nisi tellus. Nullam viverra nisi sem, sit amet mollis velit rhoncus a. Fusce id vulputate quam, et vehicula tellus. Sed lorem est, placerat at aliquam vel, dapibus et dui. Suspendisse mi diam, pulvinar at eros sit amet, varius varius quam. ',
        aula: 'aula1',
        cupo: 20,
        docentes: [docente2.id]
      },
      {
        fechaInicio: 1533092400000, // Agosto 1, 2018
        fechaFin: 1535760000000, // Septiembre 1, 2018
        diasDeCursos: [1, 3, 5], // Domingo es 0, lunes es 1, y así...
        horaInicio: 17,  // 0 a 23
        horaFin: 19,
        nombre: 'Electricidad',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque vel nunc ac egestas. Cras porta fringilla sem. Nullam tempus odio purus, non tincidunt nisl pellentesque varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eu nisi tellus. Nullam viverra nisi sem, sit amet mollis velit rhoncus a. Fusce id vulputate quam, et vehicula tellus. Sed lorem est, placerat at aliquam vel, dapibus et dui. Suspendisse mi diam, pulvinar at eros sit amet, varius varius quam. ',
        aula: 'aula1',
        cupo: 20,
        docentes: [docente1.id]
      },
      {
        fechaInicio: 1533092400000, // Agosto 1, 2018
        fechaFin: 1535760000000, // Septiembre 1, 2018
        dias: [2, 4], // Domingo es 0, lunes es 1, y así...
        horaInicio: 17,  // 0 a 23
        horaFin: 19,
        nombre: 'Folcklore',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque vel nunc ac egestas. Cras porta fringilla sem. Nullam tempus odio purus, non tincidunt nisl pellentesque varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eu nisi tellus. Nullam viverra nisi sem, sit amet mollis velit rhoncus a. Fusce id vulputate quam, et vehicula tellus. Sed lorem est, placerat at aliquam vel, dapibus et dui. Suspendisse mi diam, pulvinar at eros sit amet, varius varius quam. ',
        aula: 'aula2',
        cupo: 20,
        docentes: [docente3.id]
      },
    ]).fetch();

    sails.log(`Se crearon ${cursos.length} cursos`);


    const pers = await Persona.createEach([
      {
        nombre: 'Adrian',
        apellido: 'Soto',
        dni: 65987135,
        correo: 'adrian@soto.com',
        direccion: 'Av. Colon 500 1ro B'
      },
      {
        nombre: 'César',
        apellido: 'Parra',
        dni: 23986571,
        correo: 'cesar@parra.com',
        direccion: 'Acceso Esmenaré, 157A 10ºB'
      },
      {
        nombre: 'Santiago',
        apellido: 'Gallardo',
        dni: 35865971,
        correo: 'santiago@gallardo.com',
        direccion: 'Avenida Desembarro estergeixi, 4 16ºA'
      },
      {
        nombre: 'Enrique',
        apellido: 'Nuñez Vidal',
        dni: 13958675,
        correo: 'enrique@vidal.com',
        direccion: 'Pasaje Tombí, 115 6ºB'
      },
      {
        nombre: 'Mikel Adrián',
        apellido: 'Morales Lopez',
        dni: 28654135,
        correo: 'mikel@lopez.com',
        direccion: 'Callejón Calcularien, 42B 12ºF'
      },
      {
        nombre: 'Óliver',
        apellido: 'Rovira',
        dni: 18657135,
        correo: 'oliver@rovira.com',
        direccion: 'Glorieta Supletiu, 133 10ºD'
      },
      {
        nombre: 'Érika',
        apellido: 'Jimenez',
        dni: 18657135,
        correo: 'erika@jimenez.com',
        direccion: 'Plaza Lliscara rubriquen propaguin, 18A 19ºD'
      },
      {
        nombre: 'Salma',
        apellido: 'Jimenez',
        dni: 18657135,
        correo: 'salma@jimenez.com',
        direccion: 'Ronda Inglorioses, 102'
      },
      {
        nombre: 'Jimena Nerea',
        apellido: 'Herrero',
        dni: 18657135,
        correo: 'jimena@nerea.com',
        direccion: 'Acceso Orbessin, 187'
      },
      {
        nombre: 'Jimena Eva',
        apellido: 'Herrera',
        dni: 18657135,
        correo: 'jimena@eva.com',
        direccion: 'Plaza Envinagrà, 118A 6ºB'
      },
      {
        nombre: 'Sandra',
        apellido: 'Prieto',
        dni: 18657135,
        correo: 'sandra@prieto.com',
        direccion: 'Carretera Ajudarà, 260B'
      },
      {
        nombre: 'Alicia',
        apellido: 'Esteban',
        dni: 18657135,
        correo: 'alicia@esteban.com',
        direccion: 'Pasadizo Immobilitz, 231 14ºE'
      },
      {
        nombre: 'Claudia',
        apellido: 'Lopez Serrano',
        dni: 18657135,
        correo: 'claudia@lopez.com',
        direccion: 'Callejón Calcularien, 42B 12ºF'
      },
      {
        nombre: 'Silvia Paula',
        apellido: 'Arias',
        dni: 18657135,
        correo: 'silvia@arias.com',
        direccion: 'Avenida Cussols, 202'
      },
      {
        nombre: 'Candela Patricia',
        apellido: 'Ortiz',
        dni: 18657135,
        correo: 'candela@patricia.com',
        direccion: 'C. Comercial Mitjancessen, 286B 4ºG'
      },
      {
        nombre: 'Manuela',
        apellido: 'Vila',
        dni: 18657135,
        correo: 'manuela@vila.com',
        direccion: 'Acceso Esmenaré, 157A 10ºB'
      },
    ]).fetch();


    sails.log(`Se crearon ${pers.length} personas`);

    let inscripciones = [];
    for (let i = 0; i < cursos.length; i++) {
      if (i === 0 || Math.random() > 0.4) {
        for (let per of pers) {
          inscripciones.push({
            persona: per.id,
            curso: cursos[i].id,
            baja: Math.random() < 0.01
          });
        }
      }
    }
    const inscr = await Inscripcion.createEach(inscripciones).fetch();

    sails.log(`Se crearon ${inscr.length} Inscripciones`);


    let bautismos = [];
    for (let i = 0; i < 6; i++) {
      const padrinos = [
        pers[Math.floor(Math.random() * pers.length)].id,
        pers[Math.floor(Math.random() * pers.length)].id
      ];
      const nombre = pers[Math.floor(Math.random() * pers.length)].nombre;
      const apellido = pers[Math.floor(Math.random() * pers.length)].apellido;
      const fecha = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));

      bautismos.push({
        padrinos: padrinos,
        nombre: nombre + ' ' + apellido,
        dni: Math.floor(Math.random() * 99999999),
        fecha: fecha.getTime(),
        turno: Math.floor(Math.random() * 4),
      });

    }
    const bautis = await TurnoBautismo.createEach(bautismos).fetch();
    sails.log(`Se crearon ${bautis.length} bautismos`);



    let asistencias = [];
    for (let ins of inscripciones) {
      for(let i = 1; i<=20; i++){
        asistencias.push({
          persona: ins.persona,
          curso: ins.curso,
          clase: i,
          asistio: Math.random() < 0.9
        });

      }
    }
    const asisten = await Asistencia.createEach(asistencias).fetch();


    sails.log(`Se crearon ${asisten.length} Asistencia`);



  }


  return done();

};
