

let estudiantes = [];

   document.getElementById('formulario').addEventListener('submit', function(event) {
       event.preventDefault();
       let nombre = document.getElementById('nombre').value;
       let calificacion = parseFloat(document.getElementById('calificacion').value);
       agregarEstudiante(nombre, calificacion);
       asignarSeccion();
       mostrarResultado();
       document.getElementById('formulario').reset();
   });

   function agregarEstudiante(nombre, calificacion) {
       estudiantes.push({ nombre: nombre, calificacion: calificacion });
   }

   function asignarSeccion() {
    estudiantes.forEach(estudiante => {
        estudiante.seccion = estudiante.calificacion >= 70 ? ' Seccion A' : ' Seccion B';
    });
}



 const meses1=["Enero", "Febrero","marzo"]
 const meses2=["Abril","Mayo","Junio"]
 const semestre=[...meses1, ...meses2 ]
  console.log ( semestre)
  console.log(typeof semestre)
  semestre.push("Julio");
  semestre.map
 
 


//inscripciones

let inscripcion= [1,2,3,4]

let dobleinscripcion= inscripcion.map(num =>num *2)
console.log(dobleinscripcion)




function mostrarResultado() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    estudiantes.forEach(estudiante => {
        resultadoDiv.innerHTML = estudiante.seccion
    });
}

mostrarResultado()   

const btn=document.querySelector('#btn');
 const materias=document.querySelector('#materias');
  btn.onclick=function(){
  materias.innerHTML="Materias agregadas";
}
 setTimeout(()=>{

  materias.innerHTML="Pasa por tu horario"

 },7000)

 Swal.fire("Bienvenido a nuestra pagina");
 


 fetch('../data/alumno.json')
  .then(response => response.json())
  .then(data => {
    mostrarDatosEnPagina(alumno.json);
  })
  .catch(error => {

    console.log('Hubo un error');
  });
