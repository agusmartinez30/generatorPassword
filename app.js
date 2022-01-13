

// GENERAR CLAVE

function generarClave( minuscula, mayuscula, numeros, simbolos, cantidad ){
    let claveGenerada = ''
    const tipoContador = minuscula + mayuscula + numeros + simbolos;
    const tipoArreglo = [{minuscula}, {mayuscula}, {numeros}, {simbolos}].filter( 
        (item) => Object.values(item)[0]
    );

    for( let i = 0; i < cantidad; i += tipoContador){
        tipoArreglo.forEach((item) => {
            const FuncionNombre = Object.keys(item)[0];
            claveGenerada += randomFuncion[FuncionNombre]();
        });

    }

    const claveFinal = claveGenerada.slice(0,cantidad);
    return claveFinal;

}



const generar = document.getElementById("generarBtn");
generar.addEventListener('click', () => {
    
    const cant = document.getElementById("caracteresCantidad").value;
    const mayus = document.getElementById("mayusculas").checked;
    const minus = document.getElementById("minusculas").checked;
    const num = document.getElementById("numeros").checked;
    const simbol = document.getElementById("simbolos").checked;
    const result = document.getElementById("ResultadoClave");
    result.innerHTML = generarClave(
        minus,
        mayus,
        num,
        simbol,
        cant
    );
});


// GENERAR NUMEROS RANDOMS, MINUS, MAYUS, SIMB

function randomMinus(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomMayus(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNum(){
    return  Math.floor(Math.random() * 10) + 34;
}
function randomSim(){
    const symbols = "!@#€&%/()=?<>,.-"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFuncion = {
    minuscula: randomMinus,
    mayuscula: randomMayus,
    numeros: randomNum,
    simbolos: randomSim,
};