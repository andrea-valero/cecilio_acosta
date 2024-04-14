   // formato usario



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





function mostrarResultado() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    estudiantes.forEach(estudiante => {
        resultadoDiv.innerHTML = estudiante.seccion
    });
}
   mostrarResultado()
   
  
const estudiantesGuardados = localStorage.getItem('estudiantes');


if (estudiantesGuardados) {
 
  const estudiantes = JSON.parse(estudiantesGuardados);

  
  console.log(estudiantes);
} else {
  console.log('No hay datos de estudiantes guardados en localStorage.');
}

    

 

for(let i=0; i<5; i+=1 ){
   console.log("llena formulario")

};

let cuotas ={
    matricula:100000,
    colegiatura:200000,
    tiempodepago: "trimestral",

   
 }
 console.table (cuotas)
 // semestre

 const meses1=["Enero", "Febrero","marzo"]
 const meses2=["Abril","Mayo","Junio"]
 const semestre=[...meses1, ...meses2 ]
  console.log ( semestre)
  console.log(typeof semestre)
  semestre.push("Julio");
  semestre.map
 
 

// Descuento 20
const calcular20porciento= numero=> numero * 0.8;
const matricula=100000;
const resultado=calcular20porciento(matricula);
console.log(resultado);


//inscripciones

let inscripcion= [1,2,3,4]

let dobleinscripcion= inscripcion.map(num =>num *2)
console.log(dobleinscripcion)



//agregar las materias


const btn=document.querySelector('#btn');
 const materias=document.querySelector('#materias');
  btn.onclick=function(){
  materias.innerHTML="Materias agregadas";
}
 setTimeout(function(click,btn){

  materias.innerHTML="Pasa por tu horario"

 },7000)


 
 
  document.getElementById('formulario').addEventListener('paga', function(event) {
    event.preventDefault();
    
    let numerodetarjeta= document.getElementById('numerodetarjeta').value;
    let vencimieto = document.getElementById('vencimiento').value;
    let cvv = document.getElementById('cvv').value;
   let titular = document.getElementById('titular').value;
   });

   //libreria
   Swal.fire("Bienvenido");
    
   
   
 
   fetch("alumnos.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener los datos de los alumnos:', error);
  });
   