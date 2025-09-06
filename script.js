// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Cargar productos desde el archivo CSV
    loadProducts();
    
    // Inicializar carrusel
    initCarousel();
    
    // Configurar filtros de productos
    setupFilters();
    
    // Configurar modal de producto
    setupModal();
    
    // Configurar formulario de contacto
    setupContactForm();
});

// Función para cargar productos desde CSV
function loadProducts() {
    // En una implementación real, se cargaría desde un archivo CSV
    // Para este ejemplo, usamos datos de ejemplo
    const products = [
        {
            nombre: "Aromatizante de ambiente de lavanda",
            imagen: "./img/aromatizanteL.png",
            precio: "$95.00 MXN",
            descripcion: "Aromatizante para interiores elaborado artesanalmente con esencia de lavanda que te hará crear un ambiente de calma, bienestar y estabilidad en tu hogar; además, promueve un sueño más profundo y reparador y combate los malos olores. Déjate envolver por la calma y el bienestar que solo el aromatizante Tonalli te puede ofrecer!",
            ingredientes: "Alcohol denat, esencia de lavanda y colorantes vegetales rojo y azul",
            instrucciones: "Agitar vigorosamente antes de usar. Presionar el atomizador para esparcir la solución en las áreas del hogar, oficina, vehículo u otra zona de que desee aromatizar. Utilizar durante el día cuantas veces lo requiera",
	    presentacion: "Doble presentación: 150 ml ($63.00 MXN) y 250 ml ($95.00 MXN)",
	    categoria: "aromatica"
	    
        },
	{
            nombre: "Aromatizante de ambiente frutal",
            imagen: "./img/aromatizanteF.png",
            precio: "$95.00 MXN",
            descripcion: "Aromatizante dulce, y a la vez fresco, para interiores elaborado con esencia frutal que te hará aumentar tu energía mental y física, y tu productividad al estimular tus sentidos!",
            ingredientes: "Alcohol denat, esencia frutal y colorante vegetal rojo",
            instrucciones: "Agitar vigorosamente antes de usar. Presionar el atomizador para esparcir la solución en las áreas del hogar, oficina, vehículo u otra zona de que desee aromatizar. Utilizar durante el día cuantas veces lo requiera",
	    presentacion: "Doble presentación: 150 ml ($63.00 MXN) y 250 ml ($95.00 MXN)",
	    categoria: "aromatica"
        },
	{
            nombre: "Agua de colonia",
            imagen: "./img/colonia.png",
            precio: "$141.00 MXN",
            descripcion: "Colonia clásica y fresca con exquisito aroma cítrico, elaborada artesanalmente con esencias de naranja y azahar, ideal para personas que deseen armonizar su estado emocional, y refrescar, suavizar y tonificar su piel después de la ducha y durante todo un día cálido, e incluso después del afeitado para así calmar la piel irritada y proporcionar una sensación de frescura y limpieza",
            ingredientes: "Alcohol denat, agua, esencia de azahar y naranja,  y colorante vegetal amarillo",
            instrucciones: "Después de la ducha, aplicar un poco de agua de colonia en la parte posterior de las orejas, en la clavícula, sobre las muñecas o en la parte del cuerpo que desee refrescar",
	    presentacion: "250 ml",
	    categoria: "facial"
        },
	{
            nombre: "Body mist refrescante frutal",
            imagen: "./img/bodyF.png",
            precio: "$91.00 MXN",
            descripcion: "Spray corporal artesanal con un aroma dulce y delicioso que te ayudará a refrescarte y sentirte fabulosa en cualquier momento de tu día! Incluso puedes aplicarlo sobre tu cabello ya que no mancha",
            ingredientes: "Alcohol denat, fijador de perfume, esencia frutal y colorante vegetal rojo",
            instrucciones: "Rociar a corta distancia (15 centímetros) la bruma del Body Mist preferentemente en todo el cuerpo, incluyendo el cabello. Su efecto dura hasta 2 horas por lo que se puede aplicar varias veces al día para mantener la frescura y el aroma en tu piel",
	    presentacion: "125 ml",
	    categoria: "corporal"
		},
		{
            nombre: "Body mist refrescante de cedro",
            imagen: "./img/bodyR.png",
            precio: "$91.00 MXN",
            descripcion: "Spray corporal artesanal con notas clásicas de cedro y cítricos muy efectiva para sentirse fresco, vibrante y en armonía durante su uso! Es Ideal para quien prefiera un aroma más serio y con más presencia durante la noche y/o el día",
            ingredientes: "Alcohol denat, fijador de perfume, esencia de cedro y  cítricos, y colorante vegetal amarillo, rojo y azul",
		    instrucciones: "Rociar a corta distancia (15 centímetros) la bruma del Body Mist preferentemente en todo el cuerpo, incluyendo el cabello. Su efecto dura hasta 2 horas por lo que se puede aplicar varias veces al día para mantener la frescura y el aroma en tu piel",
		    presentacion: "125 ml",
	    categoria: "corporal"
		},
	{
	    nombre: "Loción terapéutica capilar",
            imagen: "./img/locionC.png",
            precio: "$199.00 MXN",
            descripcion: "Loción terapéutica artesanal de bergamota que permite tener un cabello suave, con movimiento y fijación natural, es decir, controlado por peso y alisado para no dejar que se alborote, además de que actúa como vasodilatador estimulando el cuero cabelludo, abriendo el folículo, nutriéndolo y originando el nacimiento de nuevo cabello de forma natural. Sus efectos son permanentes por lo que es ideal para personas con problemas de alopecia y entradas por pérdida excesiva de cabello!",
            ingredientes: "Alcohol denat, bergamota",
            instrucciones: "Verter la loción sobre la palma de la mano para posteriormente distribuir uniformemente sobre el cuero cabelludo; masajear suavemente por dos minutos. No enjuagar",
	    presentacion: "120 ml",
	    categoria: "capilar"
        },
	  {
            nombre: "Repelente de mosquitos",
            imagen: "./img/repelente.png",
            precio: "$257.00 MXN",
            descripcion: "Ahuyentador súper efectivo contra mosquitos gracias al efecto de repeler potencializado por la combinación de los cuatro aceites esenciales de este producto artesanal. Ideal para días de campo, viajes a la playa o simplemente para disfrutar de un atardecer en tu hogar! Por sus activos  100% naturales, su uso es seguro para toda la familia",
            ingredientes: "Alcohol denat, glicerina, aceites esenciales de citronela, eucalipto, lavanda y limón, y colorante vegetal amarillo",
              instrucciones: "Aplicar directamente sobre la piel del cuerpo; para la cara, primero rociar sobre las manos y posteriormente distribuir sobre la cara",
	      presentacion: "130 ml",
	      precaucion: "Evitar el contacto directo con los ojos, heridas o piel irritada. No ingerir",
	    categoria: "protectores"
          },
	{
            nombre: "Tónico para espinillas",
            imagen: "./img/antiacne.png",
            precio: "$157.00 MXN",
            descripcion: "Logra una piel hidratada y saludable libre de acné, puntos negros y brillo! Gracias a la acción sebo-reguladora, antibacterial, antiinflamatoria y anti-obstrucción de poros de los componentes de este tónico facial artesanal, limpiarás profundamente tu rostro para lucir radiante y sin resequedad. Producto recomendado para piel grasa o con tendencia a tener acné",
            ingredientes: "Licor de Hoffman, agua de rosas, azufre y acido salicílico",
            instrucciones: "Agitar bien antes de usar. Con un algodón, aplicar  en la cara recién lavada antes de dormir. Al día siguiente, lavarse la cara nuevamente y seguir con la rutina normal de cuidado facial",
	    presentacion: "150 ml",
	    precaucion: "Su aroma puede ser muy fuerte por lo que se recomienda contener la respiración durante la aplicación del tónico",
	    categoria: "facial"
        },
	{
            nombre: "Sales de baños florales",
            imagen: "./img/salesFlo.png",
            precio: "$158.00 MXN",
            descripcion: "Las sales de baño artesanales de Tonalli ayudan a exfoliar y desintoxicar tu cuerpo con la apertura de los poros de la piel, lo cual permite la liberación de toxinas y metales pesados. Lleva tu cuerpo a un estado de dulce relajación, y a la vez mejora considerablemente tu circulación sanguínea!",
            ingredientes: "Sal marina, sulfato de magnesio, glicerina, esencia floral y  colorante vegetal rojo",
            instrucciones: "Uso en pies: Llenar una cubeta con 10 litros de agua a una temperatura tibia a caliente agradable, y añadir 30 gramos de sales florales. Uso en bañera: Añadir 90 gramos al agua a una temperatura de confort. Para ambas opciones, permanecer de 10 a 20 minutos. No enjuagar posterior a la ducha, solo secar con una toalla y posteriormente tomar un descanso de 20 a 30 minutos",
	    presentacion: "450 g",
	    categoria: "corporal"
        },
	{
            nombre: "Sales de baño de lavanda",
            imagen: "./img/salesLab.png",
            precio: "$158.00 MXN",
            descripcion: "Las sales de baño artesanales de Tonalli ayudan a exfoliar suavemente, a regular el nivel de humedad celular y activar el metabolismo. Bañarse con sales de lavanda te ayudará a combatir la fatiga mejorando tu estado de ánimo, y a la vez relajándote para eliminar el insomnio y brindarte paz interior!",
            ingredientes: "Sal marina, sulfato de magnesio, glicerina, esencia de lavanda y colorante vegetal rojo y azul",
            instrucciones: "Uso en pies: Llenar una cubeta con 10 litros de agua a una temperatura tibia a caliente agradable, y añadir 30 gramos de sales de lavanda. Uso en bañera: Añadir 90 gramos al agua a una temperatura de confort. Para ambas opciones, permanecer de 10 a 20 minutos. No enjuagar posterior a la ducha, solo secar con una toalla y posteriormente tomar un descanso de 20 a 30 minutos",
	    presentacion: "450 g",
	    categoria: "corporal"
        },
	{
            nombre: "Crema de noche para contorno de ojos",
            imagen: "./img/contorno.png",
            precio: "$115.00 MXN",
            descripcion: "Con esta crema de noche artesanal para todo tipo de piel se hidrata el área de contorno de tus ojos, reduciendo líneas de expresión, ojeras y bolsas de párpado. Gracias a su contenido de miel de abeja, esta crema retrasa el envejecimiento de la piel, potencializado por los beneficios del aceite de almendras y manteca de karité!",
            ingredientes: "Agua de rosas, miel, almendras, acido esteárico, aceite de ricino, manteca de karité, ésteres de cetilo, glicerina, lanolina, trietanolamina, Vitamina A y esencia de miel",
            instrucciones: "Aplicar diariamente en el área de contorno de ojos durante la noche; esparcir dando pequeños golpecitos con el dedo anular. Al día siguiente, lavarse la cara nuevamente y continuar con la rutina normal de cuidado facial",
	    presentacion: "75 g",
	    categoria: "facial"
        },
	{
            nombre: "Bálsamo labial de fresa",
            imagen: "./img/balsamo.png",
            precio: "$69.00 MXN",
            descripcion: "Con el bálsamo labial artesanal de Tonalli, tendrás una experiencia de mascarilla protectora y súper hidratante que dejará tus labios suaves, regordetes y bien nutridos, gracias a su mezcla de grasas y aceites naturales! Es ideal para tratar labios agrietados... Y si quieres que brillen, se puede usar como una base antes de aplicar tu labial favorito!",
            ingredientes: "Agua, esencia de fresa, almendras, ácido esteárico, cera de abeja, aceite de ricino, manteca de karité y cacao, lanolina, colorante vegetal rojo y trietanolamina",
            instrucciones: "Aplicar una pequeña cantidad de bálsamo en los labios según sea necesario, especialmente después de lavarse la cara o después de salir al exterior",
	    presentacion: "25 g",
	    categoria: "facial"
        },
	{
            nombre: "Crema corporal de almendras",
            imagen: "./img/cremaAlm.png",
            precio: "$195 MXN",
            descripcion: "Humecta y nutre tu piel con la fantástica crema corporal líquida de almendras hecha de manera artesanal que se adapta a todo tipo de piel! Con una consistencia ligera y de rápida absorción, sus ingredientes principales, aceite de almendras y manteca de karité, proporcionan un extra de suavidad y elasticidad adicional",
            ingredientes: "Agua, aceite de almendras y maíz, ácido esteárico, glicerina, trietanolamina, manteca de karité y esencia de almendras",
            instrucciones: "Aplicar generosamente sobre la parte del cuerpo a humectar, dar masaje según sea necesario",
	    presentacion: "Doble presentación: 250 ml ($117.00 MXN) y 500 ml ($195.00 MXN)",
	    categoria: "corporal"
        },
	 {
            nombre: "Crema corporal de mamey",
            imagen: "./img/cremaMam.png",
            precio: "$195.00 MXN",
            descripcion: "Crema artesanal altamente nutritiva y reparadora ideal para todo tipo de pieles, incluso las sensibles. Gracias a la combinación del aceite de mamey y almendras, esta crema es excelente para regenerar la piel, calmar la irritación, mejorar la elasticidad, y tratar cicatrices, estrías y piel extremadamente áspera como los codos y talones!",
            ingredientes: "Agua, aceite de maíz, ácido esteárico, glicerina, aceite de almendras y de hueso de mamey, trietanolamina, manteca de karité, esencia de cítricos, frutal y chocolate",
             instrucciones: "Aplicar generosamente sobre la parte del cuerpo a humectar, dar masaje según sea necesario",
	     presentacion: "Doble presentación: 250 ml ($117.00 MXN) y 500 ml ($195.00 MXN)",
	    categoria: "corporal"
         },
	{
            nombre: "Acondicionador para cabello",
            imagen: "./img/acondicionador.png",
            precio: "$195.00 MXN",
            descripcion: "Dale a tu cabello la hidratación y nutrición que se merece, y disfruta de una melena suave, manejable y radiante a diario con este acondicionador artesanal! El aloe vera ayuda a suavizar y revitalizar el cabello, mientras que la manteca de karité proporciona hidratación intensa que reduce la resequedad y el frizz",
            ingredientes: "Agua, aloe vera, BTMS-25, aceite de maíz, glicerina, manteca de karité, trietanolamina y esencia de bambú",
            instrucciones: "Aplicar en el cabello masajeando desde en medio y hasta la puntas; dejar actuar de 3 a 5 minutos, y después enjuagar con abundante agua tibia",
	    presentacion: "250 ml",
	    categoria: "capilar"
        },
	 {
            nombre: "Crema antiestrías",
            imagen: "./img/cremaAnti.png",
            precio: "$143.00 MXN",
            descripcion: "Con esta crema artesanal de origen 100% natural, adecuada para cualquier tipo de piel, suaviza y bríndale la máxima hidratación para prevenir la aparición de estrías. También es ideal para cuidar tu piel desde los primeros cambios durante el embarazo y postparto, además de que su agradable aroma a cacao y karité, transformará tu rutina en un ritual de amor propio, cálido y relajante!",
            ingredientes: "Manteca de karité, aceite de almendras, lanolina, manteca de cacao, aceite de maíz, cera de abeja y esencia de chocolate",
             instrucciones: "Aplicar generosamente sobre los antebrazos, vientre, cadera, senos y/o muslos preferentemente dos veces al día; masajear suavemente de forma circular hasta su completa absorción",
	     presentacion: "40 g",
	    categoria: "corporal"
        },
	 {
            nombre: "Pantalla solar de té verde",
            imagen: "./img/pantallaSol.png",
            precio: "$147.00 MXN",
            descripcion: "Con esta pantalla natural rica en Té verde hecha de manera , estás creando una barrera física antioxidante a tu piel para prevenir el envejecimiento prematuro, y la aparición de manchas y arrugas debido a radicales libres del ambiente y a los rayos del sol! Apta para uso facial y corporal en todo tipo de piel. Y para las ocasiones en que te maquilles, puedes hacerlo sobre la pantalla sin retirarla!",
            ingredientes: "Agua, dióxido de titanio, carbopol 940, glicerina, aceite esencial de té verde y trietanolamina",
             instrucciones: "Aplicar generosamente sobre las áreas del cuerpo a proteger, 30 minutos antes de exponerse al sol. En caso de exposición prolongada, repetir cada 2 horas. No aplicarse si estará en contacto con el agua",
	     presentacion: "100 g",
	    categoria: "protectores"
         },
	 {
            nombre: "Desmaquillante bifásico",
            imagen: "./img/desmaquillante.png",
            precio: "$73.00 MXN",
             descripcion: "Ideal para desmaquillar ojos y rostro sin irritarte ya que no contiene alcohol y/o químicos sintéticos! Es completamente natural de origen vegetal y hecho artesanalmente que, además de retirar el maquillaje, contrarresta el daño que este también ocasiona eliminando impurezas y suciedad, dándole suavidad e hidratación a tu piel gracias a su contenido de agua de rosas",
            ingredientes: "Agua de rosas, aceite de almendras, oliva, ricino y de rosas",
             instrucciones: "Agitar bien antes de usar. Aplicar desmaquillante sobre un algodón o trapito para desmaquillarse, y posteriormente pasarlo por los ojos y rostro",
	     presentacion: "60 ml",
	    categoria: "facial"
         },
	{
            nombre: "Serum facial nutritivo",
            imagen: "./img/serumF.png",
            precio: "$65.00 MXN",
            descripcion: "Serum artesanal eficaz para combatir la piel apagada y con signos de envejecimiento prematuro gracias a su magistral combinación de activos botánicos. Este serum nutre y regenera profundamente, y mejora la elasticidad logrando una piel más suave, radiante y saludable. Producto recomendable para piel seca; apta para pieles sensibles",
            ingredientes: "Aceite de aguacate, almendras y germen de trigo, esencia de manzana verde",
            instrucciones: "Aplicar de 6 a 8 gotas en la cara limpia dando un ligero masaje hasta completa absorción (frente, pómulos, barbilla y nariz). También se puede aplicar en cuello y escote. De uso diario de forma nocturna",
	    presentacion: "30 ml",
	    categoria: "facial"
        },
	{
            nombre: "Serum facial hidratante",
            imagen: "./img/serumH.png",
            precio: "$65.00 MXN",
            descripcion: "Revitaliza tu piel con esta fusión artesanal perfecta de agua de rosas y Vitamina C! El agua de rosas es ideal para restaurar y balancear los aceites naturales de la piel deshidratada, dándole una vista de frescura y suavidad; y la vitamina C es un antioxidante esencial que te protege del daño causado por la contaminación, además de potencializar la producción natural de colágeno",
            ingredientes: "Agua de rosas, vitamina C y glicerina",
            instrucciones: "Aplicar de 6 a 8 gotas en la cara limpia dando un ligero masaje hasta completa absorción (frente, pómulos, barbilla y nariz). También se puede aplicar en cuello y escote.  De uso diario de forma nocturna",
	    presentacion: "30 ml",
	    categoria: "facial"
        },
	{
            nombre: "Shampoo hidratante de aloe vera",
            imagen: "./img/shampooHid.png",
            precio: "$197.00 MXN",
            descripcion: "Shampoo natural artesanal con extracto de aloe vera ideal para hidratar el cabello, dejándolo suave, manejable y con brillo! Además, facilita el peinado y desenredo, logrando un cabello más sedoso. Recomendado para todo tipo de cabello",
            ingredientes: "Tensioactivo SLES, aloe vera, agua, cloruro de sodio, esencia de bambú y colorante vegetal verde",
            instrucciones: "Aplicar el producto sobre el cuero cabelludo, masajear suavemente distribuyendo la espuma hasta las puntas; dejar actuar durante unos minutos. Enjuagar y repetir en caso de ser necesario",
	    presentacion: "Doble presentación: 250 ml ($115.00 MXN) y 500 ml ($197.00 MXN)",
	    categoria: "capilar"
        },
	{
            nombre: "Shampoo hidratante antifrizz de aloe vera",
            imagen: "./img/shampooHidF.png",
            precio: "$197.00 MXN",
            descripcion: "Shampoo natural artesanal con extracto de aloe vera y aceite de aguacate ideal para todo tipo de cabello con problemas de frizz!  Este shampoo combate el frizz, hidratándolo y aportándole suavidad y brillo",
            ingredientes: "Tensioactivo SLES, agua, aceite de aguacate, aloe vera, cloruro de sodio, esencia de bambú y colorante vegetal verde",
            instrucciones: "Aplicar el producto sobre el cuero cabelludo, masajear suavemente distribuyendo la espuma hasta las puntas; dejar actuar durante unos minutos. Enjuagar y repetir en caso de ser necesario",
	    presentacion: "Doble presentación: 250 ml ($115.00 MXN) y 500 ml ($197.00 MXN)",
	    categoria: "capilar"
        },
	{
            nombre: "Shamppo anticaspa de aloe vera",
            imagen: "./img/shampooAnt.png",
            precio: "$291.00 MXN",
            descripcion: "Shampoo natural artesanal con extracto de aloe vera y aceite esencial de árbol de té  ideal para cuidar todo tipo de cabello, ayudando a combatir la caspa y a calmar la irritación del cuero cabelludo",
            ingredientes: "Tensioactivo SLES, aloe vera, agua, cloruro de sodio, árbol de té y colorante vegetal verde",
            instrucciones: "Aplicar el producto sobre el cuero cabelludo, masajear suavemente distribuyendo la espuma hasta las puntas; dejar actuar durante unos minutos. Enjuagar y repetir en caso de ser necesario",
	    presentacion: "Doble presentación: 250 ml ($179.00 MXN) y 500 ml ($291.00 MXN)",
	    categoria: "capilar"
        },
	{
            nombre: "Shampoo anticaída de romero",
            imagen: "./img/shampooRom.png",
            precio: "$291.00 MXN",
            descripcion: "Shampoo natural artesanal con extracto de romero y chile, ideal para cuidar todo tipo de cabello con problema de caída. Este shampoo ayuda a combatir la caída de cabello estimulando su crecimiento y fortaleciendo el cuero cabelludo. Además, esta formulación te ofrece suavidad y brillo extra!",
            ingredientes: "Tensioactivo SLES, agua, romero, chile, cloruro de sodio, bergamota y colorante vegetal rojo",
            instrucciones: "Aplicar el producto sobre el cuero cabelludo, masajear suavemente distribuyendo la espuma hasta las puntas; dejar actuar durante unos minutos. Enjuagar y repetir en caso de ser necesario",
	    presentacion: "Doble presentación: 250 ml ($179.00 MXN) y 500 ml ($291.00 MXN)",
	    categoria: "capilar"
        },

    ];

    // Asignar categorías a los productos (en un caso real vendrían del CSV)
    const categorizedProducts = products.map((product) => {
        let category;
        if      (product.categoria === "aromatica") category = "aromatica";
        else if (product.categoria === "capilar") category = "capilar";
        else if (product.categoria === "corporal") category = "corporal";
	else if (product.categoria === "facial") category = "facial";
        else category = "protectores";
        
        return {...product, categoria: category};
    });

    // Renderizar productos
    renderProducts(categorizedProducts);
}

