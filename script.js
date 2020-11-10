class articulo {
    constructor (modelo, año, acabado, precio, imagen, id) {
        this.modelo = modelo;
        this.año = año;
        this.acabado = acabado;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
    }
}

let gtr1 = new articulo ("Firebird", "2020", "Tobacco burst", "1000", "assets/firebird.png", "gtr1");
let gtr2 = new articulo ("Les Paul Standard 60s", "2017", "Tobacco burst", "1500", "assets/les_paul.png", "gtr2");
let gtr3 = new articulo ("SG", "2019", "Cherry", "850", "assets/sg.png", "gtr3");
let gtr4 = new articulo ("Hummingbird", "2012", "Cherry burst", "1250", "assets/hummingbird.png", "gtr4");

let array = [gtr1, gtr2, gtr3, gtr4];
let carrito = [];

function contenidoSection2 () {
    for (let i=0; i < array.length; i++) {
    
    /* ---- DIV CONTENEDOR ---- */
    
    let div = document.createElement("div");
    div.className = "container";
    
    /* ---- DIV CONTENEDOR PRODUCTOS ---- */

    // let div2 = document.createElement("div");
    // div2.className = "containerProducto";

    let modelo = document.createElement("h2");
    modelo.className = "h2Style";
    modelo.innerHTML = (`Modelo: ${array[i].modelo}`);
    div.appendChild(modelo);

    let año = document.createElement("p");
    año.className = "parrafo";
    año.innerHTML = (`Año de fabricación: ${array[i].año}`);
    div.appendChild(año);

    let acabado = document.createElement("p");
    acabado.className = "parrafo";
    acabado.innerHTML = (`Acabado: ${array[i].acabado}`);
    div.appendChild(acabado);

    let precio = document.createElement("p");
    precio.className = "parrafo";
    precio.innerHTML = (`Precio: usd$${array[i].precio}`);
    div.appendChild(precio);
    
    let div2 = document.createElement("div");
    div2.className = "imgDiv";
    div.appendChild(div2);

    let imagen = document.createElement("img");
    imagen.src = array[i].imagen;
    imagen.className = "imgStyle";    
    div2.appendChild(imagen);

    let btn = document.createElement("button");
    
    btn.className = "btnAddCartStyle";
    btn.innerHTML = "Agregar al carrito";
    div.appendChild(btn);

    // div.appendChild(div2);
    
    let section = document.getElementById("section2");
    section.appendChild(div);
    
    }
    
}    

contenidoSection2();
/* ---- DIV IMGS ---- */




