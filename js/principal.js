const nuevaImg = async() =>{
    const server = "https://aqueous-journey-05187.herokuapp.com/receta/getRecetas";
    const response = await fetch(server);

    const {rows} = await response.json();
    return rows;
}

const mostrarImg = async function(){
    const contImg = document.getElementById("adminImg");
    const imagenes =  await nuevaImg();

    imagenes.map(function (element){
        
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let context = document.createElement("div");
        context.className = "container";
        contImg.appendChild(context);

        div1.innerHTML = `<h3><a href="/html/receta.html">${element.NOMBRERECETA}</a></h3>`;
        div1.addEventListener("click",()=>{changeHidden(element.NOMBRERECETA)});
        img.src = `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;
        img.className = "item-img";
        div1.className = "content";
        context.appendChild(img);
        context.appendChild(div1);
    })
}

const changeHidden = (nombreDeReceta)=>{
    document.querySelector(".key-data").value = nombreDeReceta;
    sessionStorage.setItem('nombre',nombreDeReceta);
}

mostrarImg();