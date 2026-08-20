# Portfolio — Abdoulaye Ba

Portfolio professionnel statique (HTML / CSS / JavaScript vanilla, sans framework) — construit pour présenter le positionnement **Data Analyst Junior | Ingénierie Logicielle | Développement Web**.

## Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── profile.jpg          → ta photo (déjà intégrée)
│   └── cv-abdoulaye-ba.pdf  → à ajouter (bouton "Télécharger mon CV")
└── README.md
```

Aucune dépendance à installer : ouvre simplement `index.html` dans un navigateur, ou dépose le dossier sur un hébergeur statique (GitHub Pages, Netlify, Vercel...).

Les polices (Space Grotesk, Inter, JetBrains Mono) sont chargées via Google Fonts — une connexion internet est nécessaire pour qu'elles s'affichent correctement.

## Ce qui a été fait à partir de tes CV

- **Profil, contact, formation, expérience, compétences** : repris fidèlement des deux CV fournis (dates, intitulés, technologies).
- **3 projets réels** intégrés avec leurs vraies descriptions : *Analyse et visualisation de données commerciales*, *Analyse de données avec Excel*, et **GTFC** (projet d'ingénierie logicielle). Le texte du projet GTFC précise qu'il est en cours, pour rester honnête sur son état d'avancement.
- **3 emplacements placeholder** clairement identifiés `[PROJET À AJOUTER]` pour tes futurs projets (un par catégorie : Data, Ingénierie, Web).
- Aucune statistique, résultat, client ou compétence n'a été inventé.

## Où modifier tes informations

Toutes les données "faciles à changer" sont centralisées en haut de `js/script.js` :

```js
const portfolioData = {
  name: "Abdoulaye Ba",
  role: "Data Analyst Junior | Ingénierie Logicielle | Développement Web",
  email: "baa108102@gmail.com",
  phone: "+221 77 889 02 34",
  location: "Dakar, Sénégal",
  linkedin: "https://linkedin.com/in/abdoulayeba",
  github: "GITHUB_URL" // <-- à remplacer
};
```

### 1. Photo
Remplace le fichier `assets/profile.jpg` par ta photo (même nom de fichier, format carré de préférence pour un meilleur rendu).

### 2. CV téléchargeable
Ajoute ton fichier PDF sous `assets/cv-abdoulaye-ba.pdf`. Le bouton "Télécharger mon CV" dans le Hero pointe déjà vers ce chemin.

### 3. GitHub
Recherche `GITHUB_URL` dans `index.html` et `js/script.js` (5 occurrences) et remplace par ton vrai lien, par exemple `https://github.com/abdoulayeba`.

### 4. LinkedIn
Déjà renseigné : `https://linkedin.com/in/abdoulayeba`. Modifie-le dans `index.html` si l'URL change (recherche `linkedin.com/in/abdoulayeba`).

### 5. Projets
Dans `index.html`, section `<section id="projets">` :
- Chaque projet est une balise `<article class="project-card">`.
- Pour les projets réels : remplace `GITHUB_URL_PROJET_1`, `GITHUB_URL_PROJET_2`, `GITHUB_URL_GTFC` par les vrais liens, et le bloc `[SCREENSHOT À AJOUTER]` par une vraie image (`<img src="assets/projet-1.jpg" alt="...">` à la place du `<div class="project-card__media--placeholder">`).
- Pour les 3 cartes placeholder (`project-card--placeholder-card`) : remplace `[PROJET À AJOUTER]`, `[DESCRIPTION À AJOUTER]`, les technologies (`<li>`) et les liens GitHub/Demo.
- Le champ `data-category` (`data`, `ingenierie`, `web`) contrôle le filtre — garde-le cohérent avec le type de projet.

### 6. Screenshots de projets
Dépose tes images dans `assets/` (ex. `assets/projet-gtfc.png`) puis remplace le `<div class="project-card__media--placeholder">...</div>` par :
```html
<div class="project-card__media">
  <img src="assets/projet-gtfc.png" alt="Aperçu du projet GTFC">
</div>
```

### 7. Formulaire de contact
Le formulaire est validé en JavaScript puis ouvre le client email de l'utilisateur (`mailto:`) — aucun message n'est envoyé automatiquement sans backend. Pour connecter un vrai service d'envoi plus tard (Formspree, EmailJS, backend personnalisé...), modifie la fonction `initContactForm()` dans `js/script.js`.

## Mode clair / sombre

Le bouton en haut à droite de la navbar bascule entre les deux thèmes. La préférence est sauvegardée dans `localStorage` (clé `theme`) et respecte par défaut la préférence système au premier chargement.

## Détails techniques

- **Responsive** : testé visuellement de 375px à 1920px (grilles en `repeat()` + points de rupture à 1080px / 900px / 760px / 480px).
- **Accessibilité** : navigation clavier, focus visible, `alt` sur les images, lien d'évitement ("Aller au contenu principal"), `prefers-reduced-motion` respecté.
- **Performance** : aucune librairie externe, animations CSS légères, `IntersectionObserver` pour les apparitions au scroll (pas de scroll-jacking).
- **SEO** : title, meta description, Open Graph, structure HTML sémantique, hiérarchie de titres cohérente.

## Prochaines étapes suggérées

1. Ajouter tes vrais liens GitHub et CV.
2. Remplacer les 3 placeholders de projets par tes prochains projets.
3. Ajouter des captures d'écran réelles pour les 3 projets déjà présents.
4. Déployer (GitHub Pages, Netlify ou Vercel — dépôt d'un dossier statique, aucune configuration serveur nécessaire).
