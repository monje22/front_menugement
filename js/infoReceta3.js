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

    const nombreRec2 = document.getElementById("nomRec2");
    const IngrRec2 = document.getElementById("ingreRec2");
    const DescripRec2 = document.getElementById("DescRec2");
    const TiempoRec2 = document.getElementById("TiemRec2");
    const CateRec2 = document.getElementById("CatRec2");
    const ImagenRec2 = document.getElementById("ImagRec2");

    const nombreRec3 = document.getElementById("nomRec3");
    const IngrRec3 = document.getElementById("ingreRec3");
    const DescripRec3 = document.getElementById("DescRec3");
    const TiempoRec3 = document.getElementById("TiemRec3");
    const CateRec3 = document.getElementById("CatRec3");
    const ImagenRec3 = document.getElementById("ImagRec3");


    const receta =  await nuevaReceta();

    receta.map(function (element){

        if(element.NOMBRERECETA == sessionStorage.getItem('visualDes')){         
<<<<<<< HEAD
            nombreRec.innerHTML = element.NOMBRERECETA;

            console.log(element.INGREDIENTES);
            let parafo = document.createElement('p');
            parafo.innerHTML = element.INGREDIENTES.replace(/\n/g, '<br>');
            IngrRec.append(parafo);

            let parafo1 = document.createElement('p');
            parafo1.innerHTML = element.DESCRIPCIONPREPARACION.replace(/\n/g, '<br>');
=======
            nombreRec.innerHTML = (`${element.NOMBRERECETA}`).charAt(0).toUpperCase() + `${element.NOMBRERECETA}`.toLowerCase().slice(1);

            let parafo = document.createElement('p');
            parafo.innerHTML = element.INGREDIENTES.toLowerCase().replace(/\n/g, '<br>');
            IngrRec.append(parafo);

            let parafo1 = document.createElement('p');
            parafo1.innerHTML = element.DESCRIPCIONPREPARACION.toLowerCase().replace(/\n/g, '<br>');
>>>>>>> acdcfb3a634e92a6bc713a38683a4f852578a8ae
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


        if(element.NOMBRERECETA == sessionStorage.getItem('visualAlm')){         
<<<<<<< HEAD
            nombreRec2.innerHTML = element.NOMBRERECETA;

            console.log(element.INGREDIENTES);
            let parafo = document.createElement('p');
            parafo.innerHTML = element.INGREDIENTES.replace(/\n/g, '<br>');
            IngrRec2.append(parafo);

            let parafo1 = document.createElement('p');
            parafo1.innerHTML = element.DESCRIPCIONPREPARACION.replace(/\n/g, '<br>');
=======
            nombreRec2.innerHTML = (`${element.NOMBRERECETA}`).charAt(0).toUpperCase() + `${element.NOMBRERECETA}`.toLowerCase().slice(1);

            let parafo = document.createElement('p');
            parafo.innerHTML = element.INGREDIENTES.toLowerCase().replace(/\n/g, '<br>');
            IngrRec2.append(parafo);

            let parafo1 = document.createElement('p');
            parafo1.innerHTML = element.DESCRIPCIONPREPARACION.toLowerCase().replace(/\n/g, '<br>');
>>>>>>> acdcfb3a634e92a6bc713a38683a4f852578a8ae
            DescripRec2.append(parafo1);

            if(element.DIFICULTAD == 1){
                document.getElementById("estrella12").src = "/Image_Folder/estrellaLlena.png";
            }else{
                if(element.DIFICULTAD == 2){
                    document.getElementById("estrella12").src = "/Image_Folder/estrellaLlena.png";
                    document.getElementById("estrella22").src = "/Image_Folder/estrellaLlena.png";
                }else{
                    if(element.DIFICULTAD == 3){
                        document.getElementById("estrella12").src = "/Image_Folder/estrellaLlena.png";
                        document.getElementById("estrella22").src = "/Image_Folder/estrellaLlena.png";
                        document.getElementById("estrella32").src = "/Image_Folder/estrellaLlena.png";
                    }else{
                        if(element.DIFICULTAD == 4){
                            document.getElementById("estrella12").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella22").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella32").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella42").src = "/Image_Folder/estrellaLlena.png";
                        }else{
                            document.getElementById("estrella12").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella22").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella32").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella42").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella52").src = "/Image_Folder/estrellaLlena.png";
                        }
                    }

                }
            }

            TiempoRec2.innerHTML = element.TIEMPOPREP;
            CateRec2.innerHTML = element.CATEGORIA;

            ImagenRec2.src = `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;
        }


        if(element.NOMBRERECETA == sessionStorage.getItem('visualCen')){         
<<<<<<< HEAD
            nombreRec3.innerHTML = element.NOMBRERECETA;

            console.log(element.INGREDIENTES);
            let parafo = document.createElement('p');
            parafo.innerHTML = element.INGREDIENTES.replace(/\n/g, '<br>');
            IngrRec3.append(parafo);

            let parafo1 = document.createElement('p');
            parafo1.innerHTML = element.DESCRIPCIONPREPARACION.replace(/\n/g, '<br>');
=======
            nombreRec3.innerHTML = (`${element.NOMBRERECETA}`).charAt(0).toUpperCase() + `${element.NOMBRERECETA}`.toLowerCase().slice(1);

            let parafo = document.createElement('p');
            parafo.innerHTML = element.INGREDIENTES.toLowerCase().replace(/\n/g, '<br>');
            IngrRec3.append(parafo);

            let parafo1 = document.createElement('p');
            parafo1.innerHTML = element.DESCRIPCIONPREPARACION.toLowerCase().replace(/\n/g, '<br>');
>>>>>>> acdcfb3a634e92a6bc713a38683a4f852578a8ae
            DescripRec3.append(parafo1);

            if(element.DIFICULTAD == 1){
                document.getElementById("estrella13").src = "/Image_Folder/estrellaLlena.png";
            }else{
                if(element.DIFICULTAD == 2){
                    document.getElementById("estrella13").src = "/Image_Folder/estrellaLlena.png";
                    document.getElementById("estrella23").src = "/Image_Folder/estrellaLlena.png";
                }else{
                    if(element.DIFICULTAD == 3){
                        document.getElementById("estrella13").src = "/Image_Folder/estrellaLlena.png";
                        document.getElementById("estrella23").src = "/Image_Folder/estrellaLlena.png";
                        document.getElementById("estrella33").src = "/Image_Folder/estrellaLlena.png";
                    }else{
                        if(element.DIFICULTAD == 4){
                            document.getElementById("estrella13").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella23").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella33").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella43").src = "/Image_Folder/estrellaLlena.png";
                        }else{
                            document.getElementById("estrella13").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella23").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella33").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella43").src = "/Image_Folder/estrellaLlena.png";
                            document.getElementById("estrella53").src = "/Image_Folder/estrellaLlena.png";
                        }
                    }

                }
            }

            TiempoRec3.innerHTML = element.TIEMPOPREP;
            CateRec3.innerHTML = element.CATEGORIA;

            ImagenRec3.src = `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;
        }
        
        
    })
}

mostrarReceta();