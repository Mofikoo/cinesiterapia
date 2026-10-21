// Practice 6 : palpation du membre inférieur (Dra. Mireia Yeste Fabregat, UCV 2026-27)
const HIP_ADD_START = L(
  ['Patient en décubitus dorsal, genou et hanche fléchis.',
   'Thérapeute à côté du patient (au niveau de la hanche), prise en berceau avec la main caudale.',
   'Partir d\'une position d\'abduction et demander une adduction de hanche contre résistance.'],
  ['Patient supine, knee and hip flexed.',
   'Therapist beside the patient (at hip level), cradle grip with the caudal hand.',
   'Start from an abducted position and ask for hip adduction against resistance.'],
  ['Paciente en decúbito supino, rodilla y cadera flexionadas.',
   'Fisioterapeuta al lado del paciente (a nivel de la cadera), toma en cuna con la mano caudal.',
   'Partir de una posición de abducción y pedir aducción de cadera contra resistencia.']);
const withSteps = (base, more) => L(...['fr', 'en', 'es'].map((k) => base[k].concat(more[k])));

CARDS.push(
  {
    id: 'tfl-dl', p: 'p6', s: '3-5', img: ['tfl-dl'],
    g: L('Fléchisseurs de hanche', 'Hip flexors', 'Flexores de cadera'),
    t: L('Tenseur du fascia lata (décubitus latéral)', 'Tensor fasciae latae (side-lying)', 'Tensor de la fascia lata (decúbito lateral)'),
    d: L('Muscle glutéal superficiel : superficiel au moyen et petit fessiers, latéral au sartorius et au droit fémoral. Il assiste la rotation médiale, l\'abduction et la flexion de hanche et stabilise le genou en extension. On le teste en abduction contre résistance, hanche fléchie et genou tendu (Standring, 2016, cité dans le PDF).',
      'Superficial gluteal muscle: superficial to gluteus medius and minimus, lateral to sartorius and rectus femoris. Assists hip medial rotation, abduction and flexion, and stabilizes the extended knee. Tested by resisted abduction with hip flexed and knee extended (Standring, 2016, cited in the slides).',
      'Músculo glúteo superficial: superficial al glúteo medio y menor, lateral al sartorio y al recto femoral. Asiste la rotación medial, abducción y flexión de cadera y estabiliza la rodilla en extensión. Se valora en abducción contra resistencia, cadera flexionada y rodilla extendida (Standring, 2016, citado en el PDF).'),
    st: L(
      ['Patient en décubitus latéral, jambe testée au-dessus, hanche fléchie et en abduction.', 'Thérapeute devant le patient.',
       'Le patient fait une abduction de hanche contre résistance en maintenant la flexion.',
       'Palper le TFL pendant la contraction.'],
      ['Patient side-lying, tested leg on top, hip flexed and abducted.', 'Therapist in front of the patient.',
       'The patient performs hip abduction against resistance while keeping hip flexion.',
       'Palpate TFL during the contraction.'],
      ['Paciente en decúbito lateral, pierna evaluada arriba, cadera flexionada y en abducción.', 'Fisioterapeuta delante del paciente.',
       'El paciente realiza abducción de cadera contra resistencia manteniendo la flexión.',
       'Palpar el TFL durante la contracción.']),
    w: {
      x: L('Lèvre externe de la crête iliaque antérieure et EIAS → condyle latéral du tibia via la bandelette ilio-tibiale. Innervation : nerf glutéal supérieur (L4-S1).',
        'Outer lip of the anterior iliac crest and ASIS → lateral tibial condyle via the iliotibial tract. Innervation: superior gluteal nerve (L4-S1).',
        'Labio externo de la cresta ilíaca anterior y EIAS → cóndilo lateral de la tibia vía la cintilla iliotibial. Inervación: nervio glúteo superior (L4-S1).'),
      src: [KH('tensor-fasciae-latae-muscle', 'Tensor fasciae latae muscle')]
    }
  },
  {
    id: 'tfl-dd', p: 'p6', s: '7', img: ['tfl-dd'],
    g: L('Fléchisseurs de hanche', 'Hip flexors', 'Flexores de cadera'),
    t: L('Tenseur du fascia lata (décubitus dorsal)', 'Tensor fasciae latae (supine)', 'Tensor de la fascia lata (decúbito supino)'),
    d: L('Situé entre l\'EIAS et le bord antérieur du grand trochanter. Ne pas le confondre avec le moyen fessier, plus postérieur et supérieur.',
      'Located between the ASIS and the anterior border of the greater trochanter. Not to be confused with gluteus medius, which is more posterior and superior.',
      'Situado entre la EIAS y el borde anterior del trocánter mayor. No confundir con el glúteo medio, más posterior y superior.'),
    st: L(
      ['Patient en décubitus dorsal, hanche en légère flexion et rotation interne.', 'Thérapeute à côté du patient.',
       'Contraction isométrique résistée en flexion, abduction et rotation médiale.',
       'Palper entre l\'EIAS et le bord antérieur du grand trochanter.'],
      ['Patient supine, hip slightly flexed and internally rotated.', 'Therapist beside the patient.',
       'Resisted isometric contraction in flexion, abduction and medial rotation.',
       'Palpate between the ASIS and the anterior border of the greater trochanter.'],
      ['Paciente en decúbito supino, cadera en ligera flexión y rotación interna.', 'Fisioterapeuta al lado del paciente.',
       'Contracción isométrica resistida en flexión, abducción y rotación medial.',
       'Palpar entre la EIAS y el borde anterior del trocánter mayor.'])
  },
  {
    id: 'sartorius', p: 'p6', s: '8-9', img: ['sartorius'],
    g: L('Fléchisseurs de hanche', 'Hip flexors', 'Flexores de cadera'),
    t: L('Sartorius (couturier)', 'Sartorius', 'Sartorio'),
    d: L('Muscle long et superficiel qui croise la cuisse en diagonale, de l\'EIAS vers la face médiale du tibia.',
      'Long superficial muscle crossing the thigh diagonally, from the ASIS to the medial tibia.',
      'Músculo largo y superficial que cruza el muslo en diagonal, de la EIAS a la cara medial de la tibia.'),
    st: L(
      ['Patient en décubitus dorsal, hanche et genou fléchis, hanche en rotation externe.', 'Thérapeute à côté du patient.',
       'Contraction isométrique résistée en flexion, abduction et rotation externe de hanche.',
       'Palper le muscle depuis l\'EIAS en suivant son trajet oblique sur la cuisse.'],
      ['Patient supine, hip and knee flexed, hip externally rotated.', 'Therapist beside the patient.',
       'Resisted isometric contraction in hip flexion, abduction and external rotation.',
       'Palpate the muscle from the ASIS following its oblique course on the thigh.'],
      ['Paciente en decúbito supino, cadera y rodilla flexionadas, cadera en rotación externa.', 'Fisioterapeuta al lado del paciente.',
       'Contracción isométrica resistida en flexión, abducción y rotación externa de cadera.',
       'Palpar el músculo desde la EIAS siguiendo su trayecto oblicuo en el muslo.']),
    w: {
      x: L('EIAS → face médiale supérieure du tibia. Action : à la hanche, flexion, abduction et rotation latérale ; au genou, flexion (d\'où la position « en tailleur »).',
        'ASIS → superior medial tibia. Action: at the hip, flexion, abduction and lateral rotation; at the knee, flexion (hence the "cross-legged" position).',
        'EIAS → cara medial superior de la tibia. Acción: en la cadera, flexión, abducción y rotación lateral; en la rodilla, flexión (de ahí la posición «de sastre»).'),
      src: [TMA('lower-limb/muscles/thigh/anterior-compartment/', 'Muscles in the anterior compartment of the thigh')]
    }
  },
  {
    id: 'psoas', p: 'p6', s: '10-11', img: ['psoas'],
    g: L('Fléchisseurs de hanche', 'Hip flexors', 'Flexores de cadera'),
    t: L('Psoas', 'Psoas', 'Psoas'),
    d: L('Palpation profonde à travers l\'abdomen, au point intermédiaire entre l\'ombilic et l\'EIAS.',
      'Deep palpation through the abdomen, at the midpoint between the navel and the ASIS.',
      'Palpación profunda a través del abdomen, en el punto intermedio entre el ombligo y la EIAS.'),
    st: L(
      ['Patient en décubitus dorsal, genoux fléchis, pieds en appui.', 'Thérapeute à côté du patient, au niveau de la hanche.',
       'Repérer l\'ombilic et l\'EIAS, puis le point intermédiaire.',
       'Pénétrer la zone abdominale doucement et lentement pour éviter les réactions de défense.',
       'Demander une flexion de hanche et sentir la contraction.'],
      ['Patient supine, knees flexed, feet supported.', 'Therapist beside the patient, at hip level.',
       'Locate the navel and the ASIS, then the midpoint.',
       'Sink into the abdomen gently and slowly to avoid guarding reactions.',
       'Ask for hip flexion and feel the contraction.'],
      ['Paciente en decúbito supino, rodillas flexionadas, pies apoyados.', 'Fisioterapeuta al lado del paciente, a nivel de la cadera.',
       'Localizar el ombligo y la EIAS, luego el punto intermedio.',
       'Penetrar en la zona abdominal suave y lentamente para evitar reacciones de defensa.',
       'Pedir una flexión de cadera y notar la contracción.']),
    w: {
      x: L('Corps vertébraux et disques T12-L4, processus transverses L1-L5 → petit trochanter (tendon ilio-psoas). Action : flexion de hanche, rotation latérale de cuisse, inclinaison latérale du tronc.',
        'Vertebral bodies and discs T12-L4, transverse processes L1-L5 → lesser trochanter (iliopsoas tendon). Action: hip flexion, thigh lateral rotation, trunk lateral flexion.',
        'Cuerpos vertebrales y discos T12-L4, apófisis transversas L1-L5 → trocánter menor (tendón iliopsoas). Acción: flexión de cadera, rotación lateral del muslo, inclinación lateral del tronco.'),
      src: [KH('psoas-major-muscle', 'Psoas major muscle')]
    }
  },
  {
    id: 'pectine', p: 'p6', s: '14-15', img: ['pectine', 'pectine-2'],
    g: L('Adducteurs de hanche', 'Hip adductors', 'Aductores de cadera'),
    t: L('Pectiné', 'Pectineus', 'Pectíneo'),
    d: L('Dans la dépression triangulaire laissée entre le long adducteur (en dedans) et le sartorius (en dehors). Le pouls de l\'artère fémorale est tout proche.',
      'In the triangular depression between adductor longus (medially) and sartorius (laterally). The femoral artery pulse is very close.',
      'En la depresión triangular entre el aductor largo (por dentro) y el sartorio (por fuera). El pulso de la arteria femoral está muy cerca.'),
    st: L(
      ['Patient en décubitus dorsal, genou et hanche fléchis.', 'Thérapeute à côté du patient, au niveau de la hanche.',
       'Résistance contre l\'adduction + flexion de hanche.',
       'Palper dans la dépression triangulaire entre long adducteur et sartorius (attention au pouls fémoral).'],
      ['Patient supine, knee and hip flexed.', 'Therapist beside the patient, at hip level.',
       'Resistance against hip adduction + flexion.',
       'Palpate in the triangular depression between adductor longus and sartorius (mind the femoral pulse).'],
      ['Paciente en decúbito supino, rodilla y cadera flexionadas.', 'Fisioterapeuta al lado del paciente, a nivel de la cadera.',
       'Resistencia contra la aducción + flexión de cadera.',
       'Palpar en la depresión triangular entre aductor largo y sartorio (cuidado con el pulso femoral).']),
    w: {
      x: L('Ligne pectinéale du pubis → ligne pectinéale du fémur. Action : flexion et adduction de hanche. Innervation : nerf fémoral (± nerf obturateur).',
        'Pectineal line of the pubis → pectineal line of the femur. Action: hip flexion and adduction. Innervation: femoral nerve (± obturator nerve).',
        'Línea pectínea del pubis → línea pectínea del fémur. Acción: flexión y aducción de cadera. Inervación: nervio femoral (± obturador).'),
      src: [KH('pectineus-muscle', 'Pectineus muscle')]
    }
  },
  {
    id: 'long-add', p: 'p6', s: '16-17', img: ['long-add'],
    g: L('Adducteurs de hanche', 'Hip adductors', 'Aductores de cadera'),
    t: L('Long adducteur', 'Adductor longus', 'Aductor largo'),
    d: L('La masse du long adducteur apparaît à la face médiale et haute de la cuisse.', 'The adductor longus mass appears on the medial upper thigh.', 'La masa del aductor largo aparece en la cara medial y alta del muslo.'),
    st: L(
      ['Patient en décubitus dorsal, genou et hanche fléchis.', 'Thérapeute à côté du patient, au niveau de la hanche.',
       'Résistance contre l\'adduction de hanche.',
       'Palper la saillie tendineuse à la partie haute et médiale de la cuisse.'],
      ['Patient supine, knee and hip flexed.', 'Therapist beside the patient, at hip level.',
       'Resistance against hip adduction.',
       'Palpate the tendinous prominence on the upper medial thigh.'],
      ['Paciente en decúbito supino, rodilla y cadera flexionadas.', 'Fisioterapeuta al lado del paciente, a nivel de la cadera.',
       'Resistencia contra la aducción de cadera.',
       'Palpar el relieve tendinoso en la parte alta y medial del muslo.']),
    w: {
      x: L('Corps du pubis (sous la crête pubienne) → tiers moyen de la ligne âpre. Action : flexion, adduction et rotation externe de cuisse. Innervation : nerf obturateur (L2-L4).',
        'Body of the pubis (below the pubic crest) → middle third of the linea aspera. Action: thigh flexion, adduction and external rotation. Innervation: obturator nerve (L2-L4).',
        'Cuerpo del pubis (bajo la cresta púbica) → tercio medio de la línea áspera. Acción: flexión, aducción y rotación externa del muslo. Inervación: nervio obturador (L2-L4).'),
      src: [KH('adductor-longus-muscle', 'Adductor longus muscle')]
    }
  },
  {
    id: 'court-add', p: 'p6', s: '18-19', img: ['court-add', 'court-add-2'],
    g: L('Adducteurs de hanche', 'Hip adductors', 'Aductores de cadera'),
    t: L('Court adducteur', 'Adductor brevis', 'Aductor corto'),
    d: L('On prend le gracile comme repère. L\'insertion se trouve sous le long adducteur.',
      'Use gracilis as a landmark. The insertion lies under adductor longus.',
      'Se toma el recto interno (grácil) como referencia. La inserción está bajo el aductor largo.'),
    st: withSteps(HIP_ADD_START, L(
      ['Repérer le gracile (droit interne) et se placer dessus, en partie proximale.', 'Le court adducteur se palpe sous le long adducteur.'],
      ['Locate gracilis and place yourself on top of it, proximally.', 'Adductor brevis is palpated under adductor longus.'],
      ['Localizar el grácil (recto interno) y situarse encima, en la parte proximal.', 'El aductor corto se palpa bajo el aductor largo.'])),
    w: {
      x: L('Corps et branche inférieure du pubis → ligne âpre (lèvre médiale). Action : flexion, adduction et rotation externe de cuisse.',
        'Body and inferior ramus of the pubis → linea aspera (medial lip). Action: thigh flexion, adduction and external rotation.',
        'Cuerpo y rama inferior del pubis → línea áspera (labio medial). Acción: flexión, aducción y rotación externa del muslo.'),
      src: [KH('adductor-brevis-muscle', 'Adductor brevis muscle')]
    }
  },
  {
    id: 'grand-add', p: 'p6', s: '20-21', img: ['grand-add', 'grand-add-2'],
    g: L('Adducteurs de hanche', 'Hip adductors', 'Aductores de cadera'),
    t: L('Grand adducteur', 'Adductor magnus', 'Aductor mayor'),
    d: L('En glissant entre le gracile et le court adducteur, on trouve la portion interne du grand adducteur.',
      'Sliding between gracilis and adductor brevis, you find the internal portion of adductor magnus.',
      'Deslizando entre el grácil y el aductor corto se encuentra la porción interna del aductor mayor.'),
    st: withSteps(HIP_ADD_START, L(
      ['Prendre le gracile comme repère, se placer dessus en proximal.', 'Glisser entre le gracile et le court adducteur : portion interne du grand adducteur.'],
      ['Use gracilis as a landmark, place yourself on it proximally.', 'Slide between gracilis and adductor brevis: internal portion of adductor magnus.'],
      ['Tomar el grácil como referencia y situarse encima en proximal.', 'Deslizar entre el grácil y el aductor corto: porción interna del aductor mayor.'])),
    w: {
      x: L('Partie adductrice : branches ischio-pubiennes → ligne âpre ; partie ischio-condylaire : tubérosité ischiatique → tubercule de l\'adducteur. Double innervation : nerf obturateur et nerf sciatique (division tibiale).',
        'Adductor part: ischiopubic rami → linea aspera; ischiocondylar part: ischial tuberosity → adductor tubercle. Dual innervation: obturator nerve and sciatic nerve (tibial division).',
        'Porción aductora: ramas isquiopubianas → línea áspera; porción isquiocondílea: tuberosidad isquiática → tubérculo del aductor. Doble inervación: nervio obturador y ciático (división tibial).'),
      src: [KH('adductor-magnus', 'Adductor magnus muscle')]
    }
  },
  {
    id: 'gracile', p: 'p6', s: '22-23', img: ['gracile', 'gracile-2'],
    g: L('Adducteurs de hanche', 'Hip adductors', 'Aductores de cadera'),
    t: L('Gracile (droit interne)', 'Gracilis', 'Grácil (recto interno)'),
    d: L('Le corps musculaire saille tout le long de la face interne de la cuisse.', 'The muscle belly protrudes along the entire inner thigh.', 'El vientre muscular sobresale a lo largo de toda la cara interna del muslo.'),
    st: withSteps(HIP_ADD_START, L(
      ['Suivre la saillie du muscle le long de la face interne de la cuisse.', 'Pour l\'extrémité proximale : hanche et genou fléchis, pied posé sur la table, résister à l\'adduction.'],
      ['Follow the muscle along the inner thigh.', 'For the proximal end: hip and knee flexed, foot on the table, resist adduction.'],
      ['Seguir el relieve del músculo a lo largo de la cara interna del muslo.', 'Para el extremo proximal: cadera y rodilla flexionadas, pie sobre la camilla, resistir la aducción.'])),
    w: {
      x: L('Pubis et branche ischio-pubienne → face médiale du tibia proximal (patte d\'oie). Action : flexion et adduction de hanche, flexion et rotation interne du genou.',
        'Pubis and ischiopubic ramus → medial proximal tibia (pes anserinus). Action: hip flexion and adduction, knee flexion and internal rotation.',
        'Pubis y rama isquiopubiana → cara medial de la tibia proximal (pata de ganso). Acción: flexión y aducción de cadera, flexión y rotación interna de rodilla.'),
      src: [KH('gracilis-muscle', 'Gracilis muscle')]
    }
  },
  {
    id: 'droit-femoral', p: 'p6', s: '24-26', img: ['droit-femoral'],
    g: L('Extenseurs du genou', 'Knee extensors', 'Extensores de rodilla'),
    t: L('Droit fémoral', 'Rectus femoris', 'Recto femoral'),
    d: L('Il apparaît entre le vaste interne et le vaste externe au tiers moyen de la cuisse. En flexion de hanche, il se contracte entre le sartorius et le TFL.',
      'It appears between vastus medialis and vastus lateralis in the middle third of the thigh. With hip flexion, it contracts between sartorius and TFL.',
      'Aparece entre el vasto interno y el vasto externo en el tercio medio del muslo. En flexión de cadera se contrae entre el sartorio y el TFL.'),
    st: L(
      ['Patient en décubitus dorsal, genou tendu, hanche en légère flexion.', 'Thérapeute à côté, main sous le talon pour contrôler le genou.',
       'Demander une contraction isométrique du quadriceps.',
       'Palper le droit fémoral entre les vastes interne et externe (tiers moyen).',
       'Demander une flexion de hanche (décoller le talon de la main) : il se contracte entre sartorius et TFL.'],
      ['Patient supine, knee extended, hip slightly flexed.', 'Therapist beside, hand under the heel to control the knee.',
       'Ask for an isometric quadriceps contraction.',
       'Palpate rectus femoris between vastus medialis and lateralis (middle third).',
       'Ask for hip flexion (lift the heel off the hand): it contracts between sartorius and TFL.'],
      ['Paciente en decúbito supino, rodilla extendida, cadera en ligera flexión.', 'Fisioterapeuta al lado, mano bajo el talón para controlar la rodilla.',
       'Pedir una contracción isométrica del cuádriceps.',
       'Palpar el recto femoral entre los vastos interno y externo (tercio medio).',
       'Pedir una flexión de cadera (separar el talón de la mano): se contrae entre sartorio y TFL.']),
    w: {
      x: L('Épine iliaque antéro-inférieure et sillon supra-acétabulaire → patella. Seul chef du quadriceps qui croise hanche et genou : extension du genou et flexion de hanche.',
        'Anterior inferior iliac spine and supra-acetabular groove → patella. Only quadriceps head crossing both hip and knee: knee extension and hip flexion.',
        'Espina ilíaca anteroinferior y surco supraacetabular → rótula. Única cabeza del cuádriceps que cruza cadera y rodilla: extensión de rodilla y flexión de cadera.'),
      src: [TMA('lower-limb/muscles/thigh/anterior-compartment/', 'Muscles in the anterior compartment of the thigh')]
    }
  },
  {
    id: 'semi-tendineux', p: 'p6', s: '27-29', img: ['semi-tendineux', 'semi-tendineux-2'],
    g: L('Fléchisseurs du genou', 'Knee flexors', 'Flexores de rodilla'),
    t: L('Semi-tendineux', 'Semitendinosus', 'Semitendinoso'),
    d: L('À la face postérieure de la cuisse, en dedans du biceps fémoral et en arrière du semi-membraneux.',
      'On the back of the thigh, medial to biceps femoris and behind semimembranosus.',
      'En la cara posterior del muslo, medial al bíceps femoral y por detrás del semimembranoso.'),
    st: L(
      ['Patient en décubitus ventral, genou fléchi.', 'Thérapeute à côté, main sur le talon pour contrôler le genou.',
       'Résistance (PDF : « KNEE EXT + INT ROT ») avec rotation interne de jambe.',
       'Palper le tendon à la face postéro-médiale, en dedans du biceps fémoral.'],
      ['Patient prone, knee flexed.', 'Therapist beside, hand on the heel to control the knee.',
       'Resistance (slide: "KNEE EXT + INT ROT") with leg internal rotation.',
       'Palpate the tendon on the posteromedial side, medial to biceps femoris.'],
      ['Paciente en decúbito prono, rodilla flexionada.', 'Fisioterapeuta al lado, mano en el talón para controlar la rodilla.',
       'Resistencia (PDF: «KNEE EXT + INT ROT») con rotación interna de pierna.',
       'Palpar el tendón en la cara posteromedial, medial al bíceps femoral.']),
    n: L('Le PDF écrit « KNEE EXT » : le semi-tendineux est fléchisseur du genou, la résistance s\'oppose donc à la flexion (cf. semi-membraneux et biceps : « KNEE FLEX »).',
      'The slide says "KNEE EXT": semitendinosus is a knee flexor, so resistance opposes flexion (cf. semimembranosus and biceps: "KNEE FLEX").',
      'El PDF dice «KNEE EXT»: el semitendinoso es flexor de rodilla, la resistencia se opone a la flexión (cf. semimembranoso y bíceps: «KNEE FLEX»).'),
    w: {
      x: L('Tubérosité ischiatique → tibia proximal sous le condyle médial (patte d\'oie). Action : extension et rotation interne de hanche ; flexion et rotation interne du genou.',
        'Ischial tuberosity → proximal tibia below the medial condyle (pes anserinus). Action: hip extension and internal rotation; knee flexion and internal rotation.',
        'Tuberosidad isquiática → tibia proximal bajo el cóndilo medial (pata de ganso). Acción: extensión y rotación interna de cadera; flexión y rotación interna de rodilla.'),
      src: [KH('semitendinosus-muscle', 'Semitendinosus muscle')]
    }
  },
  {
    id: 'semi-membraneux', p: 'p6', s: '30-31', img: ['semi-membraneux'],
    g: L('Fléchisseurs du genou', 'Knee flexors', 'Flexores de rodilla'),
    t: L('Semi-membraneux', 'Semimembranosus', 'Semimembranoso'),
    d: L('Entre le tendon du semi-tendineux (1) en dessous et le gracile (2) au-dessus. Plus haut, on trouve la continuité du corps du semi-membraneux (3).',
      'Between the semitendinosus tendon (1) below and gracilis (2) above. More proximally, the continuation of the semimembranosus belly (3).',
      'Entre el tendón del semitendinoso (1) debajo y el grácil (2) encima. Más proximal, la continuación del vientre del semimembranoso (3).'),
    st: L(
      ['Patient (PDF : décubitus dorsal) genou fléchi, jambe en rotation interne.', 'Thérapeute à côté, main sur le talon pour contrôler le genou.',
       'Résistance contre la flexion + rotation interne du genou.',
       'Palper entre le tendon du semi-tendineux et le gracile, puis remonter sur le corps musculaire.'],
      ['Patient (slide: supine) knee flexed, leg internally rotated.', 'Therapist beside, hand on the heel to control the knee.',
       'Resistance against knee flexion + internal rotation.',
       'Palpate between the semitendinosus tendon and gracilis, then move up onto the muscle belly.'],
      ['Paciente (PDF: decúbito supino) rodilla flexionada, pierna en rotación interna.', 'Fisioterapeuta al lado, mano en el talón para controlar la rodilla.',
       'Resistencia contra la flexión + rotación interna de rodilla.',
       'Palpar entre el tendón del semitendinoso y el grácil, luego subir por el vientre muscular.']),
    w: {
      x: L('Tubérosité ischiatique → condyle médial du tibia. Action : extension et rotation interne de hanche ; flexion et rotation interne de jambe.',
        'Ischial tuberosity → medial tibial condyle. Action: hip extension and internal rotation; leg flexion and internal rotation.',
        'Tuberosidad isquiática → cóndilo medial de la tibia. Acción: extensión y rotación interna de cadera; flexión y rotación interna de la pierna.'),
      src: [KH('semimembranosus-muscle', 'Semimembranosus muscle')]
    }
  },
  {
    id: 'biceps-femoral', p: 'p6', s: '32-34', img: ['biceps-femoral', 'biceps-femoral-2'],
    g: L('Fléchisseurs du genou', 'Knee flexors', 'Flexores de rodilla'),
    t: L('Biceps fémoral', 'Biceps femoris', 'Bíceps femoral'),
    d: L('Ischio-jambier latéral : son tendon se palpe à la face postéro-latérale du genou, vers la tête de la fibula.',
      'Lateral hamstring: its tendon is palpated on the posterolateral knee, towards the fibular head.',
      'Isquiotibial lateral: su tendón se palpa en la cara posterolateral de la rodilla, hacia la cabeza del peroné.'),
    st: L(
      ['Patient en décubitus ventral, genou fléchi, jambe en rotation externe.', 'Thérapeute à côté, main sur le talon pour contrôler le genou.',
       'Résistance contre la flexion + rotation externe du genou.',
       'Palper le tendon et le corps du biceps fémoral à la face postéro-latérale.'],
      ['Patient prone, knee flexed, leg externally rotated.', 'Therapist beside, hand on the heel to control the knee.',
       'Resistance against knee flexion + external rotation.',
       'Palpate the biceps femoris tendon and belly on the posterolateral side.'],
      ['Paciente en decúbito prono, rodilla flexionada, pierna en rotación externa.', 'Fisioterapeuta al lado, mano en el talón para controlar la rodilla.',
       'Resistencia contra la flexión + rotación externa de rodilla.',
       'Palpar el tendón y el vientre del bíceps femoral en la cara posterolateral.']),
    w: {
      x: L('Chef long : tubérosité ischiatique ; chef court : ligne âpre (lèvre latérale) → tête de la fibula. Action : extension et rotation externe de hanche ; flexion et rotation externe de jambe.',
        'Long head: ischial tuberosity; short head: linea aspera (lateral lip) → head of the fibula. Action: hip extension and external rotation; leg flexion and external rotation.',
        'Cabeza larga: tuberosidad isquiática; cabeza corta: línea áspera (labio lateral) → cabeza del peroné. Acción: extensión y rotación externa de cadera; flexión y rotación externa de la pierna.'),
      src: [KH('biceps-femoris-muscle', 'Biceps femoris muscle')]
    }
  },
  {
    id: 'grand-fessier', p: 'p6', s: '35-36', img: ['grand-fessier', 'grand-fessier-2'],
    g: L('Muscles fessiers', 'Gluteal muscles', 'Músculos glúteos'),
    t: L('Grand fessier', 'Gluteus maximus', 'Glúteo mayor'),
    d: L('Genou fléchi à 90° pour éviter l\'action des ischio-jambiers. Image : palpation du grand fessier droit pendant une extension + rotation latérale résistée.',
      'Knee flexed to 90° to avoid hamstring action. Picture: palpation of the right gluteus maximus during resisted extension + lateral rotation.',
      'Rodilla en flexión de 90° para evitar la acción de los isquiotibiales. Imagen: palpación del glúteo mayor derecho durante extensión + rotación lateral resistidas.'),
    st: L(
      ['Patient en décubitus ventral, genou fléchi à 90°.', 'Thérapeute à côté du patient.',
       'Demander de décoller la jambe de la table (extension de hanche).',
       'Résistance au tiers distal de la cuisse.',
       'Palper le grand fessier pendant la contraction.'],
      ['Patient prone, knee flexed to 90°.', 'Therapist beside the patient.',
       'Ask to lift the leg off the table (hip extension).',
       'Resistance on the distal third of the thigh.',
       'Palpate gluteus maximus during the contraction.'],
      ['Paciente en decúbito prono, rodilla en flexión de 90°.', 'Fisioterapeuta al lado del paciente.',
       'Pedir que separe la pierna de la camilla (extensión de cadera).',
       'Resistencia en el tercio distal del muslo.',
       'Palpar el glúteo mayor durante la contracción.']),
    w: {
      x: L('Sacrum, coccyx, surface glutéale de l\'ilium, fascia thoraco-lombaire → bandelette ilio-tibiale et tubérosité glutéale. Action : extension et rotation externe de hanche.',
        'Sacrum, coccyx, gluteal surface of the ilium, thoracolumbar fascia → iliotibial tract and gluteal tuberosity. Action: hip extension and external rotation.',
        'Sacro, cóccix, cara glútea del ilion, fascia toracolumbar → cintilla iliotibial y tuberosidad glútea. Acción: extensión y rotación externa de cadera.'),
      src: [KH('gluteus-maximus-muscle', 'Gluteus maximus muscle')]
    }
  },
  {
    id: 'moyen-fessier', p: 'p6', s: '37-38', img: ['moyen-fessier', 'moyen-fessier-2'],
    g: L('Muscles fessiers', 'Gluteal muscles', 'Músculos glúteos'),
    t: L('Moyen fessier', 'Gluteus medius', 'Glúteo medio'),
    d: L('Sur l\'image du PDF, c\'est le TFL qui est indiqué : le moyen fessier est plus postérieur et plus crânial.',
      'In the slide picture, the TFL is indicated: gluteus medius is more posterior and cranial.',
      'En la imagen del PDF se señala el TFL: el glúteo medio es más posterior y craneal.'),
    st: L(
      ['Patient en décubitus latéral, genou tendu.', 'Thérapeute devant le patient.',
       'Demander une abduction contre résistance avec légère extension de hanche ; résistance au tiers distal.',
       'Faire réaliser des rotations externe-interne pour sentir le muscle.',
       'Palper en arrière et au-dessus du TFL.'],
      ['Patient side-lying, knee extended.', 'Therapist in front of the patient.',
       'Ask for abduction against resistance with slight hip extension; resistance on the distal third.',
       'Have the patient perform external-internal rotations to feel the muscle.',
       'Palpate behind and above the TFL.'],
      ['Paciente en decúbito lateral, rodilla extendida.', 'Fisioterapeuta delante del paciente.',
       'Pedir abducción contra resistencia con ligera extensión de cadera; resistencia en el tercio distal.',
       'Pedir rotaciones externa-interna para notar el músculo.',
       'Palpar por detrás y por encima del TFL.']),
    w: {
      x: L('Surface glutéale de l\'ilium → face latérale du grand trochanter. Action : abduction et rotation médiale ; stabilise le bassin à la marche (évite la chute du côté opposé).',
        'Gluteal surface of the ilium → lateral surface of the greater trochanter. Action: abduction and medial rotation; stabilizes the pelvis during gait (prevents contralateral drop).',
        'Cara glútea del ilion → cara lateral del trocánter mayor. Acción: abducción y rotación medial; estabiliza la pelvis en la marcha (evita la caída contralateral).'),
      src: [TMA('lower-limb/muscles/gluteal-region/', 'Muscles of the gluteal region')]
    }
  },
  {
    id: 'petit-fessier', p: 'p6', s: '39-40', img: ['petit-fessier', 'petit-fessier-2'],
    g: L('Muscles fessiers', 'Gluteal muscles', 'Músculos glúteos'),
    t: L('Petit fessier', 'Gluteus minimus', 'Glúteo menor'),
    d: L('Muscle profond : sous les fibres antérieures du moyen fessier, en dessous et en arrière du TFL. La perception est celle du thérapeute, pas directement visible ni palpable.',
      'Deep muscle: under the anterior fibres of gluteus medius, below and behind the TFL. The perception is the therapist\'s, not directly visible or palpable.',
      'Músculo profundo: bajo las fibras anteriores del glúteo medio, por debajo y detrás del TFL. La percepción es del fisioterapeuta, no es directamente visible ni palpable.'),
    st: L(
      ['Patient en décubitus latéral, genou tendu.', 'Thérapeute devant, fixe le genou du côté interne.',
       'Demander une rotation interne contre résistance.',
       'Placer les doigts sous les fibres antérieures du moyen fessier, en dessous et en arrière du TFL : percevoir la contraction en profondeur.'],
      ['Patient side-lying, knee extended.', 'Therapist in front, fixing the knee on the inner side.',
       'Ask for internal rotation against resistance.',
       'Place the fingers under the anterior fibres of gluteus medius, below and behind the TFL: feel the deep contraction.'],
      ['Paciente en decúbito lateral, rodilla extendida.', 'Fisioterapeuta delante, fija la rodilla por la cara interna.',
       'Pedir una rotación interna contra resistencia.',
       'Colocar los dedos bajo las fibras anteriores del glúteo medio, por debajo y detrás del TFL: percibir la contracción profunda.']),
    w: {
      x: L('Surface glutéale de l\'ilium (entre lignes glutéales antérieure et inférieure) → face antérieure du grand trochanter. Action : abduction, rotation interne (partie antérieure), stabilisation du bassin.',
        'Gluteal surface of the ilium (between anterior and inferior gluteal lines) → anterior greater trochanter. Action: abduction, internal rotation (anterior part), pelvic stabilization.',
        'Cara glútea del ilion (entre líneas glúteas anterior e inferior) → cara anterior del trocánter mayor. Acción: abducción, rotación interna (parte anterior), estabilización pélvica.'),
      src: [KH('gluteus-minimus-muscle', 'Gluteus minimus muscle')]
    }
  }
);
