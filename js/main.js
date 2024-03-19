let alumno= prompt ("ingrese su nombre")
let calificaciones= Number (prompt("ingrese su calificaciones"))

if (calificaciones >=10){
    console.log("Bienvenido su seccion es la A")
}else if( calificaciones <=5 ){
    console.log("Bienvenido a la seccion B")
};

function saludar(){
    alert(" Bienvenido recoger los horarios esta semana")
};
 saludar();

for(let i=0; i<5; i+=1 ){
   console.log("llena formulario");

};

let cuotas ={
    matricula:100000,
    colegiatura:200000,
    tiempodepago: "trimestral",

   
 }
 console.table (cuotas)

 const primerosMeses=["enero","febrero","marzo"];
  console.log ( primerosMeses)
  console.log(typeof primerosMeses)
  primerosMeses.push("abril");
  primerosMeses.map
 


  let codigo= Number(prompt("ingrese su codigo de descuento"))
   
  if (codigo ===245){

    console.log("Codigo correcto")
  }
    


 


const calcular20porciento= numero=> numero * 0.8;
const matricula=100000;
const resultado=calcular20porciento(matricula);
console.log(resultado);

let inscripcion= [1,2,3,4]

let dobleinscripcion= inscripcion.map(num =>num *2)
console.log(dobleinscripcion)

 

