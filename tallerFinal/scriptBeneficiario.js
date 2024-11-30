document.addEventListener('DOMContentLoaded', function() {
    fetch('beneficiario.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            return response.json();
        })
        .then(beneficiarios => {
            const formBuscar = document.getElementById('formBuscar');
            const nombreInput = document.getElementById('nombreInput');
            const resultado = document.getElementById('resultado');

            formBuscar.addEventListener('submit', function(event) {
                event.preventDefault(); 

                const nombreBuscado = nombreInput.value.trim().toLowerCase();
                const beneficiarioEncontrado = beneficiarios.find(b =>
                    b.nombre.toLowerCase() === nombreBuscado
                );

                if (beneficiarioEncontrado) {
                    resultado.textContent = `Beneficiario encontrado: ${beneficiarioEncontrado.nombre}, 
                        ${beneficiarioEncontrado.edad} años, vive en ${beneficiarioEncontrado.ubicacion}.`;
                    resultado.className = 'mt-4 alert alert-success';
                } else {
                    resultado.textContent = 'Beneficiario no encontrado.';
                    resultado.className = 'mt-4 alert alert-danger';
                }

                resultado.style.display = 'block';
            });
        })
        .catch(error => console.error('Error al leer el archivo JSON:', error));
});