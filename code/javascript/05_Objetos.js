var estudiante = {
    nombre: 'Jose',
    apellido: 'Contreras',
    trabajo: 'Contifico',
    correo: 'jcontreras@contifico.com'

}
var estudiante2 ={
    nombre: 'Luis',
    apellido: 'Rodriguez',
    trabajo: 'Contifico',
    correo: 'lrodriguez@contifico.com'
 
}

function imprimirNombreMayuscula(objeto){
    var { nombre } = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido}`)
}

function imprimirNombreMinuscula(objeto){
       console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
}
imprimirNombreMayuscula(estudiante)
imprimirNombreMayuscula(estudiante2)