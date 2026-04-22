const MAIN_PTS = [
  [1, 25], [2, 18], [3, 15], [4, 12], [5, 10],
  [6, 8], [7, 6], [8, 4], [9, 2], [10, 1]
];

const SPRINT_PTS = [
  [1, 8], [2, 7], [3, 6], [4, 5],
  [5, 4], [6, 3], [7, 2], [8, 1]
];

const POS_LABELS = {
  1: 'Primero', 2: 'Segundo', 3: 'Tercero',
  4: 'Cuarto', 5: 'Quinto', 6: 'Sexto',
  7: 'Séptimo', 8: 'Octavo', 9: 'Noveno',
  10: 'Décimo'
};

const POS_CLASS = { 1: 'gold', 2: 'silver', 3: 'bronze' };

const FLAG_DETAILS = {
  yellow: {
    title: 'Bandera amarilla',
    meaning: 'Indica peligro en pista. Los pilotos deben reducir la velocidad, no adelantar y mantenerse preparados para reaccionar.',
    usage: 'Accidente, restos en pista o coche detenido en una zona peligrosa.',
    previewClass: 'fy'
  },
  green: {
    title: 'Bandera verde',
    meaning: 'Señala que la pista vuelve a estar libre de peligro y que el ritmo normal puede reanudarse.',
    usage: 'Se muestra después de una zona neutralizada o un incidente ya controlado.',
    previewClass: 'fg2'
  },
  red: {
    title: 'Bandera roja',
    meaning: 'La sesión o carrera queda suspendida inmediatamente por condiciones inseguras.',
    usage: 'Accidente grave, lluvia extrema o situación crítica en el circuito.',
    previewClass: 'fred'
  },
  black: {
    title: 'Bandera negra',
    meaning: 'Descalificación. El piloto señalado debe abandonar la prueba.',
    usage: 'Infracción grave o conducción peligrosa.',
    previewClass: 'fbl'
  },
  blue: {
    title: 'Bandera azul',
    meaning: 'Un piloto más lento debe dejar pasar a uno más rápido.',
    usage: 'Frecuente cuando un coche va a ser doblado.',
    previewClass: 'fblue'
  },
  checkered: {
    title: 'Bandera a cuadros',
    meaning: 'Marca el final oficial de la carrera o de una sesión.',
    usage: 'Se agita cuando el líder cruza la meta al final.',
    previewClass: 'fchk'
  }
};

const WEEKEND_STAGES = {
  viernes: {
    kicker: 'Día 1',
    title: 'Viernes — Preparación y lectura del circuito',
    body: 'Los equipos prueban configuraciones, entienden el comportamiento de los neumáticos y recogen datos para construir la estrategia del fin de semana.',
    stat1: 'FP1 + FP2',
    stat2: 'Aprender',
    stat3: 'Media'
  },
  sabado: {
    kicker: 'Día 2',
    title: 'Sábado — Clasificar y fijar la parrilla',
    body: 'La prioridad cambia: ya no se busca solo aprender, sino transformar el ritmo en una vuelta perfecta para salir delante.',
    stat1: 'FP3 + Q1-Q3',
    stat2: 'Ordenar la parrilla',
    stat3: 'Alta'
  },
  domingo: {
    kicker: 'Día 3',
    title: 'Domingo — Ejecutar la estrategia',
    body: 'La carrera combina ritmo, degradación, adelantamientos y decisiones de boxes. Aquí se convierten los datos en puntos.',
    stat1: 'Carrera',
    stat2: 'Puntuar',
    stat3: 'Máxima'
  }
};

const METRIC_DATA = {
  power: {
    kicker: 'Comparador técnico',
    title: 'Más protagonismo eléctrico',
    desc: 'En 2026 el sistema híbrido concede mucho más peso al componente eléctrico, cambiando la entrega de energía y la estrategia de adelantamiento.',
    v2025: '160 kW',
    v2026: '350 kW',
    w2025: '35%',
    w2026: '78%'
  },
  size: {
    kicker: 'Comparador técnico',
    title: 'Coches más compactos',
    desc: 'Los monoplazas se reducen para ser más ágiles, mejorar el seguimiento en curva y facilitar maniobras rueda a rueda.',
    v2025: 'Largo base',
    v2026: '−20 cm',
    w2025: '88%',
    w2026: '72%'
  },
  weight: {
    kicker: 'Comparador técnico',
    title: 'Menos masa, más agilidad',
    desc: 'La reducción de peso afecta frenada, cambios de dirección y sensación general del coche en curvas enlazadas.',
    v2025: '798 kg',
    v2026: '768 kg',
    w2025: '84%',
    w2026: '74%'
  },
  aero: {
    kicker: 'Comparador técnico',
    title: 'Aerodinámica adaptable',
    desc: 'Se pasa de un sistema más estático con DRS a superficies móviles con modos diferenciados para recta y curva.',
    v2025: 'DRS',
    v2026: 'Modo X / Z',
    w2025: '42%',
    w2026: '86%'
  }
};

