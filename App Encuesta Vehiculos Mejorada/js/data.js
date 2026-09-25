export const surveys = {
  autos: {
    label: 'Automóviles',
    bodyClass: 'survey-autos',
    storageKey: 'Estadística',
    background: "url('Imgs/Ptcruiser.jpg')",
    questions: [
      { id: '1', text: '¿Qué marca de auto prefieres?', options: [
        ['R11','Ford'], ['R12','General Motors'], ['R13','Toyota'], ['R14','Mercedes-Benz'], ['R15','Volkswagen']
      ]},
      { id: '2', text: '¿Qué modelo prefieres?', options: [
        ['R21','Sedán 4 puertas'], ['R22','Hatchback 3 puertas'], ['R23','SUV 5 puertas'], ['R24','Coupé 2 puertas'], ['R25','Convertible 2 puertas']
      ]},
      { id: '3', text: '¿Qué color prefieres?', options: [
        ['R31','Blanco'], ['R32','Negro'], ['R33','Rojo'], ['R34','Azul'], ['R35','Verde']
      ]},
      { id: '4', text: '¿Qué motor prefieres?', options: [
        ['R41','Nafta'], ['R42','Diésel'], ['R43','Gas'], ['R44','Híbrido'], ['R45','Eléctrico']
      ]},
      { id: '5', text: '¿Qué caja de velocidades prefieres?', options: [
        ['R51','Manual 3 velocidades'], ['R52','Manual 4 velocidades'], ['R53','Manual 5 velocidades'], ['R54','Manual 6 velocidades'], ['R55','Automática 6 velocidades']
      ]}
    ]
  },
  camionetas: {
    label: 'Camionetas',
    bodyClass: 'survey-camionetas',
    storageKey: 'EstadísticaCamionetas',
    background: "url('https://images.coches.com/_news_/2023/04/toyota-hilux-gr-sport-prueba-12-700x394.jpg')",
    questions: [
      { id: '1', text: '¿Qué marca de camioneta prefieres?', options: [
        ['R11','Toyota Hilux'], ['R12','Ford Ranger'], ['R13','Chevrolet Silverado'], ['R14','Nissan Frontier'], ['R15','Volkswagen Amarok']
      ]},
      { id: '2', text: '¿Qué tipo de camioneta prefieres?', options: [
        ['R21','2 puertas 2WD'], ['R22','4 puertas 2WD'], ['R23','2 puertas 4WD'], ['R24','4 puertas 4WD'], ['R25','AWD']
      ]},
      { id: '3', text: '¿Dónde usarías la camioneta?', options: [
        ['R31','En la ciudad'], ['R32','En el campo'], ['R33','En la montaña'], ['R34','En la playa'], ['R35','En la nieve']
      ]},
      { id: '4', text: '¿Para qué trabajo usarías la camioneta?', options: [
        ['R41','Construcción de caminos'], ['R42','Transporte de materiales'], ['R43','Agricultura y ganadería'], ['R44','Transporte de personas'], ['R45','Asistencia en emergencias']
      ]},
      { id: '5', text: '¿Qué combustible prefieres?', options: [
        ['R51','Nafta'], ['R52','Gasoil'], ['R53','Gas natural comprimido (GNC)'], ['R54','Híbrido (nafta + eléctrico)'], ['R55','Eléctrica']
      ]}
    ]
  },
  camiones: {
    label: 'Camiones',
    bodyClass: 'survey-camiones',
    storageKey: 'EstadísticaCamiones',
    background: "url('https://image-proxy.kws.kaavan.es/i/480-320/vehicles/edf466c5-2a67-43e9-9771-74092b39216c/medias/7380178.jpeg?format=webp')",
    questions: [
      { id: '1', text: '¿Qué marca de camión prefieres?', options: [
        ['R11','Scania'], ['R12','Fiat Iveco'], ['R13','DAF'], ['R14','Mercedes-Benz'], ['R15','Volvo']
      ]},
      { id: '2', text: '¿Qué potencia prefieres?', options: [
        ['R21','600 HP o más'], ['R22','Entre 600 HP y 500 HP'], ['R23','Entre 500 HP y 400 HP'], ['R24','Entre 200 HP y 100 HP'], ['R25','Menos de 100 HP']
      ]},
      { id: '3', text: '¿Con qué tipo de carga?', options: [
        ['R31','General paqueterío'], ['R32','Cisternas'], ['R33','Refrigerada'], ['R34','Granelera'], ['R35','Contenedores']
      ]},
      { id: '4', text: '¿Qué distancias recorres?', options: [
        ['R41','Largas distancias'], ['R42','Medias distancias'], ['R43','Cortas distancias'], ['R44','Reparto urbano'], ['R45','Realizo viajes de todo tipo']
      ]},
      { id: '5', text: '¿Qué caja de cambios prefieres?', options: [
        ['R51','Manual 18 velocidades'], ['R52','Manual 16 velocidades'], ['R53','Manual 12 velocidades'], ['R54','Manual de 6 velocidades'], ['R55','Automática']
      ]}
    ]
  },
  motos: {
    label: 'Motos',
    bodyClass: 'survey-motos',
    storageKey: 'EstadísticaMotos',
    background: "url('https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm4Zvg_Iyd_b6WbMer3A_FQD_w10ZPhJqy7F3kz-ns7ZP78SsTU79HrVnSxYucC5byGpAs6JX4DrYi1xo9Y1vGjLkCnz3vsbsETIaLmL8hpx-gv6rb1b14-diALOKxgE_ZPusoA=s680-w680-h510-rw')",
    questions: [
      { id: '1', text: '¿Qué marca de motocicleta prefieres?', options: [
        ['R11','BMW'], ['R12','Honda'], ['R13','Yamaha'], ['R14','Kawasaki'], ['R15','Harley-Davidson']
      ]},
      { id: '2', text: '¿Qué tipo de motocicleta prefieres?', options: [
        ['R21','Touring'], ['R22','Cruiser'], ['R23','Sport'], ['R24','Scooter'], ['R25','Cross']
      ]},
      { id: '3', text: '¿Qué potencia prefieres?', options: [
        ['R31','150 cc'], ['R32','250 cc'], ['R33','500 cc'], ['R34','750 cc'], ['R35','1000 cc o más']
      ]},
      { id: '4', text: '¿Para qué uso prefieres la moto?', options: [
        ['R41','Transporte diario'], ['R42','Recreativo'], ['R43','Deportivo'], ['R44','Delivery'], ['R45','Viaje largo']
      ]},
      { id: '5', text: '¿Dónde usarías la moto?', options: [
        ['R51','Ciudad'], ['R52','Carretera'], ['R53','Montaña'], ['R54','Campo'], ['R55','Playa']
      ]}
    ]
  }
};
