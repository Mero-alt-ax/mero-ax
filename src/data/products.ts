import { Product, Category, GuideArticle } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_pond_garden_koi_1792592119754.jpg';
export const KOI_IMAGE = '/src/assets/images/cat_koifutter_pellets_1792592120724.jpg';
export const TEICHPFLEGE_IMAGE = '/src/assets/images/cat_teichpflege_water_1792592122115.jpg';
export const PUMP_IMAGE = '/src/assets/images/cat_teichtechnik_pump_1792592122383.jpg';
export const FILTER_IMAGE = '/src/assets/images/cat_teichfilter_system_1792592122609.jpg';

export const CATEGORIES: Category[] = [
  {
    id: 'koifutter',
    slug: 'koifutter',
    name: 'Koifutter',
    description: 'Erstklassiges Wachstums-, Farb- und Ganzjahresfutter für gesunde, vitale Koi.',
    itemCount: 6,
    image: KOI_IMAGE,
    subcategories: ['Alle Koifutter', 'Ganzjahresfutter', 'Farbfutter', 'Wachstumsfutter', 'Sinkfutter', 'Spirulina-Pellets'],
    anchorId: 'koifutter',
  },
  {
    id: 'teichpflege',
    slug: 'teichpflege',
    name: 'Teichpflege',
    description: 'Biologische Wasseraufbereitung, Algenbekämpfung und Starterbakterien für glasklares Wasser.',
    itemCount: 6,
    image: TEICHPFLEGE_IMAGE,
    subcategories: ['Wasserpflege', 'Algenbekämpfung', 'Wasseraufbereitung', 'Reinigungsprodukte', 'Bakterien'],
    anchorId: 'teichpflege',
  },
  {
    id: 'teichtechnik',
    slug: 'teichtechnik',
    name: 'Teichtechnik',
    description: 'Zuverlässige Energiespar-Teichpumpen, UVC-Klärer und moderne Belüftungssysteme.',
    itemCount: 6,
    image: PUMP_IMAGE,
    subcategories: ['Teichpumpen', 'Filteranlagen', 'UVC-Geräte', 'Belüftung', 'Wassertechnik'],
    anchorId: 'teichtechnik',
  },
  {
    id: 'teichfilter',
    slug: 'teichfilter',
    name: 'Teichfilter & Filteranlagen',
    description: 'Hochwirksame Druck- und Mehrkammer-Biofilter für kristallklares und fischgerechtes Wasser.',
    itemCount: 3,
    image: FILTER_IMAGE,
    subcategories: ['Druckfilter', 'Mehrkammerfilter', 'Trommelfilter', 'Filtermedien'],
    anchorId: 'teichtechnik',
  },
  {
    id: 'teichpumpen',
    slug: 'teichpumpen',
    name: 'Teichpumpen',
    description: 'Regelbare Filter- und Bachlaufpumpen mit niedrigem Stromverbrauch für Dauerbetrieb.',
    itemCount: 4,
    image: PUMP_IMAGE,
    subcategories: ['Filterpumpen', 'Bachlaufpumpen', 'Regelbare Pumpen', 'Skimmer'],
    anchorId: 'teichtechnik',
  },
  {
    id: 'teichzubehoer',
    slug: 'teichzubehoer',
    name: 'Teichzubehör',
    description: 'Laubschutznetze, professionelle Teichkescher, Folienreparatur und LED-Beleuchtung.',
    itemCount: 4,
    image: HERO_IMAGE,
    subcategories: ['Laubschutznetze', 'Teichkescher', 'Teichfolie & Vlies', 'Teichbeleuchtung'],
    anchorId: 'produkte',
  },
];