function driverFlagPath(countryName) {
  return `./Images/Banderas/${countryName}.png`;
}

function circuitPhotoPath(name) {
  const fileMap = {
    'Australia': 'Gp Australia.jpg',
    'China': 'Gp China.jpg',
    'Japon': 'Gp Japon.jpg',
    'Barein': 'Gp Barein.jpg',
    'Arabia Saudi': 'Gp Arabia.jpg',
    'Usa': 'Gp Miami.jpg',
    'Canada': 'Gp Canada.jpg',
    'Monaco': 'Gp Monaco.jpg',
    'Spain': 'Gp Spain.jpg',
    'Austria': 'Gp Austria.jpg',
    'Gran Bretaña': 'Gp GranBretaña.jpg',
    'Belgica': 'Gp Belgica.jpg',
    'Hungria': 'Gp Hungria.jpg',
    'Holanda': 'Gp Holanda.jpg',
    'Italia': 'Gp Italia.jpg',
    'Azerbaijan': 'Gp Azerbaijan.jpg',
    'Singapur': 'Gp Singapur.jpg',
    'Mexico': 'Gp Mexico.jpg',
    'Brasil': 'Gp Brasil.jpg',
    'Qatar': 'Gp Qatar.jpg',
    'Abu Dabi': 'Gp Abu Dabi.jpg'
  };

  return `./Images/Circuitos/${fileMap[name] || `Gp ${name}.jpg`}`;
}

function raceFlagPath(name) {
  return `./Images/Banderas/${name}.png`;
}

