// 1. Aquí guardas todas tus noticias. ¡Puedes agregar todas las que quieras!
const noticias = [
    {
        id: 0,
        titulo: "USA vs IRAN",
        imagen: "img/Donaltron.png",
        texto: "Escalada Bélica en Irán: La guerra entre Estados Unidos e Israel contra Irán entró en su cuarto día de ataques directos. El Pentágono reporta que controla gran parte del espacio aéreo iraní, mientras Donald Trump advirtió que la ofensiva durará 'todo el tiempo que sea necesario'."
    },
    {
        id: 1,
        titulo: "Tensión en Oriente Medio",
        imagen: "img/misil.png",
        texto: "Las tensiones han alcanzado un punto crítico tras los recientes movimientos militares. Expertos analizan las posibles consecuencias económicas globales y el impacto en el precio del petróleo."
    },
    {
        id: 2,
        titulo: "EE.UU. despliega buques",
        imagen: "img/buque.jpg",
        texto: "Una flota masiva ha sido enviada al Mediterráneo como medida de disuasión. El despliegue incluye portaaviones y sistemas de defensa avanzada."
    }
];

// 2. Función para mostrar una noticia específica
function verNoticia(id) {
    const noticia = noticias[id]; // Buscamos la noticia por su ID

    // Llenamos el espacio del lector con la info de esa noticia
    document.getElementById('articulo-titulo').innerText = noticia.titulo;
    document.getElementById('articulo-imagen').src = noticia.imagen;
    document.getElementById('articulo-texto').innerText = noticia.texto;

    // Cambiamos de vista
    document.getElementById('galeria').classList.add('oculto');
    document.getElementById('lector-noticia').classList.remove('oculto');
    
    // Subimos al inicio de la pantalla
    window.scrollTo(0, 0);
}

// 3. Función para regresar a la lista principal
function volver() {
    document.getElementById('lector-noticia').classList.add('oculto');
    document.getElementById('galeria').classList.remove('oculto');
}