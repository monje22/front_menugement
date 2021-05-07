const nuevoNombre = async() =>{
    const server = "https://aqueous-journey-05187.herokuapp.com/receta/getRecetas";
    const response = await fetch(server);

    const {rows} = await response.json();
    return rows;
}

const mostrarNombre = async function(){

    const Nombre =  await nuevoNombre();

    Nombre.map(function (element){

        if(element.NOMBRERECETA == sessionStorage.getItem('datoNombre')){   
            sessionStorage.setItem('datoNombre',' ');
            
        }

    })
}

mostrarNombre();