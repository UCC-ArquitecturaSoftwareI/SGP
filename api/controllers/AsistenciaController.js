/**
 * AsistenciaController
 * @type {{verAsistencia: module.exports.verAsistencia, lista: module.exports.lista, curso: module.exports.curso}}
 */

module.exports = {

  verAsistencia: async function (req, res) {

    var idCurso = req.param('id');
    //busco a todos los inscripos en ese ID de curso
    var course = await Curso.findOne({id: idCurso}).populate('inscriptos');
    var personas = [];
    //lo inserto dentro de un array con todas las personas
    for (var inscripcion of course.inscriptos) {
      personas.push(
         inscripcion.persona
      );
    }
    //calculo la asistencia de cada uno y lo inserto en un array nuevamente
    var asistencia = [];
    for (var i = 0; i < personas.length; i++) {
      var tot = await Asistencia.count({persona: personas[i], curso: idCurso});
      var real = await Asistencia.count({persona: personas[i], curso: idCurso, asistio: true});
      var perc = ((real * 100) / tot).toFixed(0);
      if (isNaN(perc)) {
        perc = 0;
      }

      var tmp = personas[i];
      var per = await Persona.findOne({id: tmp});
      asistencia.push({
        id: per.id,
        nombre: per.nombre,
        apellido: per.apellido,
        porcentaje: perc,
        idCurso: req.param('id'),
      });
    }

    console.log(asistencia);

    res.view('pages/asistencia/verAsistencia', {asist: asistencia});
  },

  //esta funcion lista todos los inscriptos nuevamente pero para tomar lista
  lista: async function (req, res) {
    var course = await Curso.findOne({id: req.param('id')}).populate('inscriptos');
    var clase = 1;
    var personas = [];
    for (var inscripcion of course.inscriptos) {
      personas.push(
        await inscripcion.persona
      );
    }
    var people = [];
    for (var i = 0; i < personas.length; i++) {
      people.push(
        await Persona.findOne({id: personas[i]})
      );
    }
    console.log(people);

    var tmp = await Asistencia.find({curso: req.param('id')}).sort('clase DESC');
    if (tmp[0]) {
      clase = tmp[0].clase + 1;
    }

    var cursoTmp = req.param('id');

    console.log(cursoTmp);

    console.log(clase);


    res.view('pages/asistencia/lista', {pers: people, clase: clase, cursoTmp});

  },

  //lista todos los cursos del docente
  curso: async function (req, res) {
    var cursos = await Usuario.findOne({id: req.session.usuario.id}).populate('docencia');
    res.view('pages/asistencia/curso', {docencia: cursos.docencia});
    console.log(cursos);

  },

  //funcion para insertar asistencia a almuno.
  putAsistencia: async function (req, res) {
    //por defecto creo la asistencia en true
    var datos = {
      clase: await req.param('clase'),
      persona: await req.param('persona'),
      curso: await req.param('curso'),
      asistio: true,
    }

    var al = await Asistencia.findOne({ where:
        {persona: datos.persona, clase: datos.clase},
        });

    // chequeo si no existe la asistencia y la creo
    if(al === undefined) {
      data = await Asistencia.create(datos);
    }else{
      //si no entro en la primera significa que quiere cambiar el estado de la asistencia
      if (al.asistio === true){
        datos.asistio = false;
        data = await Asistencia.update({id: al.id}, datos);
      }else{
        datos.asistio = true;
        data = await Asistencia.update({id: al.id}, datos);
      }
    }

    res.json(datos);

  },

  //lista todas las clases asistidas por el almuno seleccionado
  verAsistenciaIndividual: async function (req, res){
    var al = await Asistencia.find({ where:
        {persona: req.param('idPersona'), curso: req.param('idCurso')}, sort: 'clase ASC'});
    var persona = await Persona.findOne({id: req.param('idPersona')});
    console.log(al);

    var alumno =[];
    for (var i=0; i<al.length; i++){
      if (al[i].asistio === true) {
        al[i].asistio = 'Presente';
        alumno.push(
          al[i]
        )
      }else{
        al[i].asistio = 'Ausente';
        alumno.push(
          al[i]
        )
      }
    };

    console.log(alumno);
    res.view('pages/asistencia/indexAsistencia', {alumno, persona} )
  },

  cambiarAsistencia: async function(req, res){
    var asistencia = await Asistencia.findOne({id: req.param('idAsistencia')});

    if (asistencia.asistio === true) {
      asistencia.asistio = false;
    } else{
      asistencia.asistio = true;
    }

    data = await Asistencia.update({id: req.param('idAsistencia')},asistencia);
  }

};
