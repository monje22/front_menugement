const nuevaCar = async() =>{
    const server = "https://aqueous-journey-05187.herokuapp.com/receta/getRecetas";
    const response = await fetch(server);

    const {rows} = await response.json();
    return rows;
}

const mostrarCar = async function(){
    const contCar1 = document.getElementById("carDes");
    const contCar2 = document.getElementById("carAlm");
    const contCar3 = document.getElementById("carCen");
    const imagenes =  await nuevaCar();

    imagenes.map(function (element){

        let a = document.createElement("a");

        a.className = "carousel-item";
        a.href = "#";
        let ruta= `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;

        a.innerHTML = `<img src="${ruta}" width="180px" height="180px">`

        if(element.CATEGORIA == "Desayuno"){
            a.addEventListener("click",()=>{changeHidden1(element.ID_RECETA)});
            contCar1.appendChild(a);
        }else{
            if(element.CATEGORIA == "Almuerzo"){
                a.addEventListener("click",()=>{changeHidden2(element.ID_RECETA)});
                contCar2.appendChild(a);
            }else{
                a.addEventListener("click",()=>{changeHidden3(element.ID_RECETA)});
                contCar3.appendChild(a);
            }
        }
    })
}

const changeHidden1 = (IDReceta)=>{
    document.querySelector("#key-data-des").value = IDReceta;
    //sessionStorage.setItem('nombre',nombreDeReceta);
}

const changeHidden2 = (IDReceta)=>{
    document.querySelector("#key-data-alm").value = IDReceta;
    //sessionStorage.setItem('nombre',nombreDeReceta);
}

const changeHidden3 = (IDReceta)=>{
    document.querySelector("#key-data-cen").value = IDReceta;
    //sessionStorage.setItem('nombre',nombreDeReceta);
}

mostrarCar();

/*var pagina = document.getElementById("cargar");

pagina.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });*/