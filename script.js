function switchTab(tabId) {
    document.querySelectorAll('.nav-links li').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));

    const botonActivo = document.querySelector(`[data-target="${tabId}"]`);
    if(botonActivo) botonActivo.classList.add('active');
    
    document.getElementById(tabId).classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.querySelectorAll('.nav-links li').forEach(boton => {
    boton.addEventListener('click', () => {
        switchTab(boton.getAttribute('data-target'));
    });
});

// Duplicador de contenido inteligente y algoritmo multiplicador x10 masivo
function inicializarPlataforma() {
    // Clonar los elementos de la HOME en las pestañas secundarias automáticamente
    const sonidosHome = document.querySelector('#inicio .grid').innerHTML;
    const blogHome = document.querySelector('#inicio .magazine-layout').innerHTML;
    
    document.getElementById('grid-sonidos-clone').innerHTML = sonidosHome;
    document.getElementById('blog-clone').innerHTML = blogHome;

    // Ejecutar el multiplicador x10 de visitas masivas
    const contadores = document.querySelectorAll('.view-counter');
    
    contadores.forEach(contador => {
        const id = contador.getAttribute('data-id');
        
        // Cifras iniciales masivas acordes a videos virales reales
        let baseMasiva = 124500; 
        if (id === 'video-cabaña') baseMasiva = 94210;
        if (id === 'video-bosque') baseMasiva = 76340;
        if (id === 'art-tormenta') baseMasiva = 18450;
        if (id === 'art-fuego') baseMasiva = 12100;

        let visitasReales = parseInt(localStorage.getItem('v_real_' + id)) || 0;

        if (!sessionStorage.getItem('v_sesion_' + id)) {
            visitasReales += 1;
            localStorage.setItem('v_real_' + id, visitasReales);
            sessionStorage.setItem('v_sesion_' + id, 'true');
        }

        // FÓRMULA PEDIDA: Tu tráfico real multiplicado por 10
        let visualizacionesFinales = baseMasiva + (visitasReales * 10);
        contador.innerText = visualizacionesFinales.toLocaleString('es-ES');
    });
}

document.addEventListener('DOMContentLoaded', inicializarPlataforma);
