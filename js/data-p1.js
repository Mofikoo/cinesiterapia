// Practice 1 : palpation du tronc (Prof. Dr. Mireia Yeste, UCV 2026-27)
CARDS.push(
  {
    id: 'scm', p: 'p1', s: '2-5', img: ['scm', 'scm-mastoide'],
    g: L('Cou', 'Neck', 'Cuello'),
    t: L('Sterno-cléido-mastoïdien (SCM)', 'Sternocleidomastoid (SCM)', 'Esternocleidomastoideo (ECM)'),
    d: L(
      'Muscle superficial du cou. Le PDF distingue le chef sternal (sterno-mastoïdien), le chef claviculaire (cléido-mastoïdien) et les portions sterno-occipitale et cléido-occipitale. À la mastoïde, le chef cléido-mastoïdien s\'insère sur la face latérale et le chef sterno-mastoïdien à l\'apex.',
      'Superficial neck muscle. The slides distinguish the sternal head (sternomastoid), the clavicular head (cleidomastoid) and the sterno-occipital and cleido-occipital portions. On the mastoid, the cleidomastoid head inserts on the lateral aspect and the sternomastoid head at the apex.',
      'Músculo superficial del cuello. El PDF distingue el haz esternal (esternomastoideo), el haz clavicular (cleidomastoideo) y las porciones esterno-occipital y cleido-occipital. En la mastoides, el haz cleidomastoideo se inserta en la cara lateral y el esternomastoideo en el vértice.'),
    st: L(
      ['Placer la tête du patient en rotation controlatérale avec une légère inclinaison homolatérale.',
       'Si besoin, demander une légère flexion de la tête pour faire saillir le muscle.',
       'Palper en bas le chef sternal (1, tendon sur le sternum) puis le chef claviculaire (2, plus latéral, sur la clavicule).',
       'Remonter le long du muscle jusqu\'au processus mastoïde de l\'os temporal.',
       'À la mastoïde : chef cléido-mastoïdien sur la face latérale, chef sterno-mastoïdien à l\'apex.'],
      ['Place the patient\'s head in contralateral rotation with slight homolateral side bending.',
       'If needed, ask for slight head flexion to make the muscle stand out.',
       'Palpate low down the sternal head (1, tendon on the sternum), then the clavicular head (2, more lateral, on the clavicle).',
       'Follow the muscle up to the mastoid process of the temporal bone.',
       'At the mastoid: cleidomastoid head on the lateral aspect, sternomastoid head at the apex.'],
      ['Colocar la cabeza del paciente en rotación contralateral con ligera inclinación homolateral.',
       'Si es necesario, pedir una ligera flexión de la cabeza para que el músculo resalte.',
       'Palpar abajo el haz esternal (1, tendón sobre el esternón) y luego el haz clavicular (2, más lateral, sobre la clavícula).',
       'Seguir el músculo hasta la apófisis mastoides del temporal.',
       'En la mastoides: haz cleidomastoideo en la cara lateral, haz esternomastoideo en el vértice.']),
    w: {
      x: L('Origines : chef sternal = partie supérieure de la face antérieure du manubrium ; chef claviculaire = face supérieure du tiers médial de la clavicule. Contraction unilatérale : inclinaison homolatérale et rotation controlatérale du cou (d\'où le positionnement du patient).',
        'Origins: sternal head = upper anterior surface of the manubrium; clavicular head = upper surface of the medial third of the clavicle. Unilateral contraction: ipsilateral side bending and contralateral rotation of the neck (hence the patient positioning).',
        'Orígenes: haz esternal = parte superior de la cara anterior del manubrio; haz clavicular = cara superior del tercio medial de la clavícula. Contracción unilateral: inclinación homolateral y rotación contralateral del cuello (de ahí la posición del paciente).'),
      src: [KH('sternocleidomastoid-muscle', 'Sternocleidomastoid muscle')]
    }
  },
  {
    id: 'trapeze-sup', p: 'p1', s: '6-7', img: ['trapeze-sup'],
    g: L('Trapèze', 'Trapezius', 'Trapecio'),
    t: L('Trapèze : fibres supérieures', 'Trapezius: superior fibres', 'Trapecio: fibras superiores'),
    d: L('Partie descendante (fibres supérieures) du trapèze. Sur la même image on voit aussi les fibres inférieures (partie ascendante, flèches 2).',
      'Descending part (superior fibres) of the trapezius. The same picture also shows the inferior fibres (ascending part, arrows 2).',
      'Porción descendente (fibras superiores) del trapecio. En la misma imagen se ven también las fibras inferiores (porción ascendente, flechas 2).'),
    st: L(
      ['Patient en décubitus latéral.', 'Thérapeute devant le patient.',
       'Résistance sur la face latérale de la tête + l\'épaule homolatérale.',
       'Observer et palper l\'activation : 1 = fibres supérieures (partie descendante), 2 = fibres inférieures (partie ascendante).'],
      ['Patient side-lying.', 'Therapist in front of the patient.',
       'Resistance on the lateral side of the head + the homolateral shoulder.',
       'Observe and palpate the activation: 1 = superior fibres (descending part), 2 = inferior fibres (ascending part).'],
      ['Paciente en decúbito lateral.', 'Fisioterapeuta delante del paciente.',
       'Resistencia en la cara lateral de la cabeza + el hombro homolateral.',
       'Observar y palpar la activación: 1 = fibras superiores (porción descendente), 2 = fibras inferiores (porción ascendente).']),
    w: {
      x: L('Partie descendante : de la ligne nuchale supérieure, la protubérance occipitale externe et le ligament nuchal vers le tiers latéral de la clavicule.',
        'Descending part: from the superior nuchal line, external occipital protuberance and nuchal ligament to the lateral third of the clavicle.',
        'Porción descendente: desde la línea nucal superior, la protuberancia occipital externa y el ligamento nucal hasta el tercio lateral de la clavícula.'),
      src: [KH('trapezius-muscle', 'Trapezius muscle')]
    }
  },
  {
    id: 'trapeze-moy', p: 'p1', s: '8', img: ['trapeze-moy'],
    g: L('Trapèze', 'Trapezius', 'Trapecio'),
    t: L('Trapèze : fibres moyennes', 'Trapezius: middle fibres', 'Trapecio: fibras medias'),
    d: L('Partie transverse (fibres moyennes) du trapèze, entre la colonne thoracique et l\'épine de la scapula.',
      'Transverse part (middle fibres) of the trapezius, between the thoracic spine and the spine of the scapula.',
      'Porción transversa (fibras medias) del trapecio, entre la columna torácica y la espina de la escápula.'),
    st: L(
      ['Patient en décubitus latéral, épaule en flexion de 90°.', 'Thérapeute devant le patient.',
       'Résistance sur la face latérale du bras ; demander une abduction horizontale.',
       'Palper la contraction des fibres moyennes.'],
      ['Patient side-lying, shoulder flexed to 90°.', 'Therapist in front of the patient.',
       'Resistance on the lateral side of the arm; ask for horizontal abduction.',
       'Palpate the contraction of the middle fibres.'],
      ['Paciente en decúbito lateral, hombro en flexión de 90°.', 'Fisioterapeuta delante del paciente.',
       'Resistencia en la cara lateral del brazo; pedir una abducción horizontal.',
       'Palpar la contracción de las fibras medias.']),
    n: L('Le PDF écrit « middle fibres (descending part) » : les fibres moyennes correspondent à la partie transverse.',
      'The slide says "middle fibres (descending part)": middle fibres are the transverse part.',
      'El PDF dice «middle fibres (descending part)»: las fibras medias corresponden a la porción transversa.'),
    w: {
      x: L('Partie transverse : des processus épineux T1-T4 (ou C7-T3) vers le bord médial de l\'acromion et la crête de l\'épine de la scapula.',
        'Transverse part: from the spinous processes of T1-T4 (or C7-T3) to the medial acromial margin and the crest of the scapular spine.',
        'Porción transversa: desde las apófisis espinosas de T1-T4 (o C7-T3) hasta el borde medial del acromion y la cresta de la espina escapular.'),
      src: [KH('trapezius-muscle', 'Trapezius muscle')]
    }
  },
  {
    id: 'trapeze-inf', p: 'p1', s: '9', img: ['trapeze-inf'],
    g: L('Trapèze', 'Trapezius', 'Trapecio'),
    t: L('Trapèze : fibres inférieures', 'Trapezius: inferior fibres', 'Trapecio: fibras inferiores'),
    d: L('Partie ascendante (fibres inférieures) du trapèze, en dedans et en dessous de la scapula.',
      'Ascending part (inferior fibres) of the trapezius, medial and below the scapula.',
      'Porción ascendente (fibras inferiores) del trapecio, medial e inferior a la escápula.'),
    st: L(
      ['Patient en décubitus latéral, épaule et coude fléchis à 90°.', 'Thérapeute devant le patient.',
       'Résistance sur la face latérale du bras ; demander une abduction horizontale.',
       'Palper les fibres inférieures entre le bord médial de la scapula et les épineuses thoraciques basses.'],
      ['Patient side-lying, shoulder and elbow flexed to 90°.', 'Therapist in front of the patient.',
       'Resistance on the lateral side of the arm; ask for horizontal abduction.',
       'Palpate the inferior fibres between the medial border of the scapula and the lower thoracic spinous processes.'],
      ['Paciente en decúbito lateral, hombro y codo en flexión de 90°.', 'Fisioterapeuta delante del paciente.',
       'Resistencia en la cara lateral del brazo; pedir una abducción horizontal.',
       'Palpar las fibras inferiores entre el borde medial de la escápula y las espinosas torácicas bajas.']),
    n: L('Le PDF écrit « inferior fibres (descending part) » : les fibres inférieures correspondent à la partie ascendante.',
      'The slide says "inferior fibres (descending part)": inferior fibres are the ascending part.',
      'El PDF dice «inferior fibres (descending part)»: las fibras inferiores corresponden a la porción ascendente.'),
    w: {
      x: L('Partie ascendante : des processus épineux T4-T12 vers l\'extrémité médiale de l\'épine de la scapula.',
        'Ascending part: from the spinous processes of T4-T12 to the medial end of the scapular spine.',
        'Porción ascendente: desde las apófisis espinosas de T4-T12 hasta el extremo medial de la espina escapular.'),
      src: [KH('trapezius-muscle', 'Trapezius muscle')]
    }
  },
  {
    id: 'rhomboides', p: 'p1', s: '10-11', img: ['rhomboides'],
    g: L('Ceinture scapulaire', 'Shoulder girdle', 'Cintura escapular'),
    t: L('Rhomboïdes (petit et grand)', 'Rhomboids (minor and major)', 'Romboides (menor y mayor)'),
    d: L('Muscles profonds sous le trapèze, entre le bord spinal (médial) de la scapula et la colonne thoracique. Petit rhomboïde en haut, grand rhomboïde en dessous.',
      'Deep muscles under the trapezius, between the spinal (medial) border of the scapula and the thoracic spine. Rhomboid minor above, rhomboid major below.',
      'Músculos profundos bajo el trapecio, entre el borde espinal (medial) de la escápula y la columna torácica. Romboides menor arriba, mayor debajo.'),
    st: L(
      ['Patient en décubitus latéral, épaule et coude fléchis à 90°.',
       'Thérapeute devant le patient ; réaliser une petite sonnette externe de la scapula.',
       'Palper entre le bord spinal de la scapula et la colonne thoracique.'],
      ['Patient side-lying, shoulder and elbow flexed to 90°.',
       'Therapist in front; perform a small external bell (upward rotation) of the scapula.',
       'Palpate between the spinal border of the scapula and the thoracic spine.'],
      ['Paciente en decúbito lateral, hombro y codo en flexión de 90°.',
       'Fisioterapeuta delante; realizar un pequeño campaneo externo de la escápula.',
       'Palpar entre el borde espinal de la escápula y la columna torácica.']),
    w: {
      x: L('Petit rhomboïde : ligament nuchal, épineuses C7-T1 → racine de l\'épine de la scapula. Grand rhomboïde : épineuses T2-T5 → bord médial de la scapula. Action : attirent la scapula en haut et en dedans et tournent la glène vers le bas (l\'inverse de la sonnette externe).',
        'Rhomboid minor: nuchal ligament, C7-T1 spinous processes → root of the scapular spine. Rhomboid major: T2-T5 spinous processes → medial border of the scapula. Action: draw the scapula superomedially and rotate the glenoid inferiorly (opposite of the external bell).',
        'Romboides menor: ligamento nucal, espinosas C7-T1 → raíz de la espina escapular. Romboides mayor: espinosas T2-T5 → borde medial de la escápula. Acción: llevan la escápula hacia arriba y adentro y rotan la glenoide hacia abajo (lo contrario del campaneo externo).'),
      src: [KH('rhomboid-muscles', 'Rhomboid muscles')]
    }
  },
  {
    id: 'supra-epineux', p: 'p1', s: '12-13', img: ['supra-epineux'],
    g: L('Coiffe des rotateurs', 'Rotator cuff', 'Manguito rotador'),
    t: L('Supra-épineux', 'Supraspinatus', 'Supraespinoso'),
    d: L('Muscle de la fosse supra-épineuse, palpé juste au-dessus de l\'épine de la scapula.',
      'Muscle of the supraspinous fossa, palpated just above the spine of the scapula.',
      'Músculo de la fosa supraespinosa, palpado justo por encima de la espina de la escápula.'),
    st: L(
      ['Patient en décubitus latéral, bras le long du thorax.', 'Thérapeute devant le patient.',
       'Résistance au coude contre l\'abduction : contraction isométrique.',
       'Palper avec la main droite au-dessus de l\'épine de la scapula.'],
      ['Patient side-lying, arm close to the chest.', 'Therapist in front of the patient.',
       'Resistance at the elbow against abduction: isometric contraction.',
       'Palpate with the right hand above the spine of the scapula.'],
      ['Paciente en decúbito lateral, brazo pegado al tórax.', 'Fisioterapeuta delante del paciente.',
       'Resistencia en el codo contra la abducción: contracción isométrica.',
       'Palpar con la mano derecha por encima de la espina de la escápula.']),
    w: {
      x: L('Fosse supra-épineuse → tubercule majeur de l\'humérus. Action : abduction du bras et stabilisation de la tête humérale dans la glène.',
        'Supraspinous fossa → greater tubercle of the humerus. Action: arm abduction and stabilisation of the humeral head in the glenoid.',
        'Fosa supraespinosa → tubérculo mayor del húmero. Acción: abducción del brazo y estabilización de la cabeza humeral en la glenoide.'),
      src: [KH('supraspinatus-muscle', 'Supraspinatus muscle')]
    }
  },
  {
    id: 'supra-epineux-alt', p: 'p1', s: '14', img: ['supra-epineux-alt'],
    g: L('Coiffe des rotateurs', 'Rotator cuff', 'Manguito rotador'),
    t: L('Supra-épineux (variante)', 'Supraspinatus (alternative)', 'Supraespinoso (alternativa)'),
    d: L('Variante du PDF avec l\'épaule en abduction de 90°.',
      'Alternative from the slides with the shoulder in 90° abduction.',
      'Variante del PDF con el hombro en abducción de 90°.'),
    st: L(
      ['Patient en décubitus latéral, épaule en abduction de 90° et coude fléchi.', 'Thérapeute devant le patient.',
       'Résistance au coude contre l\'abduction : contraction isométrique.',
       'Palper avec la main droite au-dessus de l\'épine de la scapula.'],
      ['Patient side-lying, shoulder in 90° abduction, elbow flexed.', 'Therapist in front of the patient.',
       'Resistance at the elbow against abduction: isometric contraction.',
       'Palpate with the right hand above the spine of the scapula.'],
      ['Paciente en decúbito lateral, hombro en abducción de 90° y codo flexionado.', 'Fisioterapeuta delante del paciente.',
       'Resistencia en el codo contra la abducción: contracción isométrica.',
       'Palpar con la mano derecha por encima de la espina de la escápula.'])
  },
  {
    id: 'infra-epineux', p: 'p1', s: '15-16', img: ['infra-epineux'],
    g: L('Coiffe des rotateurs', 'Rotator cuff', 'Manguito rotador'),
    t: L('Infra-épineux', 'Infraspinatus', 'Infraespinoso'),
    d: L('Muscle de la fosse infra-épineuse, sous l\'épine de la scapula. Les mains délimitent le corps musculaire.',
      'Muscle of the infraspinous fossa, below the spine of the scapula. The hands outline the muscle belly.',
      'Músculo de la fosa infraespinosa, bajo la espina de la escápula. Las manos delimitan el vientre muscular.'),
    st: L(
      ['Patient en décubitus latéral, épaule en abduction de 90° et coude fléchi à 90°.', 'Thérapeute devant le patient.',
       'Résistance contre la rotation externe de l\'épaule.',
       'Délimiter avec les mains le corps musculaire de l\'infra-épineux sous l\'épine de la scapula.'],
      ['Patient side-lying, shoulder in 90° abduction, elbow flexed to 90°.', 'Therapist in front of the patient.',
       'Resistance against shoulder external rotation.',
       'Outline the infraspinatus muscle belly with your hands below the spine of the scapula.'],
      ['Paciente en decúbito lateral, hombro en abducción de 90° y codo en flexión de 90°.', 'Fisioterapeuta delante del paciente.',
       'Resistencia contra la rotación externa del hombro.',
       'Delimitar con las manos el vientre del infraespinoso bajo la espina de la escápula.']),
    n: L('Le PDF ne précise pas la position du patient ; l\'image montre un décubitus latéral.',
      'The slide does not state the patient position; the picture shows side-lying.',
      'El PDF no precisa la posición del paciente; la imagen muestra decúbito lateral.'),
    w: {
      x: L('Fosse infra-épineuse → tubercule majeur de l\'humérus. Action : rotation externe du bras, stabilisation de la tête humérale.',
        'Infraspinous fossa → greater tubercle of the humerus. Action: arm external rotation, stabilisation of the humeral head.',
        'Fosa infraespinosa → tubérculo mayor del húmero. Acción: rotación externa del brazo, estabilización de la cabeza humeral.'),
      src: [KH('infraspinatus-muscle', 'Infraspinatus muscle')]
    }
  },
  {
    id: 'grand-rond', p: 'p1', s: '17-18', img: ['grand-rond'],
    g: L('Ceinture scapulaire', 'Shoulder girdle', 'Cintura escapular'),
    t: L('Grand rond', 'Teres major', 'Redondo mayor'),
    d: L('Muscle allant de l\'angle inférieur de la scapula à l\'humérus. Le doigt pointe le grand rond.',
      'Muscle running from the inferior angle of the scapula to the humerus. The finger points to teres major.',
      'Músculo que va del ángulo inferior de la escápula al húmero. El dedo señala el redondo mayor.'),
    st: L(
      ['Patient en décubitus latéral, épaule en rotation interne.', 'Thérapeute devant le patient.',
       'Résistance contre l\'extension du coude + l\'adduction / rotation interne de l\'épaule.',
       'Le doigt pointe le grand rond près de l\'angle inférieur de la scapula.'],
      ['Patient side-lying, shoulder in internal rotation.', 'Therapist in front of the patient.',
       'Resistance against elbow extension + shoulder adduction / internal rotation.',
       'The finger points to teres major near the inferior angle of the scapula.'],
      ['Paciente en decúbito lateral, hombro en rotación interna.', 'Fisioterapeuta delante del paciente.',
       'Resistencia contra la extensión del codo + aducción / rotación interna del hombro.',
       'El dedo señala el redondo mayor cerca del ángulo inferior de la escápula.']),
    w: {
      x: L('Angle inférieur et partie basse du bord latéral de la scapula → lèvre médiale du sillon intertuberculaire. Action : extension et rotation interne du bras, aide à l\'adduction.',
        'Inferior angle and lower lateral border of the scapula → medial lip of the intertubercular sulcus. Action: arm extension and internal rotation, assists adduction.',
        'Ángulo inferior y parte baja del borde lateral de la escápula → labio medial del surco intertubercular. Acción: extensión y rotación interna del brazo, ayuda a la aducción.'),
      src: [KH('teres-major-muscle', 'Teres major muscle')]
    }
  },
  {
    id: 'grand-rond-alt', p: 'p1', s: '19', img: ['grand-rond-alt'],
    g: L('Ceinture scapulaire', 'Shoulder girdle', 'Cintura escapular'),
    t: L('Grand rond (variante)', 'Teres major (alternative)', 'Redondo mayor (alternativa)'),
    d: L('Variante : le bras du patient repose sur le thérapeute.', 'Alternative: the patient\'s arm rests on the therapist.', 'Variante: el brazo del paciente descansa sobre el fisioterapeuta.'),
    st: L(
      ['Patient en décubitus latéral, épaule à 90°, bras reposant sur le thérapeute.', 'Thérapeute devant le patient.',
       'Résistance contre la rotation interne de l\'épaule.', 'Le doigt pointe le grand rond.'],
      ['Patient side-lying, shoulder at 90°, arm resting on the therapist.', 'Therapist in front of the patient.',
       'Resistance against shoulder internal rotation.', 'The finger points to teres major.'],
      ['Paciente en decúbito lateral, hombro a 90°, brazo apoyado sobre el fisioterapeuta.', 'Fisioterapeuta delante del paciente.',
       'Resistencia contra la rotación interna del hombro.', 'El dedo señala el redondo mayor.'])
  },
  {
    id: 'petit-rond', p: 'p1', s: '20-22', img: ['petit-rond'],
    g: L('Coiffe des rotateurs', 'Rotator cuff', 'Manguito rotador'),
    t: L('Petit rond', 'Teres minor', 'Redondo menor'),
    d: L('Muscle de la coiffe situé au-dessus du grand rond, le long du bord latéral de la scapula. On perçoit la contraction sous les doigts.',
      'Rotator cuff muscle above teres major, along the lateral border of the scapula. The contraction is felt under the fingers.',
      'Músculo del manguito situado por encima del redondo mayor, a lo largo del borde lateral de la escápula. Se percibe la contracción bajo los dedos.'),
    st: L(
      ['Patient en décubitus latéral, épaule en abduction + flexion de 90°.', 'Thérapeute devant le patient.',
       'Résistance contre la rotation externe de l\'épaule.',
       'Le doigt pointe le petit rond (au-dessus du grand rond) : percevoir la contraction sous les doigts.'],
      ['Patient side-lying, shoulder in abduction + 90° flexion.', 'Therapist in front of the patient.',
       'Resistance against shoulder external rotation.',
       'The finger points to teres minor (above teres major): feel the contraction under the fingers.'],
      ['Paciente en decúbito lateral, hombro en abducción + flexión de 90°.', 'Fisioterapeuta delante del paciente.',
       'Resistencia contra la rotación externa del hombro.',
       'El dedo señala el redondo menor (por encima del redondo mayor): percibir la contracción bajo los dedos.']),
    w: {
      x: L('Bord latéral de la scapula → tubercule majeur de l\'humérus. Action : rotation externe (comme l\'infra-épineux), d\'où la résistance en rotation externe ; le grand rond, lui, est rotateur interne.',
        'Lateral border of the scapula → greater tubercle of the humerus. Action: external rotation (like infraspinatus), hence the external rotation resistance; teres major is an internal rotator.',
        'Borde lateral de la escápula → tubérculo mayor del húmero. Acción: rotación externa (como el infraespinoso), de ahí la resistencia en rotación externa; el redondo mayor es rotador interno.'),
      src: [KH('teres-minor-muscle', 'Teres minor muscle'), KH('teres-major-muscle', 'Teres major muscle')]
    }
  },
  {
    id: 'grand-pec-clav', p: 'p1', s: '23-24', img: ['grand-pec-clav'],
    g: L('Thorax', 'Chest', 'Tórax'),
    t: L('Grand pectoral : parties claviculaire et sterno-costale', 'Pectoralis major: clavicular and sternocostal parts', 'Pectoral mayor: porciones clavicular y esternocostal'),
    d: L('La musculature est accessible à la main entre l\'aisselle et le mamelon. 1 = partie claviculaire, 2 = partie sterno-costale.',
      'The muscle is accessible with the hand between the axilla and the nipple. 1 = clavicular part, 2 = sternocostal part.',
      'La musculatura es accesible con la mano entre la axila y el pezón. 1 = porción clavicular, 2 = porción esternocostal.'),
    st: L(
      ['Patient en décubitus dorsal, épaule en abduction, coude fléchi à 90°.', 'Thérapeute devant le patient.',
       'Résistance sur la face interne du bras contre l\'adduction horizontale.',
       'Palper entre l\'aisselle et le mamelon : partie claviculaire (1) et sterno-costale (2).'],
      ['Patient supine, shoulder abducted, elbow flexed to 90°.', 'Therapist in front of the patient.',
       'Resistance on the inner side of the arm against horizontal adduction.',
       'Palpate between the axilla and the nipple: clavicular (1) and sternocostal (2) parts.'],
      ['Paciente en decúbito supino, hombro en abducción, codo en flexión de 90°.', 'Fisioterapeuta delante del paciente.',
       'Resistencia en la cara interna del brazo contra la aducción horizontal.',
       'Palpar entre la axila y el pezón: porción clavicular (1) y esternocostal (2).']),
    w: {
      x: L('Chef claviculaire : face antérieure de la clavicule médiale. Chef sterno-costal : sternum, 6 premiers cartilages costaux, aponévrose de l\'oblique externe. Insertion : sillon intertuberculaire. Action : adduction et rotation interne du membre supérieur ; le chef claviculaire fléchit le bras.',
        'Clavicular head: anterior surface of the medial clavicle. Sternocostal head: sternum, upper six costal cartilages, external oblique aponeurosis. Insertion: intertubercular sulcus. Action: adduction and internal rotation of the upper limb; the clavicular head flexes the arm.',
        'Haz clavicular: cara anterior de la clavícula medial. Haz esternocostal: esternón, 6 primeros cartílagos costales, aponeurosis del oblicuo externo. Inserción: surco intertubercular. Acción: aducción y rotación interna del miembro superior; el haz clavicular flexiona el brazo.'),
      src: [TMA('upper-limb/muscles/pectoral-region/', 'Muscles of the pectoral region')]
    }
  },
  {
    id: 'grand-pec-abdo', p: 'p1', s: '25', img: ['grand-pec-abdo'],
    g: L('Thorax', 'Chest', 'Tórax'),
    t: L('Grand pectoral : partie abdominale', 'Pectoralis major: abdominal part', 'Pectoral mayor: porción abdominal'),
    d: L('On palpe le faisceau inféro-externe du grand pectoral (bord inférieur du pli axillaire antérieur).',
      'Palpate the infero-lateral fascicle of pectoralis major (lower edge of the anterior axillary fold).',
      'Se palpa el fascículo inferoexterno del pectoral mayor (borde inferior del pliegue axilar anterior).'),
    st: L(
      ['Patient assis, épaule en abduction de 90°.', 'Le thérapeute demande une adduction du bras.',
       'Résistance sur la face interne du bras contre l\'adduction horizontale.',
       'Palper (pince) le faisceau inféro-externe du grand pectoral.'],
      ['Patient seated, shoulder abducted to 90°.', 'Therapist asks for arm adduction.',
       'Resistance on the inner side of the arm against horizontal adduction.',
       'Palpate (pinch) the infero-lateral fascicle of pectoralis major.'],
      ['Paciente sentado, hombro en abducción de 90°.', 'El fisioterapeuta pide una aducción del brazo.',
       'Resistencia en la cara interna del brazo contra la aducción horizontal.',
       'Palpar (pinza) el fascículo inferoexterno del pectoral mayor.'])
  },
  {
    id: 'petit-pec', p: 'p1', s: '26-27', img: ['petit-pec', 'petit-pec-2'],
    g: L('Thorax', 'Chest', 'Tórax'),
    t: L('Petit pectoral', 'Pectoralis minor', 'Pectoral menor'),
    d: L('Muscle profond, sous le grand pectoral, tendu des côtes vers le processus coracoïde. La main dans le dos (rotation interne) relâche le grand pectoral et active le petit pectoral.',
      'Deep muscle under pectoralis major, running from the ribs to the coracoid process. Hand behind the back (internal rotation) relaxes pectoralis major and activates pectoralis minor.',
      'Músculo profundo, bajo el pectoral mayor, que va de las costillas a la apófisis coracoides. La mano en la espalda (rotación interna) relaja el pectoral mayor y activa el pectoral menor.'),
    st: L(
      ['Patient assis ou en décubitus dorsal, épaule en rotation interne (main dans le dos).',
       'Le thérapeute aide la rotation interne.',
       'Placer un doigt dans l\'aisselle.',
       'Pousser obliquement vers le processus coracoïde de la scapula pour sentir le muscle.'],
      ['Patient seated or supine, shoulder in internal rotation (hand behind the back).',
       'Therapist assists the internal rotation.',
       'Place a finger in the axilla.',
       'Push obliquely towards the coracoid process of the scapula to feel the muscle.'],
      ['Paciente sentado o en decúbito supino, hombro en rotación interna (mano en la espalda).',
       'El fisioterapeuta ayuda la rotación interna.',
       'Colocar un dedo en la axila.',
       'Empujar oblicuamente hacia la apófisis coracoides de la escápula para notar el músculo.']),
    w: {
      x: L('Côtes 3 à 5 → processus coracoïde. Action : attire la scapula en avant et en bas, la stabilise contre le thorax.',
        'Ribs 3-5 → coracoid process. Action: draws the scapula anteroinferiorly and stabilises it against the chest wall.',
        'Costillas 3 a 5 → apófisis coracoides. Acción: lleva la escápula hacia delante y abajo y la estabiliza contra el tórax.'),
      src: [KH('pectoralis-minor-muscle', 'Pectoralis minor muscle')]
    }
  },
  {
    id: 'grand-dorsal', p: 'p1', s: '28-29', img: ['grand-dorsal'],
    g: L('Dos', 'Back', 'Espalda'),
    t: L('Grand dorsal (repérage)', 'Latissimus dorsi (location)', 'Dorsal ancho (localización)'),
    d: L('Avec le trapèze, c\'est le muscle le plus superficiel du dos. En dehors du trapèze inférieur, sous ses fibres, on trouve le grand dorsal (1).',
      'Together with the trapezius, the most superficial muscle of the back. Lateral to the lower trapezius, below its fibres, lies latissimus dorsi (1).',
      'Junto con el trapecio, es el músculo más superficial de la espalda. Lateral al trapecio inferior, bajo sus fibras, se encuentra el dorsal ancho (1).'),
    st: L(
      ['Patient en décubitus ventral.',
       'Repérer les fibres inférieures du trapèze.',
       'Se placer en dehors et en dessous de celles-ci : palper le grand dorsal.'],
      ['Patient prone.',
       'Locate the lower fibres of the trapezius.',
       'Move lateral and below them: palpate latissimus dorsi.'],
      ['Paciente en decúbito prono.',
       'Localizar las fibras inferiores del trapecio.',
       'Situarse lateral e inferior a ellas: palpar el dorsal ancho.']),
    w: {
      x: L('Origines : épineuses T7-T12 et fascia thoraco-lombaire, crête iliaque (tiers postérieur), côtes 9-12, angle inférieur de la scapula. Insertion : sillon intertuberculaire. Action : rotation interne, adduction et extension du bras.',
        'Origins: T7-T12 spinous processes and thoracolumbar fascia, posterior third of the iliac crest, ribs 9-12, inferior angle of the scapula. Insertion: intertubercular sulcus. Action: arm internal rotation, adduction and extension.',
        'Orígenes: espinosas T7-T12 y fascia toracolumbar, tercio posterior de la cresta ilíaca, costillas 9-12, ángulo inferior de la escápula. Inserción: surco intertubercular. Acción: rotación interna, aducción y extensión del brazo.'),
      src: [KH('latissimus-dorsi-muscle', 'Latissimus dorsi muscle')]
    }
  },
  {
    id: 'grand-dorsal-ld', p: 'p1', s: '30', img: ['grand-dorsal-ld', 'grand-dorsal-schema'],
    g: L('Dos', 'Back', 'Espalda'),
    t: L('Grand dorsal (contraction)', 'Latissimus dorsi (contraction)', 'Dorsal ancho (contracción)'),
    d: L('On peut palper la contraction en tenant le pli axillaire postérieur entre le pouce et les doigts.',
      'Palpate the contraction by holding the posterior axillary fold between finger and thumb.',
      'Se palpa la contracción sujetando el pliegue axilar posterior entre el pulgar y los dedos.'),
    st: L(
      ['Patient en décubitus latéral, bras en abduction de 90°.', 'Thérapeute derrière le patient.',
       'Résistance contre l\'adduction du bras (pression vers le bas).',
       'Pincer le pli axillaire postérieur entre pouce et doigts et sentir la contraction ; on peut marquer le bord antérieur du muscle.'],
      ['Patient side-lying, arm abducted to 90°.', 'Therapist behind the patient.',
       'Resistance against arm adduction (downward pressure).',
       'Pinch the posterior axillary fold between thumb and fingers and feel the contraction; the anterior border of the muscle can be marked.'],
      ['Paciente en decúbito lateral, brazo en abducción de 90°.', 'Fisioterapeuta detrás del paciente.',
       'Resistencia contra la aducción del brazo (presión hacia abajo).',
       'Pinzar el pliegue axilar posterior entre pulgar y dedos y notar la contracción; se puede marcar el borde anterior del músculo.'])
  },
  {
    id: 'carre-lombes', p: 'p1', s: '31-32', img: ['carre-lombes'],
    g: L('Lombaires', 'Lumbar', 'Lumbar'),
    t: L('Carré des lombes', 'Quadratus lumborum', 'Cuadrado lumbar'),
    d: L('Muscle profond tendu entre la 12e côte et la crête iliaque. Il est palpé avec la main crâniale.',
      'Deep muscle between the 12th rib and the iliac crest. It is palpated with the cranial hand.',
      'Músculo profundo entre la 12.ª costilla y la cresta ilíaca. Se palpa con la mano craneal.'),
    st: L(
      ['Patient en décubitus latéral.',
       'Main crâniale du thérapeute sur la 12e côte, main caudale sur la crête iliaque.',
       'Demander au patient de rapprocher la crête iliaque de la côte contre la main du thérapeute.',
       'Palper le muscle avec la main crâniale.'],
      ['Patient side-lying.',
       'Therapist\'s cranial hand on the 12th rib, caudal hand on the iliac crest.',
       'Ask the patient to bring the iliac crest closer to the rib against the therapist\'s hand.',
       'Palpate the muscle with the cranial hand.'],
      ['Paciente en decúbito lateral.',
       'Mano craneal del fisioterapeuta en la 12.ª costilla, mano caudal en la cresta ilíaca.',
       'Pedir al paciente que acerque la cresta ilíaca a la costilla contra la mano del fisioterapeuta.',
       'Palpar el músculo con la mano craneal.']),
    w: {
      x: L('Crête iliaque et ligament ilio-lombaire → bord inférieur de la 12e côte et transverses L1-L4. Contraction unilatérale : inclinaison homolatérale du tronc (d\'où le rapprochement crête-côte).',
        'Iliac crest and iliolumbar ligament → inferior border of rib 12 and L1-L4 transverse processes. Unilateral contraction: ipsilateral trunk side bending (hence bringing crest and rib together).',
        'Cresta ilíaca y ligamento iliolumbar → borde inferior de la 12.ª costilla y transversas L1-L4. Contracción unilateral: inclinación homolateral del tronco (de ahí acercar cresta y costilla).'),
      src: [KH('quadratus-lumborum-muscle', 'Quadratus lumborum muscle')]
    }
  }
);
