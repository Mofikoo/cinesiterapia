// Helpers partagés par les fichiers de données (chargés en premier)
const CARDS = [];
const L = (fr, en, es) => ({ fr, en, es });
const KH = (slug, name) => ({ n: `Kenhub : ${name}`, u: `https://www.kenhub.com/en/library/anatomy/${slug}` });
const TMA = (path, name) => ({ n: `TeachMeAnatomy : ${name}`, u: `https://teachmeanatomy.info/${path}` });