const RACES = [
  { n:1, name:'Australia', city:'Melbourne', date:'06-08 Mar', flag:'🇦🇺', country:'Australia', continent:'oceania', length:'5.278 km', laps:'58', desc:'Albert Park abre la temporada con un trazado semipermanente rápido y técnico.', flagImg: raceFlagPath('Australia'), circuitImg: circuitPhotoPath('Australia') },
  { n:2, name:'China', city:'Shanghai', date:'13-15 Mar', flag:'🇨🇳', country:'China', continent:'asia', length:'5.451 km', laps:'56', desc:'Shanghai mezcla curvas largas, una enorme recta trasera y frenadas fuertes.', flagImg: raceFlagPath('China'), circuitImg: circuitPhotoPath('China') },
  { n:3, name:'Japon', city:'Suzuka', date:'27-29 Mar', flag:'🇯🇵', country:'Japon', continent:'asia', length:'5.807 km', laps:'53', desc:'Suzuka es uno de los circuitos más respetados del mundo por sus eses y su ritmo de alta velocidad.', flagImg: raceFlagPath('Japon'), circuitImg: circuitPhotoPath('Japon') },
  { n:4, name:'Barein', city:'Sakhir', date:'CANCELADO', flag:'🇧🇭', country:'Barein', continent:'middleeast', length:'5.412 km', laps:'57', desc:'Sakhir combina largas rectas con tracción crítica a la salida de curva.', flagImg: raceFlagPath('Barein'), circuitImg: circuitPhotoPath('Barein') },
  { n:5, name:'Arabia Saudi', city:'Jeddah', date:'CANCELADO', flag:'🇸🇦', country:'Arabia Saudi', continent:'middleeast', length:'6.174 km', laps:'50', desc:'Jeddah es rapidísimo, urbano y muy exigente por sus muros cercanos.', flagImg: raceFlagPath('Arabia Saudi'), circuitImg: circuitPhotoPath('Arabia Saudi') },
  { n:6, name:'Usa', city:'Miami', date:'01-03 May', flag:'🇺🇸', country:'Usa', continent:'america', length:'5.412 km', laps:'57', desc:'Circuito moderno alrededor del Hard Rock Stadium con una larga recta y chicane lenta.', flagImg: raceFlagPath('Usa'), circuitImg: circuitPhotoPath('Usa') },
  { n:7, name:'Canada', city:'Montréal', date:'22-24 May', flag:'🇨🇦', country:'Canada', continent:'america', length:'4.361 km', laps:'70', desc:'Gilles Villeneuve castiga los frenos y premia la confianza sobre los pianos.', flagImg: raceFlagPath('Canada'), circuitImg: circuitPhotoPath('Canada') },
  { n:8, name:'Monaco', city:'Mónaco', date:'05-07 Jun', flag:'🇲🇨', country:'Monaco', continent:'europe', length:'3.337 km', laps:'78', desc:'La joya urbana de la F1: estrecha, lenta y extremadamente precisa.', flagImg: raceFlagPath('Monaco'), circuitImg: circuitPhotoPath('Monaco') },
  { n:9, name:'Spain', city:'Barcelona', date:'12-14 Jun', flag:'🇪🇸', country:'Spain', continent:'europe', length:'4.657 km', laps:'66', desc:'Circuito muy completo, tradicionalmente usado para evaluar aerodinámica y equilibrio.', flagImg: raceFlagPath('Spain'), circuitImg: circuitPhotoPath('Spain') },
  { n:10, name:'Austria', city:'Spielberg', date:'26-28 Jun', flag:'🇦🇹', country:'Austria', continent:'europe', length:'4.318 km', laps:'71', desc:'Red Bull Ring destaca por sus desniveles, frenadas potentes y vuelta muy corta.', flagImg: raceFlagPath('Austria'), circuitImg: circuitPhotoPath('Austria') },
  { n:11, name:'Gran Bretaña', city:'Silverstone', date:'03-05 Jul', flag:'🇬🇧', country:'Gran Bretaña', continent:'europe', length:'5.891 km', laps:'52', desc:'Silverstone ofrece curvas icónicas de altísima velocidad y enorme historia.', flagImg: raceFlagPath('Gran Bretaña'), circuitImg: circuitPhotoPath('Gran Bretaña') },
  { n:12, name:'Belgica', city:'Spa-Francorchamps', date:'17-19 Jul', flag:'🇧🇪', country:'Belgica', continent:'europe', length:'7.004 km', laps:'44', desc:'Spa es largo, cambiante y legendario por Eau Rouge-Raidillon y su clima impredecible.', flagImg: raceFlagPath('Belgica'), circuitImg: circuitPhotoPath('Belgica') },
  { n:13, name:'Hungria', city:'Budapest', date:'24-26 Jul', flag:'🇭🇺', country:'Hungria', continent:'europe', length:'4.381 km', laps:'70', desc:'Hungaroring exige carga aerodinámica y paciencia en clasificación.', flagImg: raceFlagPath('Hungria'), circuitImg: circuitPhotoPath('Hungria') },
  { n:14, name:'Holanda', city:'Zandvoort', date:'21-23 Ago', flag:'🇳🇱', country:'Holanda', continent:'europe', length:'4.259 km', laps:'72', desc:'Zandvoort mezcla banking y curvas rápidas junto al mar.', flagImg: raceFlagPath('Holanda'), circuitImg: circuitPhotoPath('Holanda') },
  { n:15, name:'Italia', city:'Monza', date:'04-06 Sep', flag:'🇮🇹', country:'Italia', continent:'europe', length:'5.793 km', laps:'53', desc:'El Templo de la Velocidad: bajísima carga y rectas interminables.', flagImg: raceFlagPath('Italia'), circuitImg: circuitPhotoPath('Italia') },
  { n:16, name:'Azerbaijan', city:'Bakú', date:'25-27 Sep', flag:'🇦🇿', country:'Azerbaijan', continent:'asia', length:'6.003 km', laps:'51', desc:'Bakú combina castillo medieval, muros cercanos y una recta final larguísima.', flagImg: raceFlagPath('Azerbaijan'), circuitImg: circuitPhotoPath('Azerbaijan') },
  { n:17, name:'Singapur', city:'Singapur', date:'09-11 Oct', flag:'🇸🇬', country:'Singapur', continent:'asia', length:'4.940 km', laps:'62', desc:'Marina Bay es una de las carreras nocturnas más duras físicamente.', flagImg: raceFlagPath('Singapur'), circuitImg: circuitPhotoPath('Singapur') },
  { n:18, name:'Mexico', city:'Ciudad de México', date:'30 Oct-01 Nov', flag:'🇲🇽', country:'Mexico', continent:'america', length:'4.304 km', laps:'71', desc:'La altura cambia por completo el comportamiento aerodinámico y del motor.', flagImg: raceFlagPath('Mexico'), circuitImg: circuitPhotoPath('Mexico') },
  { n:19, name:'Brasil', city:'São Paulo', date:'06-08 Nov', flag:'🇧🇷', country:'Brasil', continent:'america', length:'4.309 km', laps:'71', desc:'Interlagos suele regalar carreras caóticas, estrategia viva y adelantamientos.', flagImg: raceFlagPath('Brasil'), circuitImg: circuitPhotoPath('Brasil') },
  { n:20, name:'Qatar', city:'Lusail', date:'27-29 Nov', flag:'🇶🇦', country:'Qatar', continent:'middleeast', length:'5.419 km', laps:'57', desc:'Lusail exige mucha carga, especialmente en curvas rápidas encadenadas.', flagImg: raceFlagPath('Qatar'), circuitImg: circuitPhotoPath('Qatar') },
  { n:21, name:'Abu Dabi', city:'Yas Island', date:'04-06 Dic', flag:'🇦🇪', country:'Abu Dabi', continent:'middleeast', length:'5.281 km', laps:'58', desc:'Yas Marina cierra el campeonato con una carrera al atardecer y rectas largas.', flagImg: raceFlagPath('Abu Dabi'), circuitImg: circuitPhotoPath('Abu Dabi') }
];