export const PRODUCTS: Product[] = [
  // Koifutter
  {
    id: 'koi-1',
    slug: 'takazumi-easy-all-season-koifutter',
    name: 'Takazumi Easy Koi Food All Season (4,5 mm)',
    image: KOI_IMAGE,
    price: 38.90,
    originalPrice: 44.50,
    category: 'Koifutter',
    subcategory: 'Ganzjahresfutter',
    brand: 'Takazumi',
    available: true,
    stockCount: 28,
    rating: 4.9,
    reviewsCount: 34,
    weightOrVolume: '2,5 kg',
    description: 'Ausgewogenes Ganzjahresfutter für Nishikigoi ab 10°C Wassertemperatur. Leicht verdaulich, schont die Wasserqualität und unterstützt die Farbintensität.',
    features: [
      'Ganzjährig fütterbar ab 10°C Wassertemperatur',
      'Extrem niedrige Wasserbelastung durch optimale Verwertbarkeit',
      'Mit wertvollen Omega-3 & Omega-6 Fettsäuren',
      'Schwimmende 4,5 mm Pellets'
    ],
    specs: {
      'Pelletgröße': '4,5 mm (Medium)',
      'Rohprotein': '33,0 %',
      'Rohfett': '6,0 %',
      'Temperaturbereich': 'ab 10 °C Wassertemperatur',
      'Inhalt': '2,5 kg Standbeutel mit Zip-Verschluss'
    }
  },
  {
    id: 'koi-2',
    slug: 'hikari-friend-medium-koi-pellets',
    name: 'Hikari Friend Koi Pellets Medium',
    image: KOI_IMAGE,
    price: 49.95,
    originalPrice: 56.00,
    category: 'Koifutter',
    subcategory: 'Ganzjahresfutter',
    brand: 'Hikari',
    available: true,
    stockCount: 19,
    rating: 4.8,
    reviewsCount: 42,
    weightOrVolume: '10 kg',
    description: 'Das bewährte Grundfutter von Japans Nr. 1 Koi-Futterhersteller. Bietet alle essenziellen Nährstoffe für gesundes Wachstum ohne Wassertrübung.',
    features: [
      'Ausgewogenes Nährstoffprofil für jeden Tag',
      'Angereichert mit stabilisiertem Vitamin C',
      'Fördert ein kräftiges Immunsystem',
      'Hervorragendes Preis-Leistungs-Verhältnis'
    ],
    specs: {
      'Pelletgröße': '5,0 - 5,5 mm',
      'Rohprotein': '28,0 %',
      'Rohfett': '3,0 %',
      'Herstellungsland': 'Japan',
      'Inhalt': '10 kg Sparsack'
    }
  },
  {
    id: 'koi-3',
    slug: 'coppens-spirulina-grower-premium',
    name: 'Coppens Spirulina Grower Premium Koifutter',
    image: KOI_IMAGE,
    price: 32.50,
    category: 'Koifutter',
    subcategory: 'Farbfutter',
    brand: 'Coppens',
    available: true,
    stockCount: 15,
    rating: 4.9,
    reviewsCount: 29,
    weightOrVolume: '3 kg',
    description: 'Hochwertiges Spezialfutter mit hohem Spirulina-Anteil für strahlende Farben und schnelles, harmonisches Muskelwachstum.',
    features: [
      'Mit echtem Spirulina-Algenmehl für brillante Kontraste',
      'Hoher Anteil leicht verdaulicher Proteine',
      'Keine Verfärbung des Teichwassers',
      'Ideal für die warme Jahreszeit (ab 15°C)'
    ],
    specs: {
      'Pelletgröße': '6 mm',
      'Rohprotein': '37,0 %',
      'Rohfett': '7,0 %',
      'Zusatz': 'Spirulina & Astaxanthin',
      'Inhalt': '3 kg'
    }
  },
  {
    id: 'koi-4',
    slug: 'takazumi-vital-wheatgerm-sinkfutter',
    name: 'Takazumi Vital Wheatgerm Sinkfutter',
    image: KOI_IMAGE,
    price: 42.90,
    category: 'Koifutter',
    subcategory: 'Sinkfutter',
    brand: 'Takazumi',
    available: true,
    stockCount: 12,
    rating: 5.0,
    reviewsCount: 18,
    weightOrVolume: '2,5 kg',
    description: 'Sinkendes Spezialfutter mit Weizenkeimen für das zeitige Frühjahr, den Spätherbst und kältere Wassertemperaturen ab 6°C.',
    features: [
      'Sinkendes Pelletfutter für stressfreie Nahrungsaufnahme am Teichboden',
      'Fütterbar bereits ab 6°C Wassertemperatur',
      'Hoher Weizenkeim-Anteil für schonende Verdauung',
      'Stärkt geschwächte Koi nach der Winterruhe'
    ],
    specs: {
      'Futtertyp': '100% Sinkend',
      'Pelletgröße': '4,5 mm',
      'Temperaturbereich': 'ab 6 °C',
      'Rohprotein': '35,0 %',
      'Inhalt': '2,5 kg'
    }
  },
  {
    id: 'koi-5',
    slug: 'saito-energy-color-growth-koifutter',
    name: 'Saito Energy CS Color & Growth Spitzenfutter',
    image: KOI_IMAGE,
    price: 54.90,
    originalPrice: 62.00,
    category: 'Koifutter',
    subcategory: 'Wachstumsfutter',
    brand: 'Saito',
    available: true,
    stockCount: 8,
    rating: 4.9,
    reviewsCount: 15,
    weightOrVolume: '3 kg',
    description: 'Premium Profifutter für anspruchsvolle Koi-Halter. Maximale Farbbrillanz bei tiefem Rot (Hi) und reinem Weiß (Shiroji).',
    features: [
      'Profi-Rezeptur mit Bio-Geflügelmehl und Krill',
      'Höchste biologische Verwertbarkeit',
      'Optimale Körperform ohne Verfettung',
      'Made in Germany'
    ],
    specs: {
      'Pelletgröße': '5 mm',
      'Rohprotein': '42,0 %',
      'Rohfett': '10,0 %',
      'Herstellung': 'Deutschland',
      'Inhalt': '3 kg Frischebeutel'
    }
  },
  {
    id: 'koi-6',
    slug: 'tripond-koi-sticks-3-farben',
    name: 'Tripond Koi & Teichfisch Sticks 3-Farben',
    image: KOI_IMAGE,
    price: 24.90,
    category: 'Koifutter',
    subcategory: 'Ganzjahresfutter',
    brand: 'Tripond',
    available: true,
    stockCount: 35,
    rating: 4.7,
    reviewsCount: 51,
    weightOrVolume: '50 Liter / 4 kg',
    description: 'Voluminöse Dreifarben-Futtersticks für alle Teichfische und Koi. Schwimmt lange an der Oberfläche und wird gierig angenommen.',
    features: [
      'Drei Sticks-Komponenten: Vitalität, Farbkraft und Weizenkeime',
      'Besonders schwimmfähig',
      'Sehr ergiebig im 50-Liter-Sack',
      'Für gemischte Fischteiche'
    ],
    specs: {
      'Form': 'Schwimmende Sticks',
      'Rohprotein': '23,0 %',
      'Rohfett': '3,0 %',
      'Volumen': '50 Liter',
      'Gewicht': 'ca. 4,1 kg'
    }
  },

  // Teichpflege
  {
    id: 'pflege-1',
    slug: 'tripond-fadenalgenvernichter-aktiv-sauerstoff',
    name: 'Tripond Fadenalgenvernichter mit Aktivsauerstoff',
    image: TEICHPFLEGE_IMAGE,
    price: 29.95,
    originalPrice: 34.90,
    category: 'Teichpflege',
    subcategory: 'Algenbekämpfung',
    brand: 'Tripond',
    available: true,
    stockCount: 45,
    rating: 4.9,
    reviewsCount: 88,
    weightOrVolume: '1.000 g (für 20.000 L)',
    description: 'Zerstört Fadenalgen innerhalb von 24 Stunden durch gezielte Sauerstofffreisetzung. Die abgestorbenen Algen schwimmen auf und können einfach abgekeschert werden.',
    features: [
      'Wirkt blitzschnell durch direkte Oxidation',
      'Frei von chemischen Algiziden und Schwermetallen',
      'Absolut unschädlich für Fische, Frösche und Pflanzen',
      'Reichert den Teich gleichzeitig mit lebenswichtigem Sauerstoff an'
    ],
    specs: {
      'Dosierung': 'ca. 30–50 g pro 1.000 Liter Teichwasser',
      'Wirkstoff': 'Natriumpercarbonat (Aktivsauerstoff)',
      'Reichweite': 'bis zu 20.000 Liter Teichwasser',
      'Gebinde': '1.000 g Eimer'
    }
  },
  {
    id: 'pflege-2',
    slug: 'oase-aquactiv-biokick-filterstarter',
    name: 'Oase AquaActiv BioKick Filterstarter-Bakterien',
    image: TEICHPFLEGE_IMAGE,
    price: 18.99,
    category: 'Teichpflege',
    subcategory: 'Bakterien',
    brand: 'Oase',
    available: true,
    stockCount: 30,
    rating: 4.9,
    reviewsCount: 63,
    weightOrVolume: '200 ml (für 10.000 L)',
    description: 'Erweckt die Filterbiologie im Frühjahr oder bei Neustart innerhalb weniger Tage zur vollen Leistungsfähigkeit. Über 10 Millionen aktive Mikroorganismen/ml.',
    features: [
      'Bringt Teichfilter innerhalb von 1–2 Wochen auf 100% Leistung',
      'Baut Ammonium, Ammoniak und Nitrit zuverlässig ab',
      'Einfache Anwendung direkt auf die Filtermedien',
      'Empfohlen nach jeder Medikamentenbehandlung'
    ],
    specs: {
      'Dosierung': '10 ml pro 1.000 Liter',
      'Reichweite': 'bis zu 10.000 Liter Teichvolumen',
      'Haltbarkeit': 'Trockenkonzentrat mit langer Lagerfähigkeit',
      'Inhalt': '200 ml'
    }
  },
  {
    id: 'pflege-3',
    slug: 'aqua-balance-biologischer-wasseraufbereiter',
    name: 'Aqua-Balance Biologischer Wasseraufbereiter & Teichklar',
    image: TEICHPFLEGE_IMAGE,
    price: 24.50,
    category: 'Teichpflege',
    subcategory: 'Wasseraufbereitung',
    brand: 'Aqua-Balance',
    available: true,
    stockCount: 22,
    rating: 4.8,
    reviewsCount: 31,
    weightOrVolume: '1.000 ml',
    description: 'Bindet Schwermetalle, neutralisiert aggressives Chlor aus Leitungswasser und schützt die empfindliche Schleimhaut der Koi durch organische Schutzkolloide.',
    features: [
      'Macht aggressives Leitungswasser fisch- und pflanzengerecht',
      'Fügt essenzielle Mineralien und B-Vitamine hinzu',
      'Verhindert Schockreaktionen nach Wasserwechseln',
      'Unterstützt klares, stabiles Wasser'
    ],
    specs: {
      'Reichweite': 'für bis zu 25.000 Liter',
      'Inhalt': '1.000 ml Dosierflasche',
      'Anwendungsbereich': 'Teichneuanlage, Nachfüllen, Wasserwechsel'
    }
  },
  {
    id: 'pflege-4',
    slug: 'jbl-pondcheck-wassertest-streifen',
    name: 'JBL PondCheck 6-in-1 Teich-Schnelltest',
    image: TEICHPFLEGE_IMAGE,
    price: 14.95,
    category: 'Teichpflege',
    subcategory: 'Wasserpflege',
    brand: 'JBL',
    available: true,
    stockCount: 50,
    rating: 4.7,
    reviewsCount: 74,
    description: 'Schnelle und präzise Bestimmung der wichtigsten 6 Wasserwerte (pH, GH, KH, Nitrit NO2, Nitrat NO3, Chlor) in nur 60 Sekunden.',
    features: [
      '6 lebenswichtige Wasserwerte in 60 Sekunden ablesen',
      'Farbvergleichsskala auf der Dose',
      'Verhindert gefährliche pH-Stürze rechtzeitig',
      '50 Teststreifen in versiegelter Röhre'
    ],
    specs: {
      'Parameter': 'pH, KH, GH, NO2, NO3, Cl2',
      'Anzahl Tests': '50 Teststreifen',
      'Messzeit': '60 Sekunden'
    }
  },
  {
    id: 'pflege-5',
    slug: 'tripond-teichschlammentferner-sauerstoff',
    name: 'Tripond Teichschlamm-Entferner 2-Komponenten',
    image: TEICHPFLEGE_IMAGE,
    price: 34.90,
    originalPrice: 39.90,
    category: 'Teichpflege',
    subcategory: 'Reinigungsprodukte',
    brand: 'Tripond',
    available: true,
    stockCount: 16,
    rating: 4.8,
    reviewsCount: 39,
    weightOrVolume: '2,5 kg (für 25.000 L)',
    description: 'Baut organischen Bodenschlamm, Blätter und Futterreste biologisch ab, ohne dass der Teich leergepumpt werden muss. Verhindert Faulgase.',
    features: [
      '2-Komponenten-System: Sauerstoff-Aktivator & Schlammabbau-Bakterien',
      'Verhindert Fäulnisprozesse und Schwefelwasserstoffgeruch',
      'Reduziert Nährstoffdepots für Algen dauerhaft',
      'Einfaches Einstreuen auf den Teichgrund'
    ],
    specs: {
      'Dosierung': '100 g pro 1.000 Liter',
      'Reichweite': '25.000 Liter',
      'Gebinde': '2,5 kg Eimer'
    }
  },
  {
    id: 'pflege-6',
    slug: 'oase-aquactiv-algo-universal-algenfrei',
    name: 'Oase AquaActiv AlGo Universal Algenbekämpfung',
    image: TEICHPFLEGE_IMAGE,
    price: 27.90,
    category: 'Teichpflege',
    subcategory: 'Algenbekämpfung',
    brand: 'Oase',
    available: true,
    stockCount: 20,
    rating: 4.8,
    reviewsCount: 47,
    weightOrVolume: '500 ml',
    description: 'Universelles Algenmittel gegen die häufigsten Algenarten wie Schwebealgen (grünes Wasser), Schmieralgen und Fadenalgen im Frühsommer.',
    features: [
      'Hemmt den Stoffwechsel der Algen ohne den Sauerstoffgehalt schlagartig zu senken',
      'Für Teiche bis 10.000 Liter',
      'Gezielte Wirkung im gesamten Wasserkörper'
    ],
    specs: {
      'Reichweite': '10.000 Liter',
      'Zulassung': 'Biozid-Registrier-Nr. N-22442 vorsichtig verwenden',
      'Inhalt': '500 ml'
    }
  },

  // Teichtechnik
  {
    id: 'tech-1',
    slug: 'aquaforte-dm-vario-10000s-filterpumpe',
    name: 'AquaForte DM-Vario 10000 S regelbare Filterpumpe',
    image: PUMP_IMAGE,
    price: 189.00,
    originalPrice: 229.00,
    category: 'Teichtechnik',
    subcategory: 'Teichpumpen',
    brand: 'AquaForte',
    available: true,
    stockCount: 14,
    rating: 4.9,
    reviewsCount: 52,
    description: 'Neueste Sinuswellen-Technologie für flüsterleisen Lauf und extrem geringen Stromverbrauch. Durchfluss von 30% bis 100% stufenlos regelbar.',
    features: [
      'Externer Controller mit Digitalanzeige und Pause-Funktion (Fütterung)',
      'Fördert Schmutzpartikel bis zu 6 mm Korngröße',
      'Trockenlauf- und Blockierschutz mit automatischer Abschaltung',
      'Geeignet für getauchte Aufstellung und Trockenaufstellung'
    ],
    specs: {
      'Leistung': '34 Watt bis 85 Watt',
      'Förderleistung': '6.000 bis 10.000 l/h stufenlos',
      'Max. Förderhöhe': '5,5 Meter',
      'Kabellänge': '10 m Pumpe zu Controller + 2 m Netzteil',
      'Garantie': '2 Jahre Herstellergarantie'
    }
  },
  {
    id: 'tech-2',
    slug: 'oase-filtoclear-12000-druckfilter-set',
    name: 'Oase FiltoClear 12000 Druckfilter mit integriertem UVC 18W',
    image: FILTER_IMAGE,
    price: 499.00,
    originalPrice: 569.00,
    category: 'Teichtechnik',
    subcategory: 'Filteranlagen',
    brand: 'Oase',
    available: true,
    stockCount: 7,
    rating: 5.0,
    reviewsCount: 38,
    description: 'Kompakter Hochleistungs-Druckfilter mit patentierter Easy-Clean Reinigungskurbel. Kann ebenerdig eingegraben werden und speist höher gelegene Bachläufe.',
    features: [
      'Integrierter 18 Watt UVC-Klärer gegen Schwebealgen und Keime',
      'Easy-Clean Technologie: Reinigung ohne Öffnen des Deckels',
      'Zulässiger Betriebsdruck ermöglicht Speisung von Wasserfällen',
      'Für Naturteiche bis 12 m³, Fischteiche bis 6 m³, Koiteiche bis 3 m³'
    ],
    specs: {
      'UVC-Leistung': '18 Watt',
      'Max. Teichvolumen (ohne Fisch)': '12.000 Liter',
      'Max. Teichvolumen (Koi)': '3.000 Liter',
      'Anschlüsse': '1" bis 1 1/2"',
      'Abmessungen': '380 x 510 mm'
    }
  },
  {
    id: 'tech-3',
    slug: 'osaga-uvc-klaerer-edelstahl-36w',
    name: 'Osaga Edelstahl UVC-Klärer Vorklärgerät 36 Watt',
    image: PUMP_IMAGE,
    price: 139.90,
    category: 'Teichtechnik',
    subcategory: 'UVC-Geräte',
    brand: 'Osaga',
    available: true,
    stockCount: 11,
    rating: 4.8,
    reviewsCount: 27,
    description: 'Hochwertiges Edelstahlgehäuse reflektiert die UV-Strahlung und erhöht die Entkeimungsleistung um bis zu 35% gegenüber Standard-Kunststoffgehäusen.',
    features: [
      'Hochglanzpolierter V4A-Edelstahl-Reaktorkörper',
      'Beseitigt grünes Wasser und Schwebealgen dauerhaft',
      'Senkt Keimdruck und Bakterienbelastung für gesunde Fische',
      'Inklusive transparenter Stufenschlauchtüllen'
    ],
    specs: {
      'Leistung': '36 Watt PL-L Lampe',
      'Max. Durchfluss': '10.000 l/h',
      'Empfohlene Teichgröße': 'bis 35.000 Liter',
      'Material': 'V4A Edelstahl rostfrei'
    }
  },
  {
    id: 'tech-4',
    slug: 'superfish-air-blow-50-beluefterset',
    name: 'SuperFish Air-Blow 50 Profi Membran-Teichbelüfter',
    image: PUMP_IMAGE,
    price: 79.95,
    originalPrice: 89.95,
    category: 'Teichtechnik',
    subcategory: 'Belüftung',
    brand: 'SuperFish',
    available: true,
    stockCount: 18,
    rating: 4.8,
    reviewsCount: 35,
    description: 'Wetterfeste Hochleistungs-Belüfterpumpe für ganzjährigen Sauerstoffeintrag im Sommer und Eisfreihaltung im Winter.',
    features: [
      'Extrem leise durch doppelte Schalldämmung',
      'Enorme Luftfördermenge von 3.000 Litern pro Stunde',
      'Komplettset mit 6-fach Luftverteiler aus Messing',
      'Geringer Energieverbrauch von nur 25 Watt'
    ],
    specs: {
      'Luftleistung': '50 l/min (3.000 l/h)',
      'Leistungsaufnahme': '25 Watt',
      'Druck': '0,035 MPa',
      'Ausgänge': 'Inklusive 6-Wege Verteiler'
    }
  },
  {
    id: 'tech-5',
    slug: 'oase-aquamax-eco-classic-5500',
    name: 'Oase AquaMax Eco Classic 5500 Teichpumpe',
    image: PUMP_IMAGE,
    price: 159.00,
    category: 'Teichtechnik',
    subcategory: 'Teichpumpen',
    brand: 'Oase',
    available: true,
    stockCount: 17,
    rating: 4.9,
    reviewsCount: 60,
    description: 'Der Klassiker unter den Filter- und Bachlaufpumpen. Deutsche Ingenieurskunst für zuverlässigen Dauerbetrieb über viele Jahre.',
    features: [
      'Großflächiges Rundum-Filtergehäuse für Grobschmutz bis 8 mm',
      'Environmental Function Control (EFC by OASE) schützt bei Trockenlauf',
      'Energiesparender EC-Motor mit nur 60 Watt Verbrauch',
      'Bis zu 5 Jahre Garantie nach Registrierung'
    ],
    specs: {
      'Förderleistung': '5.300 l/h',
      'Leistungsaufnahme': '60 Watt',
      'Max. Förderhöhe': '2,8 m',
      'Schlauchanschluss': '1", 1 1/4", 1 1/2"'
    }
  },
  {
    id: 'tech-6',
    slug: 'aquaforte-skimmer-standskimmer-profi',
    name: 'AquaForte Oberflächenabsauger Standskimmer Profi',
    image: FILTER_IMAGE,
    price: 49.90,
    category: 'Teichtechnik',
    subcategory: 'Wassertechnik',
    brand: 'AquaForte',
    available: true,
    stockCount: 23,
    rating: 4.7,
    reviewsCount: 24,
    description: 'Zieht Blütenstaub, Blätter und Futterreste von der Wasseroberfläche ab, bevor sie auf den Grund sinken und faulen können.',
    features: [
      'Höhenverstellbares Teleskoprohr für variable Wassertiefen (35–85 cm)',
      'Herausnehmbarer Auffangkorb für kinderleichte Reinigung',
      'Standfuß wird mit Teichkies beschwert für sicheren Halt',
      'Passt an alle Standard-Teichpumpen'
    ],
    specs: {
      'Empfohlene Pumpenleistung': '4.000 bis 12.000 l/h',
      'Wassertiefe': '350 bis 850 mm',
      'Anschluss': 'Stufenschlauchtülle 25/32/38 mm'
    }
  },

  // Teichzubehör
  {
    id: 'zubehoer-1',
    slug: 'tripond-laubschutznetz-heavy-duty-6x4',
    name: 'Tripond Laubschutznetz Extra Stark 6 x 4 Meter',
    image: HERO_IMAGE,
    price: 24.95,
    category: 'Teichzubehör',
    subcategory: 'Laubschutznetze',
    brand: 'Tripond',
    available: true,
    stockCount: 40,
    rating: 4.9,
    reviewsCount: 37,
    description: 'Reißfestes, engmaschiges Herbst-Schutznetz gegen herabfallende Blätter, Äste und zum Schutz vor hungrigen Fischreihern.',
    features: [
      'Maschenweite nur 17 x 17 mm – fängt selbst kleine Birkenblätter ab',
      'UV-stabilisiertes Polyethylen für jahrelange Wiederverwendbarkeit',
      'Inklusive 12 stabiler Erdnägel zur sicheren Verankerung am Ufer',
      'Dunkelgrüne, unauffällige Farbgebung'
    ],
    specs: {
      'Größe': '6 x 4 m (24 m²)',
      'Maschenweite': '17 mm',
      'Zubehör': '12 Verankerungs-Erdspieße enthalten'
    }
  },
  {
    id: 'zubehoer-2',
    slug: 'teleskop-teichkescher-profi-2-netze',
    name: 'Profi Teleskop-Teichkescher mit Doppelnetz-System',
    image: HERO_IMAGE,
    price: 36.90,
    originalPrice: 42.00,
    category: 'Teichzubehör',
    subcategory: 'Teichkescher',
    brand: 'Gartenteichdiscount',
    available: true,
    stockCount: 26,
    rating: 4.8,
    reviewsCount: 44,
    description: 'Hochstabiler Aluminium-Teleskopstiel bis 240 cm ausziehbar. Enthält ein feines Algenfangnetz und ein fischschonendes Koi-Umsetznetz.',
    features: [
      'Ausziehbar von 110 cm bis 240 cm Reichweite',
      'Schnellverschluss-Klicksystem zum Wechseln der Kescherköpfe',
      'Gummierter Kantenschutz schützt Teichfolie vor Beschädigungen',
      'Fischschonendes knotenloses Gewebe'
    ],
    specs: {
      'Stiellänge': '1,10 m bis 2,40 m stufenlos arretierbar',
      'Kopfdurchmesser': '45 cm rund',
      'Material': 'Eloxiertes Aluminium'
    }
  }
];

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: 'algen-stoppen',
    title: 'Fadenalgen im Gartenteich erfolgreich stoppen & vorbeugen',
    summary: 'Warum sprießen Algen im Frühjahr besonders schnell? Wie du mit dem richtigen Phosphat- und Sauerstoffmanagement klares Wasser ohne Algenplage erreichst.',
    readTime: '5 Min. Lesezeit',
    category: 'Teichpflege & Biologie',
    date: 'Aktualisiert für die Teichsaison 2026',
    content: [
      'Fadenalgen sind für viele Teichbesitzer das leidigste Thema der Saison. Doch die Ursache liegt fast immer in einem Überschuss an gelösten Nährstoffen – vor allem Phosphat und Nitrat – bei gleichzeitig starker Sonneneinstrahlung im flachen Wasser.',
      'Schritt 1: Mechanisches Entfernen. Zupfe oder wickle die langen Algenfäden mit einer Algenbürste oder einem feinen Kescher ab, damit die gebundenen Nährstoffe physisch aus dem Kreislauf verschwinden.',
      'Schritt 2: Gezielter Einsatz von Aktivsauerstoff. Moderne Sauerstoff-Spalter zersetzen die Zellstruktur der Fadenalgen in 24 Stunden, ohne Fische oder Filterbakterien zu gefährden. Der abgestorbene Algenrest treibt an die Oberfläche.',
      'Schritt 3: Phosphatbinder & Bepflanzung. Setze schnellwachsende Unterwasserpflanzen (Hornkraut, Wasserpest) ein und binde freies Phosphat mit speziellen Mineralzusätzen unter 0,05 mg/l.'
    ]
  },
  {
    id: 'fruehjahrs-check',
    title: 'Der große Frühjahrs-Check: So startest du deinen Teich optimal',
    summary: 'Wassertests, Filterstart mit lebenden Bakterien und schonende Erstfütterung nach der Winterruhe. Die wichtigsten Schritte für April und Mai.',
    readTime: '6 Min. Lesezeit',
    category: 'Saisonale Pflege',
    date: 'Frühjahr 2026',
    content: [
      'Wenn die Wassertemperaturen dauerhaft über 10 °C steigen, erwacht das Teichleben aus der winterlichen Ruhe. Jetzt werden die Weichen für die Wasserqualität des gesamten Sommers gestellt.',
      '1. Bodengrund reinigen: Abgestorbenes Herbstlaub und Schlamm am Grund sollten mit einem Teichschlammsauger oder Schlammabbau-Bakterien vorsichtig entfernt werden, um giftige Faulgase zu verhindern.',
      '2. Filtertechnik aktivieren: Bevor der Filter eingeschaltet wird, sollten Schwämme gereinigt und die UVC-Lampe auf Funktion geprüft werden. Setze sofort hochwertige Starterbakterien (z. B. Oase BioKick) direkt auf die Filtermedien.',
      '3. Fütterung langsam hochfahren: Füttere bei kühlen Temperaturen zunächst leicht verdauliches Wheatgerm-Sinkfutter in kleinen Portionen. Der Stoffwechsel der Koi arbeitet erst ab ca. 15 °C auf Hochtouren.'
    ]
  },
  {
    id: 'koi-fuetterung',
    title: 'Die richtige Koi-Ernährung: Was gesunde Nishikigoi wirklich brauchen',
    summary: 'Protein-Fett-Verhältnisse, Pelletgrößen und der Unterschied zwischen Sommer-, Herbst- und Farbfuttermischungen.',
    readTime: '4 Min. Lesezeit',
    category: 'Koihaltung & Gesundheit',
    date: 'März 2026',
    content: [
      'Koi besitzen keinen Magen im anatomischen Sinn, sondern einen verlängerten Darm. Daher können sie große Futtermengen auf einmal nicht optimal verwerten. Die goldene Regel lautet: Lieber mehrmals täglich kleine Portionen füttern, die innerhalb von 5 Minuten restlos aufgefressen werden.',
      'Temperaturabhängige Fütterung: Unter 10 °C Wassertemperatur ruht die Fütterung meist oder es wird nur sehr sparsam Weizenkeim-Sinkfutter gegeben. Bei 15–20 °C ist ausgewogenes Ganzjahresfutter ideal, ab 20 °C Sommer-Wachstumsfutter mit Spirulina für Farbpracht.',
      'Pelletgröße: Wähle die Pelletgröße passend zum kleinsten Koi im Schwarm. 4 bis 5 mm Pellets eignen sich für Fische ab ca. 15 cm Körperlänge hervorragend.'
    ]
  },
  {
    id: 'filter-reinigung',
    title: 'Teichfilter richtig reinigen – ohne nützliche Bakterien zu zerstören',
    summary: 'Warum ein Teichfilter niemals klinisch rein gewaschen werden darf und wie du die Selbstreinigungskräfte deines Filters erhältst.',
    readTime: '5 Min. Lesezeit',
    category: 'Filtertechnik',
    date: 'Februar 2026',
    content: [
      'Ein weit verbreiteter Fehler unter Einsteigern ist das gründliche Auswaschen der Filterschwämme unter heißem Leitungswasser mit hohem Druck. Dadurch werden die mühsam herangezüchteten nitrifizierenden Bakterien (Nitrosomonas und Nitrobacter) schlagartig abgetötet.',
      'Richtige Vorgehensweise: Wasche die Filtermedien ausschließlich in einem Eimer mit altem Teichwasser nur so weit aus, dass der grobe Schlamm abfließt. Die braun-graue Bakterienbiomasse muss erhalten bleiben.',
      'Bei modernen Druckfiltern mit Reinigungskurbel erledigt der Rückspülmechanismus diese Aufgabe in wenigen Handgriffen ganz ohne Öffnen des Gehäuses.'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Ab welchem Bestellwert ist der Versand bei Gartenteichdiscount kostenlos?',
    a: 'Ab einem Bestellwert von 49,00 € liefern wir innerhalb Deutschlands versandkostenfrei. Für Bestellungen darunter berechnen wir eine faire Pauschale von 4,95 € mit schnellem DHL- oder DPD-Paketversand.'
  },
  {
    q: 'Wie schnell wird meine Bestellung geliefert?',
    a: 'Auf Lager befindliche Artikel verlassen unser deutsches Zentrallager in der Regel innerhalb von 24 Stunden. Die Lieferzeit beträgt 1 bis 3 Werktage. Nach dem Versand erhältst du automatisch eine Sendungsverfolgung.'
  },
  {
    q: 'Sind die Algenvernichter schädlich für meine Koi oder Teichpflanzen?',
    a: 'Unsere Produkte von Marken wie Tripond und Oase setzen auf Aktivsauerstoff oder selektiv wirkende biozide Rezepturen, die bei vorschriftsmäßiger Dosierung absolut schonend für Fische, Krebse, Schnecken und Wasserpflanzen sind.'
  },
  {
    q: 'Bietet Gartenteichdiscount eine persönliche Beratung für Teichprobleme?',
    a: 'Ja, unser erfahrenes Fachberater-Team steht dir telefonisch (Mo–Fr 09:00–17:00 Uhr) oder per E-Mail für individuelle Wasserwert-Analysen, Pumpendimensionierungen und Koifutter-Empfehlungen zur Verfügung.'
  }
];
