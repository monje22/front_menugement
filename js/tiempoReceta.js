const nuevaImg = async() =>{
    const server = "https://aqueous-journey-05187.herokuapp.com/receta/getRecetas";
    const response = await fetch(server);

    const {rows} = await response.json();
    return rows;
}

const mostrarImg = async function(){
    const contImg = document.getElementById("adminImg");
    const imagenes =  await nuevaImg();
    const codigo = 4;

    imagenes.map(function (element){
        let tiempo = element.TIEMPOPREP;
        let pos = tiempo.length;
        let bandera = true;

        while(tiempo[pos] != " " && bandera){
            tiempo = tiempo.substring(0,pos);
            pos = pos-1;
        }

        if(codigo == 1){
        if(tiempo < 15){
        /*sessionStorage.getItem('categoriaDeReceta')*/
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
        }
        }

        if(codigo == 2){
            if(tiempo >= 15 && tiempo < 30){
            /*sessionStorage.getItem('categoriaDeReceta')*/
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
            }
            }

            if(codigo == 3){
                if(tiempo >= 30 && tiempo < 60){
                /*sessionStorage.getItem('categoriaDeReceta')*/
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
                }
                }

                if(codigo == 4){
                    if(tiempo >= 60){
                    /*sessionStorage.getItem('categoriaDeReceta')*/
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
                    }
                    }
    
    })
}

const changeHidden = (nombreDeReceta)=>{
    document.querySelector(".key-data").value = nombreDeReceta;
    sessionStorage.setItem('nombre',nombreDeReceta);
}

mostrarImg();