const CONTINENT_INFO = {
  oceania: {
    name: 'Oceanía',
    desc: 'La temporada arranca en Australia con la primera parada del recorrido mundial.'
  },
  asia: {
    name: 'Asia',
    desc: 'Asia concentra citas técnicas y veloces, desde Suzuka hasta Singapur.'
  },
  europe: {
    name: 'Europa',
    desc: 'El corazón tradicional del calendario reúne varios de los circuitos más históricos de la F1.'
  },
  america: {
    name: 'América',
    desc: 'América aporta altitud, ambiente masivo y trazados urbanos y permanentes muy distintos.'
  },
  middleeast: {
    name: 'Medio Oriente',
    desc: 'El cierre de temporada y varias noches espectaculares llegan desde el desierto.'
  }
};

const TEAM_COLORS = {
  'McLaren': '#FF8000',
  'Red Bull': '#3671C6',
  'Mercedes': '#00D2BE',
  'Ferrari': '#E8002D',
  'Aston Martin': '#229971',
  'Racing Bulls': '#6692FF',
  'Williams': '#64C4FF',
  'Haas': '#B6BABD',
  'Audi': '#FF0000',
  'Alpine': '#0090FF',
  'Cadillac': '#888888'
};

const DRIVERS = [
  { name:'Lando Norris', team:'McLaren', nat:'Británico', country:'Gran Bretaña', photo:'./Images/Pilotos/Norris.png', initials:'LN', debut:2019, wins:20, podiums:47, poles:18, bio:'Campeón del Mundo 2025. Llegó a F1 con McLaren en 2019 y se convirtió en el piloto más longevo de la historia del equipo. Su primera victoria llegó en Miami 2024, abriendo las compuertas a una temporada 2025 histórica.' },
  { name:'Oscar Piastri', team:'McLaren', nat:'Australiano', country:'Australia', photo:'./Images/Pilotos/Piastri.png', initials:'OP', debut:2023, wins:8, podiums:28, poles:5, bio:'El australiano fue el gran rival de Norris en 2025. Campeón de F2 2021, debutó en F1 con McLaren y rápidamente se consolidó como uno de los talentos más completos de la parrilla.' },
  { name:'Max Verstappen', team:'Red Bull', nat:'Neerlandés', country:'Holanda', photo:'./Images/Pilotos/Max.png', initials:'MV', debut:2015, wins:63, podiums:110, poles:40, bio:'Cuádruple campeón del mundo (2021-2024). El piloto más dominante de su generación, debutó con 17 años en Toro Rosso. Su contrato con Red Bull se extiende hasta 2028.' },
  { name:'Isack Hadjar', team:'Red Bull', nat:'Francés', country:'Francia', photo:'./Images/Pilotos/Hadjar.png', initials:'IH', debut:2026, wins:0, podiums:0, poles:0, bio:'Joven promesa del programa Red Bull. Ascendió tras una sólida temporada con Racing Bulls en 2025.' },
  { name:'George Russell', team:'Mercedes', nat:'Británico', country:'Gran Bretaña', photo:'./Images/Pilotos/Russell.png', initials:'GR', debut:2019, wins:3, podiums:20, poles:4, bio:'El ancla de Mercedes durante la transición post-Hamilton.' },
  { name:'Kimi Antonelli', team:'Mercedes', nat:'Italiano', country:'Italia', photo:'./Images/Pilotos/Antonelli.png', initials:'KA', debut:2025, wins:3, podiums:3, poles:1, bio:'La gran promesa italiana. Sucesor directo de Hamilton en Mercedes.' },
  { name:'Charles Leclerc', team:'Ferrari', nat:'Monegasco', country:'Monaco', photo:'./Images/Pilotos/Leclerc.png', initials:'CL', debut:2018, wins:8, podiums:44, poles:25, bio:'El piloto más querido de la Scuderia. Tiene un contrato hasta 2029 y sueña con el título.' },
  { name:'Lewis Hamilton', team:'Ferrari', nat:'Británico', country:'Gran Bretaña', photo:'./Images/Pilotos/Hamilton.png', initials:'LH', debut:2007, wins:103, podiums:197, poles:104, bio:'Siete veces campeón del mundo y uno de los pilotos más dominantes de la historia.' },
  { name:'Fernando Alonso', team:'Aston Martin', nat:'Español', country:'Spain', photo:'./Images/Pilotos/Alonso.png', initials:'FA', debut:2001, wins:32, podiums:106, poles:22, bio:'El piloto más experimentado del grid. Busca un improbable tercer título.' },
  { name:'Lance Stroll', team:'Aston Martin', nat:'Canadiense', country:'Canada', photo:'./Images/Pilotos/Stroll.png', initials:'LS', debut:2017, wins:0, podiums:3, poles:1, bio:'Velocidad en mojado y clasificación como puntos fuertes.' },
  { name:'Liam Lawson', team:'Racing Bulls', nat:'Neozelandés', country:'nueva zelanda', photo:'./Images/Pilotos/Lawson.png', initials:'LL', debut:2023, wins:0, podiums:0, poles:0, bio:'Piloto sólido del programa Red Bull.' },
  { name:'Arvid Lindblad', team:'Racing Bulls', nat:'Británico-Sueco', country:'Gran Bretaña', photo:'./Images/Pilotos/Lindblad.png', initials:'AL', debut:2026, wins:0, podiums:0, poles:0, bio:'Uno de los rookies más esperados de 2026.' },
  { name:'Alex Albon', team:'Williams', nat:'Tailandés', country:'Thailand', photo:'./Images/Pilotos/Albon.png', initials:'AA', debut:2019, wins:0, podiums:2, poles:0, bio:'Consistencia y gran rendimiento en medio campo.' },
  { name:'Carlos Sainz', team:'Williams', nat:'Español', country:'Spain', photo:'./Images/Pilotos/sainz.png', initials:'CS', debut:2015, wins:3, podiums:23, poles:5, bio:'Uno de los pilotos más maduros y completos de la parrilla.' },
  { name:'Esteban Ocon', team:'Haas', nat:'Francés', country:'Francia', photo:'./Images/Pilotos/Ocon.png', initials:'EO', debut:2017, wins:1, podiums:4, poles:0, bio:'Experiencia y capacidad de maximizar oportunidades.' },
  { name:'Ollie Bearman', team:'Haas', nat:'Británico', country:'Gran Bretaña', photo:'./Images/Pilotos/Bearman.png', initials:'OB', debut:2024, wins:0, podiums:0, poles:0, bio:'Talento joven vinculado a la academia Ferrari.' },
  { name:'Nico Hülkenberg', team:'Audi', nat:'Alemán', country:'alemania', photo:'./Images/Pilotos/Hulkenberg.png', initials:'NH', debut:2010, wins:0, podiums:0, poles:1, bio:'Lidera el proyecto Audi como piloto senior.' },
  { name:'Gabriel Bortoleto', team:'Audi', nat:'Brasileño', country:'Brasil', photo:'./Images/Pilotos/Bortoleto.png', initials:'GB', debut:2025, wins:0, podiums:0, poles:0, bio:'Nueva generación sudamericana en la parrilla.' },
  { name:'Pierre Gasly', team:'Alpine', nat:'Francés', country:'Francia', photo:'./Images/Pilotos/Gasly.png', initials:'PG', debut:2017, wins:1, podiums:5, poles:0, bio:'Busca devolver a Alpine a posiciones más competitivas.' },
  { name:'Franco Colapinto', team:'Alpine', nat:'Argentino', country:'Argentina', photo:'./Images/Pilotos/Colapinto.png', initials:'FC', debut:2024, wins:0, podiums:0, poles:0, bio:'La gran sensación latinoamericana.' },
  { name:'Sergio Pérez', team:'Cadillac', nat:'Mexicano', country:'Mexico', photo:'./Images/Pilotos/Perez.png', initials:'SP', debut:2011, wins:6, podiums:40, poles:3, bio:'Ídolo mexicano y pieza clave en el nuevo proyecto Cadillac.' },
  { name:'Valtteri Bottas', team:'Cadillac', nat:'Finlandés', country:'Finlandia', photo:'./Images/Pilotos/Bottas.png', initials:'VB', debut:2013, wins:10, podiums:67, poles:20, bio:'Veterano con enorme experiencia técnica.' }
];

