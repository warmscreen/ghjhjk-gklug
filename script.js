// 1. Navegación entre pestañas sin errores
document.querySelectorAll('.nav-links li').forEach(boton => {
    boton.addEventListener('click', () => {
        // Quitar activo de todos los botones y secciones
        document.querySelectorAll('.nav-links li').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));

        // Activar el seleccionado
        boton.classList.add('active');
        const targetSection = boton.getAttribute('data-target');
        document.getElementById(targetSection).classList.add('active');
        
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

// 2. Sistema Multiplicador de Visitas Seguro (Real x 10)
function controlarVisitas() {
    const contadores = document.querySelectorAll('.view-counter');
    
    contadores.forEach(contador => {
        const id = contador.getAttribute('data-id');
        
        // Creamos números base altos para simular que la web ya es viral (entre 8,000 y 15,000)
        let baseViral = id === 'video-fuego' ? 14200 : id === 'video-mar' ? 9650 : 11400;

        // Comprobamos si el usuario ya había entrado antes a la web
        let visitasRealesLocales = parseInt(localStorage.getItem('visitas_' + id)) || 0;

        // Si es una pestaña nueva, simulamos una visita real más
        if (!sessionStorage.getItem('activo_' + id)) {
            visitasRealesLocales += 1;
            localStorage.setItem('visitas_' + id, visitasRealesLocales);
            sessionStorage.setItem('activo_' + id, 'true');
        }

        // FÓRMULA SOLICITADA: Multiplicamos las visitas por 10 y se las sumamos a la base masiva
        let resultadoSimulado = baseViral + (visitasRealesLocales * 10);

        // Mostramos el número bien formateado con puntos (Ej: 14.210)
        contador.innerText = resultadoSimulado.toLocaleString('es-ES');
    });
}

// Arrancar el sistema cuando cargue la web
document.addEventListener('DOMContentLoaded', controlarVisitas);