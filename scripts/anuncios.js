document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const elementosParaDesenfocar = document.querySelectorAll('.anuncios-container, .navbar, .slider'); // Elementos que se desenfocarán

    // Manejador para "Ver más"
    document.querySelectorAll('.ver-mas').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const anuncioId = this.getAttribute('data-anuncio');

            // Ajusta el contenido del modal según el anuncio
            if (anuncioId == 1) {
                modalTitle.textContent = "Descuento en productos";
                modalText.textContent = "¡Aprovecha nuestro 50% de descuento en todos los productos durante esta temporada!";
            } else if (anuncioId == 2) {
                modalTitle.textContent = "Nueva temporada";
                modalText.textContent = "Descubre las novedades de la nueva temporada, desde equipaciones hasta eventos especiales.";
            }

            // Aplica desenfoque a los elementos de fondo
            elementosParaDesenfocar.forEach(el => el.classList.add('blur-background'));

            // Muestra el modal
            modal.classList.add('active');
        });
    });

    // Manejador para cerrar el modal
    cerrarModal.addEventListener('click', function () {
        // Quita el desenfoque de los elementos de fondo
        elementosParaDesenfocar.forEach(el => el.classList.remove('blur-background'));

        modal.classList.remove('active');
    });

    // Manejador para eliminar anuncios pequeños
    document.querySelectorAll('.cerrar-anuncio').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.anuncio').remove();
        });
    });
});