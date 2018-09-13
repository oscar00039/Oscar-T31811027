

var numeros_pares = [2, 4, 6, 8, 10];

console.log(numeros_pares);

//imprimo un elemento del arreglo
console.log(numeros_pares[3]);

var frutas = ["pera", "manzana", "piña", "fresa", ];

//console.log (frutas);

//console.log(frutas.length);

for(var i = 0; i <frutas.length; i++){
  console.log("fruta # "+ i + " " + frutas[i])
}

//remove
frutas.splice(0,3);
console.log(frutas);

//push

frutas.push("mango");
console.log(frutas);

//objetos

var fruta = {
nombre: "limon",
sabor: "acido",
peso: 1
};

console.log(fruta);

var canasta ={
precio: 100,
frutas:[
  {
  nombre: "limon",
  sabor: "acido",
  peso: 1
  },
  {
  nombre: "pera",
  sabor: "dulce",
  peso: 2
},
  {
  nombre: "mango",
  sabor: "dulce",
  peso: 3
  }

]

};
console.log(canasta);

//esto es una funcion, uso y declaracion

console.log(suma(5,10));

function suma(x,y){
return x + y;

};
