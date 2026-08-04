# SUN-Link — maquette du site vitrine

Aperçu statique servant à valider le design avant le développement.
Ce n'est **pas** le site de production : celui-ci sera construit en
Astro + React + Tailwind, conformément au cahier des charges (§5).

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | la page entière — styles, contenu et visuels (encodés en base64) |
| `support.js` | runtime de la maquette (charge React depuis unpkg) |

Tous les visuels sont de simples `<img>` encodées dans `index.html` : aucun
composant d'image, donc rien qui puisse capturer le geste tactile.

## Déploiement

Site statique, aucune étape de build. Sur Vercel : préréglage
« Other », pas de commande de build, répertoire de sortie à la racine.

Une connexion est nécessaire au premier chargement : React et les
polices Sora sont chargés depuis un CDN.
