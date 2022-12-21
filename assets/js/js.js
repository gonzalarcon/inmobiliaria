
const boton_buscar = () => {
    const cuartos = document.querySelector("#cuartos").value;
    const metrosDesde = document.querySelector("#desde").value;
    const metrosHasta = document.querySelector("#hasta").value;
        if (cuartos && metrosDesde && metrosHasta){
            mostrar(cuartos, metrosDesde, metrosHasta);
        } else {
            alert("Debes llenar todos los campos");
        }
}

const mostrar = (Rcuartos ="*", RmetrosDesde ="*", RmetrosHasta="*") => {
    let prp = document.querySelector("#Propiedades");
    let html="";
    let cantidad = 0;


  for(let propiedad of propiedadesJSON){
    if(
      (propiedad.rooms == Rcuartos &&
      propiedad.m >= RmetrosDesde &&
      propiedad.m <= RmetrosHasta) || 
      (Rcuartos=="*" && RmetrosDesde=="*" && RmetrosHasta=="*")
    ){
    html+= `
    <div class="propiedad">
    <div class="img" style="background-image: url('${propiedad.src}')"></div>
    <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
    </div>`
    cantidad++; 
  }
  }
    prp.innerHTML=html
    document.querySelector("#total").innerHTML=cantidad;
  
}

mostrar();