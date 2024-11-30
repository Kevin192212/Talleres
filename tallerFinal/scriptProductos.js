document.addEventListener('DOMContentLoaded', function() {
    fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            return response.json();
        })
        .then(data => {
            const selectElement = document.getElementById('productos');
            const productosDisponibles = data.filter(producto => producto.disponibilidad);

            productosDisponibles.forEach(producto => {
                const option = document.createElement('option');
                option.value = producto.id;
                option.textContent = producto.nombre;
                selectElement.appendChild(option);
            });

            selectElement.addEventListener('change', function() {
                const selectedId = parseInt(this.value);
                const productoSeleccionado = productosDisponibles.find(p => p.id === selectedId);
                const precioInput = document.getElementById('precio');
                precioInput.value = productoSeleccionado ? productoSeleccionado.precio.toFixed(2) : '';
            });
        })
        .catch(error => console.error('Error al leer el archivo JSON:', error));
}); 