const Q_DETAILS = {
  q1: {
    title: 'Q1 — La gran criba',
    body: 'Los 20 pilotos disponen de 18 minutos para marcar su mejor vuelta. Los 5 más lentos quedan eliminados y fijan su posición entre el 16° y el 20°.'
  },
  q2: {
    title: 'Q2 — Batalla del medio campo',
    body: 'Con 15 pilotos y 15 minutos, la presión aumenta. Los 5 más lentos ocupan posiciones del 11° al 15°.'
  },
  q3: {
    title: 'Q3 — La lucha por la pole',
    body: 'Solo 10 pilotos y 12 minutos para definir las 10 primeras posiciones. Aquí se decide la pole position.'
  }
};

function show(id, btn) {
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('on'));
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('on');
  btn.classList.add('active');
}

function jumpToSection(id, btn) {
  document.querySelectorAll('.story-step').forEach(s => s.classList.remove('active-story'));
  btn.classList.add('active-story');

  const targetPill = [...document.querySelectorAll('.pill')].find(p =>
    p.textContent.toLowerCase().includes(
      id === 'cambios' ? 'cambios' :
      id === 'weekend' ? 'fin' :
      id === 'calendario' ? 'calendario' : 'pilotos'
    )
  );

  if (targetPill) show(id, targetPill);
}

