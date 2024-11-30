document.addEventListener('DOMContentLoaded', function() {
    fetch('empleados.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            return response.json();
        })
        .then(data => {
            const selectElement = document.getElementById('empleados');
            const informacionEmpleado = document.getElementById('informacionEmpleado');
            const nombre = document.getElementById('nombre');
            const puesto = document.getElementById('puesto');
            const salario = document.getElementById('salario');
            const ubicacion = document.getElementById('ubicacion');

            data.forEach(empleado => {
                const option = document.createElement('option');
                option.value = empleado.id;
                option.textContent = empleado.nombre;
                selectElement.appendChild(option);
            });

            selectElement.addEventListener('change', function() {
                const selectedId = parseInt(this.value);
                const empleadoSeleccionado = data.find(e => e.id === selectedId);
            
                if (empleadoSeleccionado) {
                    nombre.textContent = empleadoSeleccionado.nombre;
                    puesto.textContent = empleadoSeleccionado.puesto;
                    salario.textContent = empleadoSeleccionado.salario.toFixed(2);
                    ubicacion.textContent = empleadoSeleccionado.ubicacion;
                    informacionEmpleado.classList.remove('d-none');
                } else {
                    informacionEmpleado.classList.add('d-none');
                }
            });
        })
        .catch(error => console.error('Error al leer el archivo JSON:', error));
});