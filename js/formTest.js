function formTest () {

    let EmptyCamp = false

    let Nombre = document.getElementById("name").value;
    let Apellido = document.getElementById("lastName").value;
    let Edad = document.getElementById("age").value;
    let Email = document.getElementById("email").value;

    let form = [Nombre, Apellido, Edad, Email]
    for (let i = 0; i < form.length; i++) {
        if (form[i] === ""){ 
            EmptyCamp = true
        }
    }

    if (EmptyCamp === true) {
        alert("Por favor rellene los campos")
    }
    
    if (Edad > 17 && EmptyCamp === false) {
        alert(`Hola! ${Nombre} ${Apellido}, has aplicado correctamente te contactaremos en ${Email}`);
    }
    if (parseInt(Edad) < 18 && EmptyCamp === false) {
        alert(`Hola! ${Nombre} ${Apellido}, no cumples con la edad requeridad`);
    }
   
}