function renderPts(data, containerId, maxPts) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = data.map(([pos, pts]) => {
    const barWidth = Math.round((pts / maxPts) * 60);
    const cls = POS_CLASS[pos] || '';
    return `
      <div class="pr">
        <span class="pnum ${cls}">${pos}</span>
        <span class="plbl">
          <strong>${POS_LABELS[pos] || pos + 'º'}</strong>${pts} puntos
        </span>
        <div class="pbar-wrap">
          <div class="pbar" style="width:${barWidth}px;"></div>
          <span class="pv">${pts}</span>
        </div>
      </div>`;
  }).join('');
}

function selectWeekendStage(stage, btn) {
  document.querySelectorAll('.flow-node').forEach(n => n.classList.remove('active-flow'));
  if (btn) btn.classList.add('active-flow');

  const data = WEEKEND_STAGES[stage];
  document.getElementById('weekendKicker').textContent = data.kicker;
  document.getElementById('weekendTitle').textContent = data.title;
  document.getElementById('weekendBody').textContent = data.body;
  document.getElementById('weekendStat1').textContent = data.stat1;
  document.getElementById('weekendStat2').textContent = data.stat2;
  document.getElementById('weekendStat3').textContent = data.stat3;
}

function selectMetric(metric, btn) {
  document.querySelectorAll('.metric-btn').forEach(b => b.classList.remove('active-metric'));
  if (btn) btn.classList.add('active-metric');

  const data = METRIC_DATA[metric];
  document.getElementById('metricKicker').textContent = data.kicker;
  document.getElementById('metricTitle').textContent = data.title;
  document.getElementById('metricDesc').textContent = data.desc;
  document.getElementById('value2025').textContent = data.v2025;
  document.getElementById('value2026').textContent = data.v2026;
  document.getElementById('bar2025').style.width = data.w2025;
  document.getElementById('bar2026').style.width = data.w2026;
}

function selQ(id, el) {
  document.querySelectorAll('.qc').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');

  const info = Q_DETAILS[id];
  document.getElementById('qd').classList.add('on');
  document.getElementById('qdt').textContent = info.title;
  document.getElementById('qdb').textContent = info.body;
}

function selectFlag(flagId, el) {
  document.querySelectorAll('.fcard').forEach(card => card.classList.remove('active-flag'));
  if (el) el.classList.add('active-flag');

  const data = FLAG_DETAILS[flagId];
  const preview = document.getElementById('flagPreview');
  preview.className = 'flag-preview ' + data.previewClass;
  document.getElementById('flagTitle').textContent = data.title;
  document.getElementById('flagMeaning').textContent = data.meaning;
  document.getElementById('flagUsage').textContent = data.usage;
}

