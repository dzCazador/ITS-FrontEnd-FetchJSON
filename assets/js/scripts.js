
const container = document.getElementById('contenedor');
fetch('./docs/HarryPotter.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(estudiante => {
            const estudianteDiv = document.createElement('div');
            estudianteDiv.classList.add('estudiante');
            estudianteDiv.innerHTML = `
                <h2>id:${estudiante.id}</h2>
                <h2>${estudiante.nombre}</h2>
                <p>Casa: ${estudiante.casa}</p>
            `;
            container.appendChild(estudianteDiv);
        });
    })
    .catch(error => console.error('Error al leer el archivo:', error));
