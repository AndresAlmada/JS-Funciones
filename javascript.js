// sumar(a, b)
//Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

/* const sumar = (a, b) => {
    return a + b
}

console.log (sumar(2, 3))
sumar(1.2, 3.4) 
sumar(3, -5)  */

//restar, multiplicar, dividir es igual a la anterior

//esPar(numero)
//Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es
//TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

/* const esPar = (numero) => {
    if (numero % 2 == 0){
        return true
    }
    else {
        return false
    }
} 

console.log (esPar(2))
console.log (esPar(7)) */

//esImpar es igual al reves

//calcularAreaTriangulo(base, altura)
//Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

/* const calcularAreaTriangulo = (base, altura) => {
    return (base * altura) / 2
}

console.log (calcularAreaTriangulo(3, 4)) */

//gritar(str)
//Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo


/* const gritar = (str) => {
    return (`¡${str}!`)
} */

//console.log (gritar("hola")) 

//obtenerNombreCompleto(nombre, apellido)
//Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores


/* const obtenerNombreCompleto = (nombre, apellido) => {
    return (`${nombre} ${apellido}`)
} */

//console.log (obtenerNombreCompleto("ada", "lovelave")) 

//saludar(nombre)
//Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.


/* const saludar = (nombre) => {
    return `Hola ${nombre}, un gusto conocerte`
} */

//console.log (saludar('Ada'))  

//saludarGritando(nombre, apellido)
//Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.


/* const saludarGritando = (nombre, apellido) => {
    const nombreCompleto = obtenerNombreCompleto(nombre, apellido)
    const saludo = saludar(nombreCompleto)
    const grito = gritar(saludo)

    return grito 
}

console.log (saludarGritando("andres", "almada")) */

//obtenerDatosDeCiudad(nombre, poblacion, pais)
//Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

/* const obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
    return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y esta ubicada en ${pais}.`
}

console.log (obtenerDatosDeCiudad("general pico", 65000, "argentina")) */

//convertirHorasEnSegundos(horas)
//Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

/* const convertirHorasEnSegundos = (horas) => {
    const segundos = horas * 3600
    return `La cantidad de ${horas} horas, equivalen a ${segundos} segundos.`
}

console.log(convertirHorasEnSegundos (3)) */

//calcularPerimetroRectangulo(ancho, alto)
//Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

/* const calcularPerimetroRectangulo = (ancho, alto) => {
    const perimetroRectangulo = ancho*2 + alto*2
    return `El perimetro de su rectangulo es de ${perimetroRectangulo}.`
}

console.log (calcularPerimetroRectangulo(3,2)) */

//obtenerCompetencia(a, b)
//Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

/* const obtenerCompetencia = (a, b) => {
    return `"${a}" vs. "${b}"`
}

console.log(obtenerCompetencia("JavaScript", 'Python')) */

//generarEmail(usuario, dominio)
//Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

/* const generarEmail = (usuario, dominio) => {
    return `${usuario}@${dominio}.com`
}

console.log(generarEmail('adalovelace', 'gmail')) */

//esMayorDeEdad(edad)
//Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario

/* const esMayorDeEdad = (edad) => {
    if (edad >= 18){
        return true 
    } else {
        return false
    }
}

console.log (esMayorDeEdad(17))
console.log (esMayorDeEdad(19)) */

//calcularPuntaje(facil, normal, dificil)
//Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

/* const calcularPuntaje = (facil, normal, dificil) => {
   
    return facil * 3 + normal * 5 + dificil * 10
}

console.log (calcularPuntaje(3,0,0))
console.log (calcularPuntaje(0, 2, 1)) */

//aceptaDeposito(monto)
//Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es

/* const aceptaDeposito = (monto) =>{
    if (monto % 10 === 0) {
        return true
    } else {
        return false
    }
}

console.log(aceptaDeposito(440))
console.log(aceptaDeposito(441)) */