function renderContinentInfo(continentKey) {
  const info = CONTINENT_INFO[continentKey];
  const box = document.getElementById('continentInfo');
  if (!box || !info) return;

  box.innerHTML = `
    <div class="continent-panel active-panel">
      <div class="continent-name">${info.name}</div>
      <div class="continent-desc">${info.desc}</div>
    </div>
  `;

  document.querySelectorAll('.continent-node').forEach(btn => {
    btn.classList.toggle('active-continent', btn.dataset.continent === continentKey);
  });
}

function bindContinentNodes() {
  document.querySelectorAll('.continent-node').forEach(btn => {
    btn.addEventListener('click', () => {
      renderContinentInfo(btn.dataset.continent);
    });
  });
}

function renderCalendar() {
  const el = document.getElementById('callist');
  if (!el) return;

  el.innerHTML = RACES.map((r, index) => `
    <div class="race ${index === 0 ? 'active-race' : ''}" onclick="selectRace('${r.name.replace(/'/g, "\\'")}', this)">
      <div class="race-num">${r.n}</div>
      <div class="race-flag-wrap">
        <img class="race-flag-img" src="${r.flagImg}" alt="Bandera de ${r.country}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div class="race-flag-emoji" style="display:none;">${r.flag}</div>
      </div>
      <div class="race-info">
        <div class="race-name">${r.name}</div>
        <div class="race-det">${r.city}</div>
      </div>
      <div class="race-date">${r.date}</div>
    </div>
  `).join('');

  renderCircuitMiniCards();
  bindContinentNodes();
  renderContinentInfo('oceania');

  if (RACES.length) selectRace(RACES[0].name);
}

function renderCircuitMiniCards() {
  const grid = document.getElementById('circuitCardsGrid');
  if (!grid) return;

  grid.innerHTML = RACES.slice(0, 6).map((race, index) => `
    <div class="circuit-mini-card ${index === 0 ? 'active-mini' : ''}"
         onclick="selectRace('${race.name.replace(/'/g, "\\'")}'); activateMini('${race.name.replace(/'/g, "\\'")}')">
      <div class="circuit-mini-thumb-wrap">
        <img class="circuit-mini-thumb" src="${race.circuitImg}" alt="${race.name}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
        <div class="circuit-mini-fallback" style="display:none;">Añade miniatura</div>
      </div>
      <div class="circuit-mini-info">
        <div class="circuit-mini-name">${race.name}</div>
        <div class="circuit-mini-city">${race.city}</div>
      </div>
    </div>
  `).join('');
}

function activateMini(name) {
  document.querySelectorAll('.circuit-mini-card').forEach(card => card.classList.remove('active-mini'));
  const match = [...document.querySelectorAll('.circuit-mini-card')].find(card => card.textContent.includes(name));
  if (match) match.classList.add('active-mini');
}

function animateCircuitChange(newSrc) {
  const img = document.getElementById('circuitImg');
  const fallback = document.getElementById('circuitFallback');
  const backdrop = document.getElementById('netflixBackdrop');

  img.classList.add('netflix-out');

  setTimeout(() => {
    img.src = newSrc;
    img.onload = () => {
      fallback.style.display = 'none';
      img.style.display = 'block';
      backdrop.style.backgroundImage = `url('${newSrc}')`;
      img.classList.remove('netflix-out');
      img.classList.add('netflix-in');
      setTimeout(() => img.classList.remove('netflix-in'), 500);
    };
    img.onerror = () => {
      img.style.display = 'none';
      fallback.style.display = 'grid';
      img.classList.remove('netflix-out');
    };
  }, 220);
}

function selectRace(name, el) {
  const race = RACES.find(r => r.name === name);
  if (!race) return;

  document.querySelectorAll('.race').forEach(card => card.classList.remove('active-race'));
  if (el) el.classList.add('active-race');
  else {
    const match = [...document.querySelectorAll('.race')].find(card => card.textContent.includes(name));
    if (match) match.classList.add('active-race');
  }

  activateMini(name);
  renderContinentInfo(race.continent);

  document.getElementById('circuitTitle').textContent = race.name;
  document.getElementById('circuitSubtitle').textContent = `${race.city} · ${race.date}`;
  document.getElementById('circuitCountry').textContent = race.country;
  document.getElementById('circuitLength').textContent = race.length;
  document.getElementById('circuitLaps').textContent = race.laps;
  document.getElementById('circuitDesc').textContent = race.desc;

  document.getElementById('posterRound').textContent = `Ronda ${race.n}`;
  document.getElementById('posterDate').textContent = race.date;
  document.getElementById('posterTitle').textContent = race.name;
  document.getElementById('posterCity').textContent = race.city;

  animateCircuitChange(race.circuitImg);

  const flagImg = document.getElementById('circuitFlagImg');
  const flagEmoji = document.getElementById('circuitFlagEmoji');

  flagImg.src = race.flagImg;
  flagImg.classList.add('show');
  flagEmoji.style.display = 'none';

  flagImg.onerror = () => {
    flagImg.classList.remove('show');
    flagEmoji.style.display = 'block';
    flagEmoji.textContent = race.flag;
  };
}

