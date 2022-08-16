function itemsEnCarrito() {
  const elegidos = itemsElegidosCarritoLS();

  let contenido = "";

  if (elegidos.length == 0) {
    contenido = `<div class="alert alert-secondary text-center" role="alert"> Tu Carrito esta Vacio !!!</div>`;
  } else {
    contenido += `<table class="table table-hover table-borderless bg-white">
      <thead>
      <tr class="bg-dark">
        <th class="text-white text-center">PRODUCTO</th>
        <th class="text-white text-center">CANTIDAD </th>
        <th class="text-white text-center">PRECIO</th>
      </tr>
    </thead>`;
    elegidos.forEach((vino) => {
      contenido += `
        <tbody>
          <tr>
            <td>${vino.nombre}</td>
            <td class=" container-tabla text-center">${vino.cantidad}</td>
            <td class="text-center">$ ${(vino.precio * vino.cantidad).toFixed(2)}</td>
          </tr>
        </tbody>`;
    });

    contenido += `<tfoot class="bg-dark">
      <th class="text-white bg-dark">TOTAL A PAGAR</th>
      <th class="text-white bg-dark"></th>
      <th class="text-white bg-dark text-center">$ ${descuento().toFixed(2)} </th>
    </tfoot>
    <tfoot class="bg-dark">
      <th class="text-white bg-dark">TOTAL</th>
      <th class="text-white bg-dark"></th>
      <th class="text-white bg-dark text-center">$ ${totalCompra().toFixed(2)} </th>
    </tfoot>
    <tfoot class="bg-dark">
      <th class="text-white bg-dark">DESCUENTOS OBTENIDOS</th>
      <th class="text-white bg-dark"></th>
      <th class="text-white bg-dark text-center">$ ${(totalCompra () - descuento()).toFixed(2)} </th>
    </tfoot></table>`;
    contenido += `<button type="button" class="btn btn-success">FINALIZAR COMPRA</button>`;
  }
  document.getElementById("productos").innerHTML = contenido;
}

itemsEnCarrito();
botonCarrito();
vaciarCarrito();