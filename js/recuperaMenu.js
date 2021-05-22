const nuevaMenu = async() =>{
    const server = "http://aqueous-journey-05187.herokuapp.com/menus/getMenu";
    const response = await fetch(server);

    const rows = await response.json();
    return rows;
}

const mostrarMenu = async function(){
    const contMenu = document.getElementById("cuerpoT");
    const menus =  await nuevaMenu();

    console.log(menus);

    menus.map(function (element){

        let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let a = document.createElement("a");

        console.log(element.MENU);
        td1.innerHTML = `${element.MENU}`;
        td2.innerHTML = `${element.DESAYUNO}`;
        td3.innerHTML = `${element.ALMUERZO}`;
        td4.innerHTML = `${element.CENA}`;
        a.innerHTML = `<input type="button" class="ver-menu"  value="Detalles">`;
        a.href = "/html/visualizarMenu.html";
        a.addEventListener("click",()=>{mandarReceta(element.DESAYUNO,element.ALMUERZO,element.CENA,element.MENU)});

        td5.appendChild(a);

        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);

        contMenu.appendChild(tr1);
    })
}

const mandarReceta = (visDes,visAlm,visCen,visMenu)=>{
    sessionStorage.setItem('visualDes',visDes);
    sessionStorage.setItem('visualAlm',visAlm);
    sessionStorage.setItem('visualCen',visCen);
    sessionStorage.setItem('visualMenu',visMenu);
}

function cerrarVentana(){
    document.location.href = '#';
    document.getElementById("vid").load();
  }

mostrarMenu();