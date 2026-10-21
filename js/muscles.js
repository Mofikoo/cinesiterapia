// Anatomie de base du muscle étudié (fiches de palpation) : origine, insertion, fonction.
// Sources vérifiées : Kenhub (key facts) et TeachMeAnatomy.
const TRAP_SRC = [KH('trapezius-muscle', 'Trapezius muscle')];
const TERES_MAJOR = {
  o: L('Angle inférieur et partie basse du bord latéral de la scapula', 'Inferior angle and lower lateral border of the scapula', 'Ángulo inferior y parte baja del borde lateral de la escápula'),
  i: L('Lèvre médiale du sillon intertuberculaire de l\'humérus', 'Medial lip of the intertubercular sulcus of the humerus', 'Labio medial del surco intertubercular del húmero'),
  f: L('Extension et rotation interne du bras ; aide à l\'adduction', 'Arm extension and internal rotation; assists adduction', 'Extensión y rotación interna del brazo; ayuda a la aducción'),
  src: [KH('teres-major-muscle', 'Teres major muscle')]
};
const SUPRA = {
  o: L('Fosse supra-épineuse de la scapula', 'Supraspinous fossa of the scapula', 'Fosa supraespinosa de la escápula'),
  i: L('Tubercule majeur de l\'humérus', 'Greater tubercle of the humerus', 'Tubérculo mayor del húmero'),
  f: L('Abduction du bras ; stabilise la tête humérale dans la glène', 'Arm abduction; stabilizes the humeral head in the glenoid', 'Abducción del brazo; estabiliza la cabeza humeral en la glenoide'),
  src: [KH('supraspinatus-muscle', 'Supraspinatus muscle')]
};
const PEC_MAJOR_SRC = [TMA('upper-limb/muscles/pectoral-region/', 'Muscles of the pectoral region')];
const LAT = {
  o: L('Épineuses T7-T12 et fascia thoraco-lombaire, tiers postérieur de la crête iliaque, côtes 9-12, angle inférieur de la scapula',
    'T7-T12 spinous processes and thoracolumbar fascia, posterior third of the iliac crest, ribs 9-12, inferior angle of the scapula',
    'Espinosas T7-T12 y fascia toracolumbar, tercio posterior de la cresta ilíaca, costillas 9-12, ángulo inferior de la escápula'),
  i: L('Sillon intertuberculaire de l\'humérus (entre grand pectoral et grand rond)', 'Intertubercular sulcus of the humerus (between pectoralis major and teres major)', 'Surco intertubercular del húmero (entre pectoral mayor y redondo mayor)'),
  f: L('Rotation interne, adduction et extension du bras ; muscle accessoire de la respiration', 'Arm internal rotation, adduction and extension; accessory respiratory muscle', 'Rotación interna, aducción y extensión del brazo; músculo accesorio de la respiración'),
  src: [KH('latissimus-dorsi-muscle', 'Latissimus dorsi muscle')]
};
const TFL = {
  o: L('Lèvre externe de la crête iliaque antérieure et EIAS', 'Outer lip of the anterior iliac crest and ASIS', 'Labio externo de la cresta ilíaca anterior y EIAS'),
  i: L('Condyle latéral du tibia, via la bandelette ilio-tibiale', 'Lateral tibial condyle, via the iliotibial tract', 'Cóndilo lateral de la tibia, vía la cintilla iliotibial'),
  f: L('Hanche : rotation interne, abduction faible. Genou : stabilise hanche et genou', 'Hip: internal rotation, weak abduction. Stabilizes hip and knee', 'Cadera: rotación interna, abducción débil. Estabiliza cadera y rodilla'),
  src: [KH('tensor-fasciae-latae-muscle', 'Tensor fasciae latae muscle')]
};

