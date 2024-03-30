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
   })
   
  }
   let estudiantesJOSN=JSON.stringify(estudiantes);
   localStorage.setItem( "estudiantes1",estudiantesJOSN);




function saludar(){
    alert(" Bienvenido recoger los horarios esta semana")
};
 saludar();

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


 
   document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let numerodetarjeta= document.getElementById('numerodetarjeta').value;
    let vencimieto = document.getElementById('vencimiento').value;
    let cvv = document.getElementById('cvv').value;
   let titular = document.getElementById('titular').value;
   })

  
 





 






 

