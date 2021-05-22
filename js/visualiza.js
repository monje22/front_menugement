const nuevaVis = async() =>{
    const server = "https://aqueous-journey-05187.herokuapp.com/receta/getRecetas";
    const response = await fetch(server);

    const {rows} = await response.json();
    return rows;
}

const mostrarVis = async function(){

    const visual =  await nuevaVis();
    
    let i1 = document.getElementById("img1");
    let i2 = document.getElementById("img2");
    let i3 = document.getElementById("img3");

    let par1 = document.getElementById("p1");
    let par2 = document.getElementById("p2");
    let par3 = document.getElementById("p3");

    let parTit = document.getElementById("titMenu");

    parTit.innerHTML = `${sessionStorage.getItem('visualMenu')}`;

    visual.map(function (element){
        
        if(sessionStorage.getItem('visualDes') == element.NOMBRERECETA){
            i1.src = `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;
            par1.innerHTML = `${element.NOMBRERECETA}`.toUpperCase();
        }

        if(sessionStorage.getItem('visualAlm') == element.NOMBRERECETA){
            i2.src = `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;
            par2.innerHTML = `${element.NOMBRERECETA}`.toUpperCase();
        }

        if(sessionStorage.getItem('visualCen') == element.NOMBRERECETA){
            i3.src = `https://aqueous-journey-05187.herokuapp.com/imagenes/imagen/${element.IMAGEN}`;
            par3.innerHTML = `${element.NOMBRERECETA}`.toUpperCase();
        }
    })
}
function cerrarVentana(){
    document.location.href = '#';
    document.getElementById("vid").load();
  }

mostrarVis();