// 1. Tab Navigation System
function switchTab(tabId) {
    document.querySelectorAll('.nav-links li').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));

    const activeBton = document.querySelector(`[data-target="${tabId}"]`);
    if(activeBton) activeBton.classList.add('active');
    
    document.getElementById(tabId).classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Recalcular animaciones al cambiar de pestaña
    setTimeout(handleScrollAnimations, 100);
}

document.querySelectorAll('.nav-links li').forEach(boton => {
    boton.addEventListener('click', () => {
        switchTab(boton.getAttribute('data-target'));
    });
});

// 2. High-Fidelity Content Cloner & x10 Visitor Multiplier Engine
function initializePlatform() {
    const sonidosHome = document.querySelector('#inicio .grid').innerHTML;
    const blogHome = document.querySelector('#inicio .magazine-grid').innerHTML;
    
    document.getElementById('grid-sonidos-clone').innerHTML = sonidosHome;
    document.getElementById('blog-clone').innerHTML = blogHome;

    const contadores = document.querySelectorAll('.view-counter');
    
    contadores.forEach(counter => {
        const id = counter.getAttribute('data-id');
        
        // Massive viral traffic floor values
        let baseMasiva = 148300; 
        if (id === 'video-cabaña') baseMasiva = 92450;
        if (id === 'video-bosque') baseMasiva = 89120;
        if (id === 'art-tormenta') baseMasiva = 24500;
        if (id === 'art-fuego') baseMasiva = 16300;

        let visitasReales = parseInt(localStorage.getItem('v_real_' + id)) || 0;

        if (!sessionStorage.getItem('v_sesion_' + id)) {
            visitasReales += 1;
            localStorage.setItem('v_real_' + id, visitasReales);
            sessionStorage.setItem('v_sesion_' + id, 'true');
        }

        // REQUIRED FORMULA: Real unique hits multiplied x10
        let visualizacionesFinales = baseMasiva + (visitasReales * 10);
        counter.innerText = visualizacionesFinales.toLocaleString('en-US');
    });

    // Activar el motor de animaciones inmediatamente tras cargar la página
    handleScrollAnimations();
}

// 3. FORCE-LOAD SCROLL ANIMATION ENGINE (Anti-bug Vercel)
function handleScrollAnimations() {
    const animatables = document.querySelectorAll('.scroll-animate');
    
    animatables.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Si el elemento entra en el 85% de la pantalla visible, se anima
        if (elementTop < windowHeight * 0.88) {
            el.classList.add('reveal');
        }
    });
}

// Global Triggers
document.addEventListener('DOMContentLoaded', () => {
    initializePlatform();
    // Forzar una ejecución inicial
    setTimeout(handleScrollAnimations, 200);
});

window.addEventListener('scroll', handleScrollAnimations);
