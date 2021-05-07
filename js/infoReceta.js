const nuevaReceta = async() =>{
    const server = "https://aqueous-journey-05187.herokuapp.com/receta/getRecetas";
    const response = await fetch(server);

    const {rows} = await response.json();
    return rows;
}

const mostrarReceta = async function(){
    const nombreRec = document.getElementById("nomRec");
    const IngrRec = document.getElementById("ingreRec");
    const DescripRec = document.getElementById("DescRec");
    const TiempoRec = document.getElementById("TiemRec");
    const CateRec = document.getElementById("CatRec");
    const ImagenRec = document.getElementById("ImagRec");


    const receta =  await nuevaReceta();

    receta.map(function (element){

        if(element.NOMBRERECETA == sessionStorage.getItem('nombre')){         
            nombreRec.innerHTML = element.NOMBRERECETA;

            console.log(element.INGREDIENTES);
            let parafo = document.createElement('p');
            parafo.innerHTML = element.INGREDIENTES.replace(/\n/g, '<br>');
            IngrRec.append(parafo);

            let parafo1 = document.createElement('p');
            parafo1.innerHTML = element.DESCRIPCIONPREPARACION.replace(/\n/g, '<br>');
            DescripRec.append(parafo1);

            if(element.DIFICULTAD == 1){
                document.getElementById("estrella1").src = "/Image_Folder/estrellaLlena.png";
            }else{
                if(element.DIFICULTAD == 2){
                    document.getElementById("estrella1").src = "/Image_Folder/estrellaLlena.png";
                    document.getElementById("estrella2").src = "/Image_Folder/estrellaLlena.png";
                }else{
                    if(element.DIFICULTAD == 3){
                        document.getElementById("estrella1").src = "/Image_Folder/estrellaLlena.png";
                        document.getElementById("estrella2").src = "/Image_Folder/estrellaLlena.png";
                        document.getElementById("estrella3").src = "/Image_Folder/estrellaLlena.png";
                    }else{
                        if(element.DIFICULTAD == 4){
                            document.getElementById("estrella1").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella2").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella3").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella4").src = "/Image_Folder/estrellaLlena.png";
                        }else{
                            document.getElementById("estrella1").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella2").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella3").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella4").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella5").src = "/Image_Folder/estrellaLlena.png";
                        }
                    }

                }
            }

            TiempoRec.innerHTML = element.TIEMPOPREP;
            CateRec.innerHTML = element.CATEGORIA;

            ImagenRec.src = `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;
        }
        /*
        console.log(element.IMAGEN);
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let context = document.createElement("div");
        context.className = "container";
        contImg.appendChild(context);

        div1.innerHTML = `<h3><a href="receta.html">${element.NOMBRERECETA}</a></h3>`;
        img.src = element.IMAGEN;
        img.className = "item-img";
        div1.className = "content";
        context.appendChild(img);
        context.appendChild(div1);*/
    })
}

mostrarReceta();