function renderTeamNav() {
  const allTeams = ['Todos', ...new Set(DRIVERS.map(d => d.team))];
  const tnav = document.getElementById('tnav');
  if (!tnav) return;

  tnav.innerHTML = allTeams.map((t, i) =>
    `<button class="tbtn${i === 0 ? ' ta' : ''}" onclick="filterTeam('${t}', this)">${t}</button>`
  ).join('');
}

function filterTeam(team, btn) {
  document.querySelectorAll('.tbtn').forEach(b => b.classList.remove('ta'));
  btn.classList.add('ta');

  const filtered = team === 'Todos' ? DRIVERS : DRIVERS.filter(d => d.team === team);
  renderDrivers(filtered);
}

function renderDrivers(list) {
  const g = document.getElementById('drvgrid');
  if (!g) return;

  g.innerHTML = list.map(d => {
    const col = TEAM_COLORS[d.team] || '#888';
    const flagSrc = driverFlagPath(d.country);

    return `
      <div class="drv-card" onclick="handlePilotSelection(this, '${d.name.replace(/'/g, "\\'")}')">
        <div class="drv-avatar" style="border-color:${col}; background-color:${col}22;">
          <img
            class="drv-photo"
            src="${d.photo}"
            alt="${d.name}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="drv-fallback" style="display:none; color:${col};">${d.initials}</div>
        </div>

        <div class="drv-top-meta">
          <img class="driver-flag-mini" src="${flagSrc}" alt="${d.nat}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';" />
          <span class="driver-flag-fallback" style="display:none;">🏳️</span>
        </div>

        <div class="drv-name">${d.name}</div>
        <div class="drv-team">${d.team}</div>
      </div>
    `;
  }).join('');
}

function handlePilotSelection(card, name) {
  document.querySelectorAll('.drv-card').forEach(c => c.classList.remove('selected-driver'));
  card.classList.add('selected-driver');

  setTimeout(() => {
    openDriver(name);
  }, 220);
}

function openDriver(name) {
  const d = DRIVERS.find(x => x.name === name);
  if (!d) return;

  const col = TEAM_COLORS[d.team] || '#888';
  const avatar = document.getElementById('mavatar');

  avatar.innerHTML = `
    <img
      class="modal-photo"
      src="${d.photo}"
      alt="${d.name}"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    />
    <div class="modal-fallback" style="display:none; color:${col};">${d.initials}</div>
  `;
  avatar.style.backgroundColor = `${col}22`;
  avatar.style.borderColor = col;

  document.getElementById('mname').textContent = d.name;
  document.getElementById('mteam').textContent = d.team;
  document.getElementById('mnat').textContent = d.nat;
  document.getElementById('mdebut').textContent =
    d.debut === 2026 ? '★ Rookie 2026' : `Debut en F1: ${d.debut}`;

  const modalFlag = document.getElementById('mflag');
  if (modalFlag) {
    modalFlag.src = driverFlagPath(d.country);
    modalFlag.style.display = 'inline-block';
    modalFlag.onerror = () => {
      modalFlag.style.display = 'none';
    };
  }

  document.getElementById('mstats').innerHTML = `
    <div class="mstat">
      <div class="mstat-val">${d.wins}</div>
      <div class="mstat-lbl">Victorias</div>
    </div>
    <div class="mstat">
      <div class="mstat-val" style="color:${col};">${d.podiums}</div>
      <div class="mstat-lbl">Podiums</div>
    </div>
    <div class="mstat">
      <div class="mstat-val" style="color:#FFD700;">${d.poles}</div>
      <div class="mstat-lbl">Poles</div>
    </div>
  `;

  document.getElementById('mbio').textContent = d.bio;
  document.getElementById('overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
  renderPts(MAIN_PTS, 'mp', 25);
  renderPts(SPRINT_PTS, 'sp2', 8);
  renderPts(SPRINT_PTS, 'spd', 8);

  renderCalendar();
  renderTeamNav();
  renderDrivers(DRIVERS);

  selectFlag('yellow', document.querySelector('.fcard'));
  selectWeekendStage('viernes', document.querySelector('.flow-node'));
  selectMetric('power', document.querySelector('.metric-btn'));
});