const MUSCLES = {
  scm: {
    o: L('Chef sternal : face antérieure du manubrium. Chef claviculaire : face supérieure du tiers médial de la clavicule',
      'Sternal head: anterior surface of the manubrium. Clavicular head: upper surface of the medial third of the clavicle',
      'Haz esternal: cara anterior del manubrio. Haz clavicular: cara superior del tercio medial de la clavícula'),
    i: L('Face latérale du processus mastoïde et moitié latérale de la ligne nuchale supérieure', 'Lateral surface of the mastoid process and lateral half of the superior nuchal line', 'Cara lateral de la apófisis mastoides y mitad lateral de la línea nucal superior'),
    f: L('Unilatéral : inclinaison homolatérale et rotation controlatérale (d\'où le positionnement du patient). Bilatéral : extension de la tête, flexion du rachis cervical bas',
      'Unilateral: ipsilateral side bending and contralateral rotation (hence the patient positioning). Bilateral: head extension, lower cervical flexion',
      'Unilateral: inclinación homolateral y rotación contralateral (de ahí la posición del paciente). Bilateral: extensión de la cabeza, flexión cervical baja'),
    src: [KH('sternocleidomastoid-muscle', 'Sternocleidomastoid muscle')]
  },
  'trapeze-sup': {
    o: L('Ligne nuchale supérieure (tiers médial), protubérance occipitale externe, ligament nuchal', 'Superior nuchal line (medial third), external occipital protuberance, nuchal ligament', 'Línea nucal superior (tercio medial), protuberancia occipital externa, ligamento nucal'),
    i: L('Tiers latéral de la clavicule', 'Lateral third of the clavicle', 'Tercio lateral de la clavícula'),
    f: L('Élève la scapula et l\'attire en dedans ; extension et inclinaison homolatérale de la tête, rotation controlatérale', 'Draws the scapula superomedially; head extension and ipsilateral side bending, contralateral rotation', 'Eleva la escápula y la lleva hacia dentro; extensión e inclinación homolateral de la cabeza, rotación contralateral'),
    src: TRAP_SRC
  },
  'trapeze-moy': {
    o: L('Épineuses et ligaments supra-épineux T1-T4 (ou C7-T3)', 'Spinous processes and supraspinous ligaments of T1-T4 (or C7-T3)', 'Espinosas y ligamentos supraespinosos T1-T4 (o C7-T3)'),
    i: L('Bord médial de l\'acromion, crête de l\'épine de la scapula', 'Medial acromial margin, crest of the scapular spine', 'Borde medial del acromion, cresta de la espina escapular'),
    f: L('Attire la scapula en dedans (rétraction)', 'Draws the scapula medially (retraction)', 'Lleva la escápula hacia dentro (retracción)'),
    src: TRAP_SRC
  },
  'trapeze-inf': {
    o: L('Épineuses et ligaments supra-épineux T4-T12', 'Spinous processes and supraspinous ligaments of T4-T12', 'Espinosas y ligamentos supraespinosos T4-T12'),
    i: L('Extrémité médiale de l\'épine de la scapula', 'Medial end of the scapular spine', 'Extremo medial de la espina escapular'),
    f: L('Abaisse la scapula et l\'attire en dedans', 'Draws the scapula inferomedially', 'Desciende la escápula y la lleva hacia dentro'),
    src: TRAP_SRC
  },
  rhomboides: {
    o: L('Petit : ligament nuchal, épineuses C7-T1. Grand : épineuses T2-T5', 'Minor: nuchal ligament, C7-T1 spinous processes. Major: T2-T5 spinous processes', 'Menor: ligamento nucal, espinosas C7-T1. Mayor: espinosas T2-T5'),
    i: L('Petit : racine de l\'épine de la scapula. Grand : bord médial de la scapula (de l\'épine à l\'angle inférieur)', 'Minor: root of the scapular spine. Major: medial border of the scapula (spine to inferior angle)', 'Menor: raíz de la espina escapular. Mayor: borde medial de la escápula (de la espina al ángulo inferior)'),
    f: L('Attirent la scapula en haut et en dedans, tournent la glène vers le bas (inverse de la sonnette externe)', 'Draw the scapula superomedially, rotate the glenoid inferiorly (opposite of the external bell)', 'Llevan la escápula hacia arriba y adentro, rotan la glenoide hacia abajo (lo contrario del campaneo externo)'),
    src: [KH('rhomboid-muscles', 'Rhomboid muscles')]
  },
  'supra-epineux': SUPRA,
  'supra-epineux-alt': SUPRA,
  'infra-epineux': {
    o: L('Fosse infra-épineuse de la scapula', 'Infraspinous fossa of the scapula', 'Fosa infraespinosa de la escápula'),
    i: L('Tubercule majeur de l\'humérus', 'Greater tubercle of the humerus', 'Tubérculo mayor del húmero'),
    f: L('Rotation externe du bras ; stabilise la tête humérale', 'Arm external rotation; stabilizes the humeral head', 'Rotación externa del brazo; estabiliza la cabeza humeral'),
    src: [KH('infraspinatus-muscle', 'Infraspinatus muscle')]
  },
  'grand-rond': TERES_MAJOR,
  'grand-rond-alt': TERES_MAJOR,
  'petit-rond': {
    o: L('Bord latéral de la scapula', 'Lateral border of the scapula', 'Borde lateral de la escápula'),
    i: L('Tubercule majeur de l\'humérus', 'Greater tubercle of the humerus', 'Tubérculo mayor del húmero'),
    f: L('Rotation externe et adduction du bras ; stabilise la tête humérale (le grand rond, lui, est rotateur interne)', 'Arm external rotation and adduction; stabilizes the humeral head (teres major is an internal rotator)', 'Rotación externa y aducción del brazo; estabiliza la cabeza humeral (el redondo mayor es rotador interno)'),
    src: [KH('teres-minor-muscle', 'Teres minor muscle')]
  },
  'grand-pec-clav': {
    o: L('Chef claviculaire : face antérieure de la clavicule médiale. Chef sterno-costal : sternum et 6 premiers cartilages costaux', 'Clavicular head: anterior surface of the medial clavicle. Sternocostal head: sternum and upper six costal cartilages', 'Haz clavicular: cara anterior de la clavícula medial. Haz esternocostal: esternón y 6 primeros cartílagos costales'),
    i: L('Sillon intertuberculaire de l\'humérus', 'Intertubercular sulcus of the humerus', 'Surco intertubercular del húmero'),
    f: L('Adduction et rotation interne du bras ; le chef claviculaire fléchit le bras', 'Arm adduction and internal rotation; the clavicular head flexes the arm', 'Aducción y rotación interna del brazo; el haz clavicular flexiona el brazo'),
    src: PEC_MAJOR_SRC
  },
  'grand-pec-abdo': {
    o: L('Aponévrose du muscle oblique externe (partie abdominale du chef sterno-costal)', 'Aponeurosis of the external oblique (abdominal part of the sternocostal head)', 'Aponeurosis del oblicuo externo (porción abdominal del haz esternocostal)'),
    i: L('Sillon intertuberculaire de l\'humérus', 'Intertubercular sulcus of the humerus', 'Surco intertubercular del húmero'),
    f: L('Adduction et rotation interne du bras ; attire la scapula en avant et en bas', 'Arm adduction and internal rotation; draws the scapula anteroinferiorly', 'Aducción y rotación interna del brazo; lleva la escápula hacia delante y abajo'),
    src: PEC_MAJOR_SRC
  },
  'petit-pec': {
    o: L('Face antérieure des côtes 3 à 5', 'Anterior surface of ribs 3-5', 'Cara anterior de las costillas 3 a 5'),
    i: L('Processus coracoïde de la scapula', 'Coracoid process of the scapula', 'Apófisis coracoides de la escápula'),
    f: L('Attire la scapula en avant et en bas, la stabilise contre le thorax', 'Draws the scapula anteroinferiorly, stabilizes it against the chest wall', 'Lleva la escápula hacia delante y abajo, la estabiliza contra el tórax'),
    src: [KH('pectoralis-minor-muscle', 'Pectoralis minor muscle')]
  },
  'grand-dorsal': LAT,
  'grand-dorsal-ld': LAT,
  'carre-lombes': {
    o: L('Crête iliaque et ligament ilio-lombaire', 'Iliac crest and iliolumbar ligament', 'Cresta ilíaca y ligamento iliolumbar'),
    i: L('Bord inférieur de la 12e côte, processus transverses L1-L4', 'Inferior border of rib 12, L1-L4 transverse processes', 'Borde inferior de la 12.ª costilla, apófisis transversas L1-L4'),
    f: L('Unilatéral : inclinaison homolatérale du tronc (d\'où le rapprochement crête-côte). Bilatéral : extension lombaire, fixe la 12e côte', 'Unilateral: ipsilateral trunk side bending (hence bringing crest and rib together). Bilateral: lumbar extension, fixes rib 12', 'Unilateral: inclinación homolateral del tronco (de ahí acercar cresta y costilla). Bilateral: extensión lumbar, fija la 12.ª costilla'),
    src: [KH('quadratus-lumborum-muscle', 'Quadratus lumborum muscle')]
  },
  'tfl-dl': TFL,
  'tfl-dd': TFL,
  sartorius: {
    o: L('Épine iliaque antéro-supérieure (EIAS)', 'Anterior superior iliac spine (ASIS)', 'Espina ilíaca anterosuperior (EIAS)'),
    i: L('Face médiale supérieure du tibia', 'Superior medial surface of the tibia', 'Cara medial superior de la tibia'),
    f: L('Hanche : flexion, abduction, rotation latérale. Genou : flexion', 'Hip: flexion, abduction, lateral rotation. Knee: flexion', 'Cadera: flexión, abducción, rotación lateral. Rodilla: flexión'),
    src: [TMA('lower-limb/muscles/thigh/anterior-compartment/', 'Muscles in the anterior compartment of the thigh')]
  },
  psoas: {
    o: L('Corps vertébraux et disques T12-L4, processus transverses L1-L5', 'Vertebral bodies and discs T12-L4, transverse processes L1-L5', 'Cuerpos vertebrales y discos T12-L4, apófisis transversas L1-L5'),
    i: L('Petit trochanter du fémur (tendon ilio-psoas)', 'Lesser trochanter of the femur (iliopsoas tendon)', 'Trocánter menor del fémur (tendón iliopsoas)'),
    f: L('Flexion de hanche, rotation latérale de cuisse, inclinaison latérale du tronc', 'Hip flexion, thigh lateral rotation, trunk lateral flexion', 'Flexión de cadera, rotación lateral del muslo, inclinación lateral del tronco'),
    src: [KH('psoas-major-muscle', 'Psoas major muscle')]
  },
  pectine: {
    o: L('Ligne pectinéale du pubis (branche supérieure)', 'Pectineal line of the pubis (superior ramus)', 'Línea pectínea del pubis (rama superior)'),
    i: L('Ligne pectinéale du fémur', 'Pectineal line of the femur', 'Línea pectínea del fémur'),
    f: L('Flexion et adduction de hanche ; stabilise le bassin', 'Hip flexion and adduction; stabilizes the pelvis', 'Flexión y aducción de cadera; estabiliza la pelvis'),
    src: [KH('pectineus-muscle', 'Pectineus muscle')]
  },
  'long-add': {
    o: L('Corps du pubis, sous la crête pubienne', 'Body of the pubis, below the pubic crest', 'Cuerpo del pubis, bajo la cresta púbica'),
    i: L('Tiers moyen de la ligne âpre (lèvre médiale)', 'Middle third of the linea aspera (medial lip)', 'Tercio medio de la línea áspera (labio medial)'),
    f: L('Adduction, flexion et rotation externe de cuisse', 'Thigh adduction, flexion and external rotation', 'Aducción, flexión y rotación externa del muslo'),
    src: [KH('adductor-longus-muscle', 'Adductor longus muscle')]
  },
  'court-add': {
    o: L('Corps et branche inférieure du pubis', 'Body and inferior ramus of the pubis', 'Cuerpo y rama inferior del pubis'),
    i: L('Ligne âpre (lèvre médiale)', 'Linea aspera (medial lip)', 'Línea áspera (labio medial)'),
    f: L('Adduction, flexion et rotation externe de cuisse', 'Thigh adduction, flexion and external rotation', 'Aducción, flexión y rotación externa del muslo'),
    src: [KH('adductor-brevis-muscle', 'Adductor brevis muscle')]
  },
  'grand-add': {
    o: L('Partie adductrice : branches inférieure du pubis et de l\'ischium. Partie ischio-condylaire : tubérosité ischiatique', 'Adductor part: inferior pubic and ischial rami. Ischiocondylar part: ischial tuberosity', 'Porción aductora: ramas inferiores del pubis e isquion. Porción isquiocondílea: tuberosidad isquiática'),
    i: L('Ligne âpre et tubérosité glutéale ; tubercule de l\'adducteur (partie ischio-condylaire)', 'Linea aspera and gluteal tuberosity; adductor tubercle (ischiocondylar part)', 'Línea áspera y tuberosidad glútea; tubérculo del aductor (porción isquiocondílea)'),
    f: L('Adduction de cuisse ; partie adductrice : flexion, partie ischio-condylaire : extension et rotation interne', 'Thigh adduction; adductor part: flexion, ischiocondylar part: extension and internal rotation', 'Aducción del muslo; porción aductora: flexión, porción isquiocondílea: extensión y rotación interna'),
    src: [KH('adductor-magnus', 'Adductor magnus muscle')]
  },
  gracile: {
    o: L('Corps du pubis, branche inférieure du pubis et de l\'ischium', 'Body of the pubis, inferior pubic and ischial rami', 'Cuerpo del pubis, ramas inferiores del pubis e isquion'),
    i: L('Face médiale du tibia proximal (patte d\'oie)', 'Medial proximal tibia (pes anserinus)', 'Cara medial de la tibia proximal (pata de ganso)'),
    f: L('Hanche : flexion, adduction. Genou : flexion, rotation interne', 'Hip: flexion, adduction. Knee: flexion, internal rotation', 'Cadera: flexión, aducción. Rodilla: flexión, rotación interna'),
    src: [KH('gracilis-muscle', 'Gracilis muscle')]
  },
  'droit-femoral': {
    o: L('Épine iliaque antéro-inférieure et sillon supra-acétabulaire', 'Anterior inferior iliac spine and supra-acetabular groove', 'Espina ilíaca anteroinferior y surco supraacetabular'),
    i: L('Patella (tendon quadricipital)', 'Patella (quadriceps tendon)', 'Rótula (tendón cuadricipital)'),
    f: L('Extension du genou et flexion de hanche (seul chef du quadriceps biarticulaire)', 'Knee extension and hip flexion (only biarticular quadriceps head)', 'Extensión de rodilla y flexión de cadera (única cabeza biarticular del cuádriceps)'),
    src: [TMA('lower-limb/muscles/thigh/anterior-compartment/', 'Muscles in the anterior compartment of the thigh')]
  },
  'semi-tendineux': {
    o: L('Tubérosité ischiatique', 'Ischial tuberosity', 'Tuberosidad isquiática'),
    i: L('Tibia proximal sous le condyle médial (patte d\'oie)', 'Proximal tibia below the medial condyle (pes anserinus)', 'Tibia proximal bajo el cóndilo medial (pata de ganso)'),
    f: L('Hanche : extension, rotation interne. Genou : flexion, rotation interne', 'Hip: extension, internal rotation. Knee: flexion, internal rotation', 'Cadera: extensión, rotación interna. Rodilla: flexión, rotación interna'),
    src: [KH('semitendinosus-muscle', 'Semitendinosus muscle')]
  },
  'semi-membraneux': {
    o: L('Tubérosité ischiatique (empreinte supéro-latérale)', 'Ischial tuberosity (superolateral impression)', 'Tuberosidad isquiática (impronta superolateral)'),
    i: L('Condyle médial du tibia', 'Medial condyle of the tibia', 'Cóndilo medial de la tibia'),
    f: L('Hanche : extension, rotation interne. Genou : flexion, rotation interne', 'Hip: extension, internal rotation. Knee: flexion, internal rotation', 'Cadera: extensión, rotación interna. Rodilla: flexión, rotación interna'),
    src: [KH('semimembranosus-muscle', 'Semimembranosus muscle')]
  },
  'biceps-femoral': {
    o: L('Chef long : tubérosité ischiatique. Chef court : ligne âpre (lèvre latérale)', 'Long head: ischial tuberosity. Short head: linea aspera (lateral lip)', 'Cabeza larga: tuberosidad isquiática. Cabeza corta: línea áspera (labio lateral)'),
    i: L('Tête de la fibula', 'Head of the fibula', 'Cabeza del peroné'),
    f: L('Hanche : extension, rotation externe. Genou : flexion, rotation externe', 'Hip: extension, external rotation. Knee: flexion, external rotation', 'Cadera: extensión, rotación externa. Rodilla: flexión, rotación externa'),
    src: [KH('biceps-femoris-muscle', 'Biceps femoris muscle')]
  },
  'grand-fessier': {
    o: L('Sacrum, coccyx, surface glutéale de l\'ilium, fascia thoraco-lombaire, ligament sacro-tubéral', 'Sacrum, coccyx, gluteal surface of the ilium, thoracolumbar fascia, sacrotuberous ligament', 'Sacro, cóccix, cara glútea del ilion, fascia toracolumbar, ligamento sacrotuberoso'),
    i: L('Bandelette ilio-tibiale et tubérosité glutéale du fémur', 'Iliotibial tract and gluteal tuberosity of the femur', 'Cintilla iliotibial y tuberosidad glútea del fémur'),
    f: L('Extension et rotation externe de hanche', 'Hip extension and external rotation', 'Extensión y rotación externa de cadera'),
    src: [KH('gluteus-maximus-muscle', 'Gluteus maximus muscle')]
  },
  'moyen-fessier': {
    o: L('Surface glutéale de l\'ilium', 'Gluteal surface of the ilium', 'Cara glútea del ilion'),
    i: L('Face latérale du grand trochanter', 'Lateral surface of the greater trochanter', 'Cara lateral del trocánter mayor'),
    f: L('Abduction et rotation médiale ; stabilise le bassin à la marche', 'Abduction and medial rotation; stabilizes the pelvis during gait', 'Abducción y rotación medial; estabiliza la pelvis en la marcha'),
    src: [TMA('lower-limb/muscles/gluteal-region/', 'Muscles of the gluteal region')]
  },
  'petit-fessier': {
    o: L('Surface glutéale de l\'ilium (entre lignes glutéales antérieure et inférieure)', 'Gluteal surface of the ilium (between anterior and inferior gluteal lines)', 'Cara glútea del ilion (entre líneas glúteas anterior e inferior)'),
    i: L('Face antérieure du grand trochanter', 'Anterior aspect of the greater trochanter', 'Cara anterior del trocánter mayor'),
    f: L('Abduction, rotation interne (partie antérieure) ; stabilise le bassin', 'Abduction, internal rotation (anterior part); stabilizes the pelvis', 'Abducción, rotación interna (parte anterior); estabiliza la pelvis'),
    src: [KH('gluteus-minimus-muscle', 'Gluteus minimus muscle')]
  }
};
