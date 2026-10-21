# Kiné Révision

Application web de révision des palpations et mobilisations de kinésithérapie (examen pratique).

- HTML / CSS / JavaScript vanilla, aucune dépendance, aucune base de données : tout le contenu est codé en dur dans `js/data-*.js`.
- Langues : français, anglais, espagnol (engrenage en haut à droite).
- Une fiche par manœuvre : titre, photo extraite du PDF, description, ordre d'exécution, remarques sur les erreurs du PDF et compléments web sourcés.

## Contenu

| Fichier | Source |
|---|---|
| `js/data-p1.js` | Practice 1 : Trunk palpation |
| `js/data-p2.js` | Practice 2 : Spine mobilizations |
| `js/data-p3.js` | Practice 3 : Shoulder mobilizations |
| `js/data-p6.js` | Practice 6 : Lower limb palpation |

Supports de cours : Mireia Yeste (Universidad Católica de Valencia, 2026-27). Compléments : Kenhub, TeachMeAnatomy, E3 Rehab (liens sur chaque fiche).

## Lancer en local

```sh
python3 -m http.server 8000
```

Hébergement : Vercel (site statique, pas de build).
