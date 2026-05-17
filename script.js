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

    setInterval(() => {
        const ticker = document.getElementById('live-minutes');
        if (ticker) {
            let current = parseInt(ticker.innerText.replace(/,/g, ''));
            current += Math.floor(Math.random() * 4) + 1;
            ticker.innerText = current.toLocaleString('en-US');
        }
    }, 2500);

    handleScrollAnimations();
    // Arrancar la simulación orgánica de agua líquida
    startWaterSimulation();
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

// 🌊 5. REALISTIC MATHEMATICAL LIQUID WATER INTERACTIVE ENGINE (Cero Polígonos)
function startWaterSimulation() {
    const canvas = document.getElementById('water-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
    });

    let time = 0;

    function animateWater() {
        time += 0.003; // Velocidad del fluido marino
        ctx.fillStyle = '#020307'; // Fondo del abismo profundo
        ctx.fillRect(0, 0, width, height);

        // Crear mapa de ondas de luz cruzadas (Simula cáusticas reales del agua)
        for (let x = 0; x < width; x += 40) {
            for (let y = 0; y < height; y += 40) {
                // Algoritmo de deformación de ondas senoidales tridimensionales
                let wave1 = Math.sin(x * 0.005 + time) * Math.cos(y * 0.005 + time);
                let wave2 = Math.sin(y * 0.003 - time * 1.5) * Math.cos(x * 0.004 + time * 0.8);
                let noise = (wave1 + wave2) * 0.5;

                if (noise > 0.1) {
                    // Gradiente de color según la intensidad del oleaje matemático
                    let alpha = (noise - 0.1) * 0.28;
                    
                    // Alternancia fluida entre Electric Teal (Cian) y un sutil Púrpura Marino
                    let r = Math.floor(45 + noise * 40);
                    let g = Math.floor(212 - noise * 60);
                    let b = Math.floor(191 + noise * 50);

                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

                    // Dibujar nodos de luz fluidos hiperdifuminados mediante círculos suaves superpuestos
                    ctx.beginPath();
                    ctx.arc(x + noise * 30, y + wave1 * 30, 90 + noise * 40, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        requestAnimationFrame(animateWater);
    }

    animateWater();
}

// Global Core Triggers
document.addEventListener('DOMContentLoaded', () => {
    initializePlatform();
    setTimeout(handleScrollAnimations, 200);
});

window.addEventListener('scroll', handleScrollAnimations);
