// Función para animar elementos al hacer scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Ajusta qué tan pronto aparece el elemento

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Opcional: Si quieres que desaparezcan al subir de nuevo, descomenta la linea de abajo
            // reveals[i].classList.remove("active"); 
        }
    }
}

// Escuchar el scroll
window.addEventListener("scroll", reveal);

document.addEventListener('DOMContentLoaded', () => {
    // Activar animaciones iniciales
    reveal();

    const isLoginPage = window.location.pathname.includes('login.html');
    const isIndexPage = !isLoginPage; // Asumimos que si no es login, es index (o ruta base)

    const loggedUser = localStorage.getItem('usuario_marketing');

    // --- LÓGICA DE LOGIN ---
    if (isLoginPage) {
        if (loggedUser) {
            window.location.href = 'index.html'; // Si ya estás logueado, fuera de aquí
        }

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const user = document.getElementById('username').value;
                
                // Guardar usuario
                localStorage.setItem('usuario_marketing', user);
                
                // Efecto visual antes de redirigir (opcional)
                const btn = e.target.querySelector('button');
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            });
        }
    }

    // --- LÓGICA DE INDEX ---
    if (isIndexPage) {
        const userDisplay = document.getElementById('user-display');
        const loginLink = document.getElementById('login-link');
        const logoutBtn = document.getElementById('logout-btn');

        if (loggedUser) {
            userDisplay.textContent = 'Hola, ' + loggedUser;
            if(loginLink) loginLink.style.display = 'none';
            if(logoutBtn) logoutBtn.style.display = 'inline';
        } else {
            userDisplay.textContent = 'Invitado';
            if(loginLink) loginLink.style.display = 'inline';
            if(logoutBtn) logoutBtn.style.display = 'none';
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if(confirm('¿Cerrar sesión?')) {
                    localStorage.removeItem('usuario_marketing');
                    location.reload();
                }
            });
        }
    }
});