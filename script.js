// 1. Smooth Navigation & Dynamic Interface System
function switchTab(tabId) {
    document.querySelectorAll('.nav-links li').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));

    const activeBton = document.querySelector(`[data-target="${tabId}"]`);
    if(activeBton) activeBton.classList.add('active');
    
    document.getElementById(tabId).classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Trigger scroll animations upon tab switching
    handleScrollAnimations();
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
        if (id === 'video-cabaña') baseMasiva = 112450;
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

    // Initialize Scroll Animations Setup
    handleScrollAnimations();
}

// 3. Dynamic Native Scroll Animations Engine (AOS Mirror)
function handleScrollAnimations() {
    const animatables = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, {
        threshold: 0.05 // Triggers animation as soon as 5% of the element enters the screen
    });

    animatables.forEach(el => observer.observe(el));
}

// Global Start
document.addEventListener('DOMContentLoaded', initializePlatform);
window.addEventListener('scroll', handleScrollAnimations);
