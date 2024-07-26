function scroll_left(gridId) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.scrollBy({
            left: -300, // Ajusta esta cantidad según el ancho de tus elementos
            behavior: 'smooth'
        });
    } else {
        console.error(`No se encontró el elemento con ID: ${gridId}`);
    }
}

function scroll_right(gridId) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.scrollBy({
            left: 300, // Ajusta esta cantidad según el ancho de tus elementos
            behavior: 'smooth'
        });
    } else {
        console.error(`No se encontró el elemento con ID: ${gridId}`);
    }
}

function toggleImages() {
    const items = document.querySelectorAll('.producto-item');
    
    items.forEach(item => {
        const imgFrente = item.querySelector('.img-frente');
        const imgDetras = item.querySelector('.img-detras');
        
        if (imgFrente && imgDetras) {
            setInterval(() => {
                if (imgFrente.style.opacity == 0) {
                    imgFrente.style.opacity = 1;
                    imgDetras.style.opacity = 0;
                } else {
                    imgFrente.style.opacity = 0;
                    imgDetras.style.opacity = 1;
                }
            }, 5000); // Cambia cada 3 segundos
        }
    });
}
// Llama a la función para iniciar el intercambio de imágenes
toggleImages();


function updateNavButtons() {
    const containers = document.querySelectorAll('.producto-grid');
    
    containers.forEach(container => {
        const leftButton = container.parentElement.querySelector('.nav-button.left');
        const rightButton = container.parentElement.querySelector('.nav-button.right');

        // Verifica si el contenedor se puede desplazar horizontalmente
        if (container.scrollWidth > container.clientWidth) {
            // Muestra los botones si el contenido se puede desplazar
            leftButton.classList.remove('hidden');
            rightButton.classList.remove('hidden');
        } else {
            // Oculta los botones si el contenido no se puede desplazar
            leftButton.classList.add('hidden');
            rightButton.classList.add('hidden');
        }
    });
}

// Llama a la función cuando la página se carga y cuando se redimensiona la ventana
document.addEventListener('DOMContentLoaded', updateNavButtons);
window.addEventListener('resize', updateNavButtons);

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('producto-modal');
    const closeButton = modal.querySelector('.close-button');

    document.querySelectorAll('.producto-item').forEach(item => {
        item.addEventListener('click', function() {
            const nombre = this.querySelector('p').textContent;
            const imagenSrc = this.querySelector('.img-frente').src;
            const descripcion = 'Descripción del producto'; // Agregar descripción según sea necesario
            const precio = '$20'; // Agregar precio según sea necesario

            document.getElementById('modal-producto-nombre').textContent = nombre;
            document.getElementById('modal-producto-imagen').src = imagenSrc;
            document.getElementById('modal-producto-descripcion').textContent = descripcion;
            document.getElementById('modal-producto-precio').textContent = precio;

            modal.classList.remove('hidden');
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
