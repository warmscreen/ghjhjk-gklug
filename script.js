// 1. Tab Switching Engine
function switchTab(tabId) {
    document.querySelectorAll('.nav-links li').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));

    const activeBton = document.querySelector(`[data-target="${tabId}"]`);
    if(activeBton) activeBton.classList.add('active');
    
    document.getElementById(tabId).classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    setTimeout(handleScrollAnimations, 100);
}

document.querySelectorAll('.nav-links li').forEach(boton => {
    boton.addEventListener('click', () => {
        switchTab(boton.getAttribute('data-target'));
    });
});

// 2. Interactive FAQ Accordion Trigger
function toggleFaq(element) {
    element.classList.toggle('open');
}

// 3. Platform Setup & x10 Counter System
function initializePlatform() {
    const sonidosHome = document.querySelector('#inicio .grid').innerHTML;
    const blogHome = document.querySelector('#inicio .magazine-grid').innerHTML;
    
    document.getElementById('grid-sonidos-clone').innerHTML = sonidosHome;
    document.getElementById('blog-clone').innerHTML = blogHome;

    // Run view counter logic
    const contadores = document.querySelectorAll('.view-counter');
    contadores.forEach(counter => {
        const id = counter.getAttribute('data-id');
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

        let visualizacionesFinales = baseMasiva + (visitasReales * 10);
        counter.innerText = visualizacionesFinales.toLocaleString('en-US');
    });

    // Run Real-Time Live Ticker Simulation
    setInterval(() => {
        const ticker = document.getElementById('live-minutes');
        if (ticker) {
            let current = parseInt(ticker.innerText.replace(/,/g, ''));
            current += Math.floor(Math.random() * 4) + 1;
            ticker.innerText = current.toLocaleString('en-US');
        }
    }, 2500);

    handleScrollAnimations();
}

// 4. ELASTIC INTERSECTION OBSERVER FOR CARDS
function handleScrollAnimations() {
    const animatables = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;
    
    animatables.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.90) {
            el.classList.add('reveal');
        }
    });
}

// Global Core Triggers
document.addEventListener('DOMContentLoaded', () => {
    initializePlatform();
    setTimeout(handleScrollAnimations, 200);
});

window.addEventListener('scroll', handleScrollAnimations);
