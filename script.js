let currentPage = 1;  // Página inicial
const totalPages = 12; // Total de páginas
const pages = document.querySelectorAll('.page'); // Obtener todas las páginas
const prevArrow = document.querySelector('.arrow-left');
const nextArrow = document.querySelector('.arrow-right');

// Función para cambiar las clases de las páginas
function changePage() {
    pages.forEach(page => {
        page.classList.remove('active', 'prev', 'next'); // Eliminar clases
    });

    if (currentPage > 1) {
        pages[currentPage - 2].classList.add('prev'); // Página anterior
    }
    if (currentPage < totalPages) {
        pages[currentPage].classList.add('next'); // Página siguiente
    }

    pages[currentPage - 1].classList.add('active'); // Página actual
}

// Control de flechas
prevArrow.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--; // Retroceder una página
        changePage(); // Actualizar la página
    }
});

nextArrow.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++; // Avanzar una página
        changePage(); // Actualizar la página
    }
});

// Inicializamos con la primera página
changePage();
