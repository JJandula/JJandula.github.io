var map = L.map("map").setView([28.681581840265412, -17.85336086554328], 10);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors"
        }).addTo(map);

        var iconoEstandar = L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            iconSize: [25, 38],
            iconAnchor: [19, 38],
            popupAnchor: [0, -38]
        });

        var iconoFavorito = L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/4208/4208408.png",
            iconSize: [38, 38],
            iconAnchor: [19, 38],
            popupAnchor: [0, -38]
        });

        var iconoCasa = L.icon({
            iconUrl: "https://images.vexels.com/content/140565/preview/house-round-icon-1a6c6a.png",
            iconSize: [38, 38],
            iconAnchor: [19, 38],
            popupAnchor: [0, -38]
        });

        var todosLosLugares = [
        {
          coordenadas: [28.7378, -17.867],
          nombre: "Parque Nacional de la Caldera de Taburiente",
          tiempo: "Tiempo estimado: 1h 50 minutos",
          tipo: "montana",
          imagen:
            "https://upload.wikimedia.org/wikipedia/commons/e/e3/Caldera_de_Taburiente_MichaD.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Parque+Nacional+de+la+Caldera+de+Taburiente,+Carretera+General+de+Padr%C3%B3n,+El+Paso/@28.7295587,-17.9114345,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6bf032a8607315:0x98675a3cd18c3370!2m2!1d-17.8702347!2d28.7294897!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.6835, -17.7645],
          nombre: "Santa Cruz de La Palma",
          tiempo: "Tiempo estimado: 45 minutos",
          tipo: "",
          imagen:
            "https://www.spain.info/.content/imagenes/cabeceras-grandes/canarias/santa-cruz-la-palma-balcones-s1322773256.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Santa+Cruz+de+la+Palma,+Santa+Cruz+de+Tenerife/@28.6840653,-17.8057436,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6beeaa2247c011:0x735ded8f4bc2536d!2m2!1d-17.7645438!2d28.6839962!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.757403248353363, -17.884974575291547],
          nombre: "Observatorio del Roque de los Muchachos ⭐️",
          tipo: "montana",
          tiempo: "Tiempo estimado: 2 horas",
          imagen:
            "https://fotografias.lasexta.com/clipping/cmsimages02/2021/04/12/BD9CA878-C4D2-4366-B36B-113C94FE0947/98.jpg?crop=5929,3336,x126,y0&width=1900&height=1069&optimize=high&format=webply",
          ubicacion:
            "https://www.google.es/maps/dir//Observatorio+Astrof%C3%ADsico+Roque+de+Los+Muchachos,+Observatorio+Roque+de+los+Muchachos,+s%2Fn,+38728+Villa+de,+Santa+Cruz+de+Tenerife/@28.75735,-17.9261851,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6bf074f599aaab:0x8938042021c61cf!2m2!1d-17.8849858!2d28.757281!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.754735076899976, -17.885007296858873],
          nombre: "Roque de los Muchachos",
          tiempo: "Tiempo estimado: 2 horas",
          tipo: "montana",
          imagen:
            "https://www.islabonitatours.com/wp-content/uploads/2019/05/miradores-roque-muchachos-isla-bonita-tours.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Roque+de+los+Muchachos,+38788,+Santa+Cruz+de+Tenerife/@28.7551766,-17.8855435,18.49z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6bf0242bb47e8f:0x1d0340f4f757a150!2m2!1d-17.8849999!2d28.7547222!3e0?entry=ttu",
        },
        {
          coordenadas: [28.650761268495994, -17.946389866332385],
          nombre: "Playa Puerto de Tazacorte ⭐️",
          tiempo: "Tiempo estimado: 50 minutos",
          tipo: "playa",
          imagen:
            "https://visitlapalma.es/wp-content/uploads/2017/12/LaPalma_PlayaTazacorte_DominicDahncke.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//28.6523368,-17.9432307/@28.6514597,-17.9461473,17.59z/data=!4m2!4m1!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.790145545789652, -17.80197616782565],
          nombre: "Bosque de Los Tilos",
          tiempo: "Tiempo estimado: 1h 20 minutos",
          tipo: "montana",
          imagen:
            "https://visitlapalma.es/wp-content/uploads/2017/12/LaPalma_PaseoLaurisilva_DominicDahncke.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Punto+de+Informaci%C3%B3n+Ambiental+de+LOS+TILOS.,+C.+Los+Tilos,+s%2Fn,+38720+Los+Sauces,+Santa+Cruz+de+Tenerife/@28.7908931,-17.8023839,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6bef13919b0927:0x535150bdd5ec1d87!2m2!1d-17.8019811!2d28.7901057!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.759196515925247, -17.739468564445566],
          nombre: "Playa de Nogales ⭐️",
          tiempo: "Tiempo estimado: 1 hora",
          tipo: "playa",
          imagen: "https://tvlapalma.com/adjuntos/fichero_1847_20161102.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Playa+de+Nogales/@28.7591812,-17.7804866,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6be8be4ae7888f:0xe37394734a1015d!2m2!1d-17.7392868!2d28.7591122!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.808003329126326, -17.761598096610456],
          nombre: "Charco Azul ⭐️",
          tiempo: "Tiempo estimado: 1h 15 minutos",
          tipo: "playa",
          imagen:
            "https://visitlapalma.es/wp-content/uploads/2017/12/LaPalma_PiscinasCharcoAzul-VanMarty.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Charco+Azul,+Santa+Cruz+de+Tenerife/@28.8079196,-17.8037104,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0xc6be67637f92351:0x2a5f47332f200d1d!2m2!1d-17.7625106!2d28.8078506!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.8427300606333, -17.78942906647062],
          nombre: "Las piscinas de Fajana",
          tiempo: "Tiempo estimado: 1h 20 minutos",
          tipo: "playa",
          imagen:
            "https://www.coolhuntercanarias.com/wp-content/uploads/2020/02/portada_lafajana.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Piscinas+de+La+Fajana,+C.+la+Fajana,+3,+38726+La+Fajana,+Santa+Cruz+de+Tenerife/@28.8422421,-17.7903113,17.74z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6be46a8fc8888d:0x8966a9921d0f55de!2m2!1d-17.7896105!2d28.8427028!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.459067193907185, -17.85080277903192],
          nombre: "Playa Echentive",
          tiempo: "Tiempo estimado: 10 minutos",
          tipo: "playa",
          imagen:
            "https://visitlapalma.es/wp-content/uploads/2017/12/LaPalma_Playa-de-Echentive_Dami%C3%A1nMart%C3%ADnBrito.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Playa+de+Echentive/@28.4591428,-17.8919968,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0xc6b8e26f9b20c77:0x326964d9b7432cf9!2m2!1d-17.850797!2d28.4590735!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.5724277094711, -17.89930206360605],
          nombre: "Playa el Charco Verde ⭐️",
          tiempo: "Tiempo estimado: 45 minutos",
          tipo: "playa",
          imagen:
            "https://astelus.com/wp-content/uploads/2024/04/playa-charco-verde-la-palma.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Playa+de+Charco+Verde,+38769,+Santa+Cruz+de+Tenerife/@28.5724957,-17.940501,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6b8cd61b92d5f9:0x425eb5c280d5f273!2m2!1d-17.8993012!2d28.5724265!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.70313727539299, -17.970328331819395],
          nombre: "Poris de Candelaria",
          tiempo: "Tiempo estimado: 1h 20 minutos",
          tipo: "playa",
          imagen:
            "https://estaticos-cdn.prensaiberica.es/clip/1ae2f0ef-06cd-4532-84d0-a01ab48fcf4b_source-aspect-ratio_default_0.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Mirador+de+Por%C3%ADs+de+Candelaria,+Unnamed+Road,+38780,+Santa+Cruz+de+Tenerife/@28.7025915,-17.9913568,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6bf76bd4752667:0x2dfd1ba63c8c52b1!2m2!1d-17.9723031!2d28.7025923!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.455990810391143, -17.84419971529027],
          nombre: "Faro de Fuencaliente",
          tiempo: "Tiempo estimado: 10 minutos",
          tipo: "playa",
          imagen:
            "https://www.puentedemando.com/wp-content/uploads/2018/10/13323585_1793111677590060_7990820982309923659_o.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Faro+de+Fuencaliente,+38740,+Santa+Cruz+de+Tenerife/@28.4893899,-17.8775223,12.96z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6b91cdce14d55b:0xb958126dfdeebd25!2m2!1d-17.8433783!2d28.4554244!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.572721111219288, -17.837558502859707],
          nombre: "Parque natural de Cumbre Vieja",
          tiempo: "Tiempo estimado: 1h 10 minutos",
          tipo: "montana",
          imagen:
            "https://visitlapalma.es/wp-content/uploads/2017/12/LaPalma_Senderismo2_Sa%C3%BAlSantos.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Parque+natural+de+Cumbre+Vieja,+38738,+Santa+Cruz+de+Tenerife/@28.5730325,-17.8446186,15.48z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6b92b8fdc9c681:0xc8895edaecd1d4d1!2m2!1d-17.8375!2d28.5727778!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.697894262616863, -17.852590422379357],
          nombre: "Mirador de la Cumbrecita ⭐️",
          tiempo: "Tiempo estimado: 1 hora",
          tipo: "montana",
          imagen:
            "https://www.ilapalma.net/media/header/mirador-de-la-cumbrecita.webp",
          ubicacion:
            "https://www.google.es/maps/dir//Mirador+de+La+Cumbrecita,+Carr.+Caldera+Taburiente,+38758+El+Paso,+Santa+Cruz+de+Tenerife/@28.6979696,-17.8977374,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6bee2023ff5a5b:0xb5aa5ac18ded291f!2m2!1d-17.8565376!2d28.6979005!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.65264499293202, -17.760379052920214],
          nombre: "Playa de Los Cancajos",
          tiempo: "Tiempo estimado: 40 minutos",
          tipo: "playa",
          imagen:
            "https://visitlapalma.es/wp-content/uploads/2017/12/LaPalma_PlayaLosCancajos-SSantos.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Playa+de+los+Cancajos/@28.6527121,-17.8015823,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6beb8633517b5d:0x46105e6aacea24f1!2m2!1d-17.7603825!2d28.652643!3e0?hl=es&entry=ttu",
        },
        {
          coordenadas: [28.503700342989372, -17.873764637217178],
          nombre: "Hotel La Palma & Teneguía Princess",
          tiempo: " ",
          tipo: " ",
          imagen: "https://i.assetzen.net/i/vahdjbUGgrif/w:630/h:305/q:70.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//La+Palma+Princess,+Ctra.+la+Costa+Cerca+Vieja,+10,+38740,+Santa+Cruz+de+Tenerife/@28.5035165,-17.8767365,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6b8de5e5fc284d:0xbf5136a339a12c09!2m2!1d-17.8741616!2d28.5035118!3e0?entry=ttu",
        },
        {
          coordenadas: [28.515341694642235, -17.874967807707364],
          nombre: "Playa de la Zamora",
          tiempo: "Tiempo estimado: 5 minutos",
          tipo: "playa",
          imagen: "https://assets.la-palma.travel/uploads/2015/07/fuencaliente-playa-zamora-strand.jpg",
          ubicacion:
            "https://www.google.es/maps/dir//Playa+y+Bajas+de+la+Zamora,+38749/@28.5154082,-17.9161553,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xc6b8dbfd902c979:0x7976672c612329f8!2m2!1d-17.8749555!2d28.515339!3e0?entry=ttu",
        },
      ];

        var markers = [];

        function agregarMarcadores(filtro) {
            markers.forEach(marker => map.removeLayer(marker));
            markers = [];

            var lugaresFiltrados = todosLosLugares.filter(lugar => {
                return filtro === "todos" || lugar.tipo === filtro;
            });

            lugaresFiltrados.forEach(function (lugar) {
                var markerOptions = {};

                if (lugar.nombre === "Hotel La Palma & Teneguía Princess") {
                    markerOptions.icon = iconoCasa;
                } else if (lugar.nombre.includes("⭐️")) {
                    markerOptions.icon = iconoFavorito;
                } else {
                    markerOptions.icon = iconoEstandar;
                }

                var marker = L.marker(lugar.coordenadas, markerOptions).addTo(map);
                var popupContent =
                    "<b>" + lugar.nombre + "</b><br><br>" +
                    '<img src="' + lugar.imagen + '" class="popup-image" alt="' + lugar.nombre + '"><br><br>' +
                    '<a href="' + lugar.ubicacion + '" target="_blank">Como llegar!</a>' +
                    "<p>" + lugar.tiempo + "</p>";
                marker.bindPopup(popupContent, { maxWidth: 500 });

                markers.push(marker);
            });
        }

        function filtrarPuntos(filtro) {
            var botones = document.querySelectorAll('.selector-container button');
            botones.forEach(function (boton) {
                boton.classList.remove('active');
            });

            var botonSeleccionado = document.getElementById('btn-' + filtro);
            botonSeleccionado.classList.add('active');

            agregarMarcadores(filtro);
        }

        function seleccionarAleatorio() {
            var randomLugar = todosLosLugares[Math.floor(Math.random() * todosLosLugares.length)];
            map.setView(randomLugar.coordenadas, 12);
            markers.forEach(marker => {
                if (marker.getLatLng().lat === randomLugar.coordenadas[0] && marker.getLatLng().lng === randomLugar.coordenadas[1]) {
                    marker.openPopup();
                }
            });
        }

        // Inicializa los marcadores con "todos"
        filtrarPuntos('todos');