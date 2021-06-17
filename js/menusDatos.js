const subirMenu = async(h1,h2,h3,nm)=> {
    let url = "https://aqueous-journey-05187.herokuapp.com/menus/nuevoMenu";
    let obj = {
        NOMBREMENU: nm,
        IDDESAYUNO: h1,
        IDALMUERZO: h2,
        IDCENA: h3
    }

    return await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(obj)
    });
    
}


let boton = document.getElementById("botCrear");
boton.addEventListener("submit", (e)=>{

    e.preventDefault();

    let nomHid = document.getElementById("nomMenu").value;
    let hid1 = document.getElementById("key-data-des").value;
    let hid2 = document.getElementById("key-data-alm").value;
    let hid3 = document.getElementById("key-data-cen").value;

    console.log(hid1,hid2,hid3,nomHid);
    subirMenu(hid1,hid2,hid3,nomHid).then(async (res) => {
        let {errors} = await res.json();
        
        if(errors){
            alert(errors[0].msg);
            window.location.href = "ProgMenu.html";
        }else{
<<<<<<< HEAD
            console.log("todo OK");
=======
            alert("Menú creado exitosamente");
>>>>>>> acdcfb3a634e92a6bc713a38683a4f852578a8ae
            window.location.href = "menus.html";
        }
    });
});