// Función para renderizar productos
function renderProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${product.categoria}`;
        productCard.dataset.category = product.categoria;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.imagen}" alt="${product.nombre}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.nombre}</h3>
                <p class="product-price">${product.precio}</p>
                <p class="product-description">${product.descripcion}</p>
                <div class="product-actions">
                    <button class="details-btn" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>Ver detalles</button>
                    <button class="add-to-cart">Añadir al carrito</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Añadir event listeners a los botones de detalles
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productData = JSON.parse(this.dataset.product.replace(/&#39;/g, "'"));
            openProductModal(productData);
        });
    });
    
    // Añadir event listeners a los botones de carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            addToCart();
        });
    });
}

// Función para inicializar el carrusel
function initCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    
    // Función para mostrar una slide específica
    function showSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;
        
        const offset = -currentSlide * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        
        // Actualizar indicadores
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
        
        // Actualizar botones de categoría
        const category = slides[currentSlide].dataset.category;
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
    }
    
    // Navegación con botones
    window.moveSlide = function(direction) {
        showSlide(currentSlide + direction);
    };
    
    // Navegación con indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });
    
    // Navegación con categorías
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            if (category === 'todos') return;
            
            // Encontrar la slide correspondiente a la categoría
            let targetSlide = 0;
            slides.forEach((slide, index) => {
                if (slide.dataset.category === category) {
                    targetSlide = index;
                    return;
                }
            });
            
            showSlide(targetSlide);
            
            // Actualizar botones activos
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.toggle('active', b === this);
            });
        });
    });
    
    // Cambio automático de slides
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Función para configurar filtros de productos
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Actualizar botón activo
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn === this);
            });
            
            // Filtrar productos
            const products = document.querySelectorAll('.product-card');
            products.forEach(product => {
                if (filter === 'todos' || product.dataset.category === filter) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
}

// Función para configurar el modal de producto
function setupModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}


// Función para abrir el modal con los detalles del producto
function openProductModal(product) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.imagen}" alt="${product.nombre}">
            </div>
            <div class="modal-product-info">
                <h2>${product.nombre}</h2>
                <p class="modal-product-price">${product.precio}</p>
                <p class="modal-product-description">${product.descripcion}</p>
                <div class="modal-product-details">
                    <h3>Ingredientes</h3>
                    <p>${product.ingredientes}</p>
                    <h3>Instrucciones de Uso</h3>
                    <p>${product.instrucciones}</p>
                    <h3>Presentación</h3>
                    <p>${product.presentacion}</p>                   
                </div>
                <button class="btn add-to-cart-modal">Añadir al Carrito</button>
            </div>
        </div>
    `;
    
    // Añadir event listener al botón de carrito en el modal
    document.querySelector('.add-to-cart-modal').addEventListener('click', addToCart);
    
    // Mostrar el modal
    document.getElementById('product-modal').style.display = 'block';
}

// Función para añadir productos al carrito
function addToCart() {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
    
    // Efecto visual
    cartCount.classList.add('pulse');
    setTimeout(() => {
        cartCount.classList.remove('pulse');
    }, 300);
}

// Función para configurar el formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (name && email && subject && message) {
            // En una implementación real, aquí se enviarían los datos
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}
