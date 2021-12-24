
async function obtenerDatos(){
      const response = await fetch("http://127.0.0.1:5500/heroes.json");
      const heroes = await response.json();


  console.log(heroes);
  console.log(heroes.squadName);
  console.log(heroes.members);
  console.log(heroes.members[2]);
  console.log(heroes.members[2].powers);
}

obtenerDatos();


/*
async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/datos.json");
    const json = await response.json();


console.log(json);
console.log(json.nombre);
console.log(json.direccion.colonia);
console.log(json.antiguedad);


}

obtenerDatos();
*/



/*
function persona(nombre, apellido, edad, género, intereses){
      this.nombre = nombre;
      this.apellido= apellido;
      this.edad = edad;
      this.género = género;
      this.intereses=intereses;
      this.bio = function(){
          alert(this.nombre + ' ' + this.apellido + 'is' +
           this.edad + ' de la edad. A él le gusta o interesa lo siguiente:' + 
           this.intereses[0] + 'y' + this.intereses[1] + '.');
      };
    this.saludo = function(){
        alert('hola, yo soy ' + this.nombre + '.');
            };
} 
console.log(persona);


// aca crearemos  un objeto persona

var persona1 = new persona("alonso", "larenas", 33, "masculino", ["ruby", "java", "php", "html"])
*/