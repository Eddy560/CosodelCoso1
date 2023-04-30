const licencia = () => {
    let tipo = document.getElementById('tipo').value;
    if (tipo === 'car' || tipo === 'truck' || tipo === 'automovil' || tipo === 'camion') {
      document.getElementById('resultado1').textContent = 'Si requieres licencia';
    } 
    else {
      document.getElementById('resultado1').textContent = 'No requieres licencia';
    }
  }
  const mejor = () =>{
    let opcion1 = document.getElementById('opcion1').value;
    let opcion2 = document.getElementById('opcion2').value;
    if (opcion1>opcion2){
        document.getElementById('resultado2').textContent = `${opcion2} es claramente la mejor opcion`;
    }
    else {
    document.getElementById('resultado2').textContent = `${opcion1} es claramente la mejor opcion`;
  }
}

const precio = () => {
    let precio = parseFloat(document.getElementById('precio').value);
    let antiguedad = parseFloat(document.getElementById('antiguedad').value);
    let total;
    if (antiguedad < 3) {
      total = precio * .80;
    } else if (antiguedad > 10) {
      total = precio * .50;
    } else {
      total = precio * .70;
    }
    document.getElementById('resultado3').textContent = `El precio es de ${total}`;
  }