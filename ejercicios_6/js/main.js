var ventas = {
    Juana: { Aqua: 0, Emoción: 0, Alegría: 0, Frescura: 0 },
    Pedro: { Aqua: 0, Emoción: 0, Alegría: 0, Frescura: 0 }
  };
  
  function registrarVenta() {
    var vendedor = document.getElementById('vendedor').value;
    var producto = document.getElementById('producto').value;
    var cantidad = parseInt(document.getElementById('cantidad').value);
  
    if (!isNaN(cantidad)) {
      ventas[vendedor][producto] += cantidad;
      console.log('Venta registrada:', vendedor, '-', producto, '-', cantidad);
    } else {
      console.error('Error: La cantidad debe ser un valor numérico.');
    }
  }
  
  function calcularResultados() {
    var totalVentas = {
      Juana: 0,
      Pedro: 0
    };
  
    for (var vendedor in ventas) {
      for (var producto in ventas[vendedor]) {
        var cantidad = ventas[vendedor][producto];
        var precio = obtenerPrecio(producto);
        var total = cantidad * precio;
        totalVentas[vendedor] += total;
      }
    }
  
    for (var vendedor in ventas) {
      console.log('---', vendedor, '---');
      for (var producto in ventas[vendedor]) {
        var cantidad = ventas[vendedor][producto];
        console.log('Producto:', producto, '- Cantidad:', cantidad);
      }
    }
  
    var vendedorEmpleadoMes = '';
    var maxVentas = 0;
    var empate = false;
    for (var vendedor in totalVentas) {
      var ventasVendedor = totalVentas[vendedor];
      if (ventasVendedor > maxVentas) {
        vendedorEmpleadoMes = vendedor;
        maxVentas = ventasVendedor;
        empate = false;
      } else if (ventasVendedor === maxVentas) {
        empate = true;
      }
    }
  
    if (empate) {
      console.log('No se puede determinar un empleado del mes debido a un empate.');
    } else {
      console.log('Empleado del Mes:', vendedorEmpleadoMes);
    }
  }
  
  function obtenerPrecio(producto) {
    var precios = {
      Aqua: 200,
      Emoción: 180,
      Alegría: 160,
      Frescura: 150
    };
    return precios[producto];
  }
  