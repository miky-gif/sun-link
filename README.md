# SUN-Link — maquette du site vitrine

Aperçu statique servant à valider le design avant le développement.
Ce n'est **pas** le site de production : celui-ci sera construit en
Astro + React + Tailwind, conformément au cahier des charges (§5).

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | la page entière : structure, styles et contenu |
| `images/` | tous les visuels, remplaçables directement — voir [images/README.md](images/README.md) |
| `support.js` | runtime de la maquette (charge React depuis unpkg) |

Les visuels sont de simples `<img>` pointant vers `images/`. Aucun composant
d'image : rien ne peut capturer le geste tactile sur téléphone, et vous pouvez
changer une photo sans toucher au code.

## Changer une image

Remplacez le fichier dans `images/` **en gardant le même nom**, puis rechargez
la page avec `Ctrl+F5`. Les formats attendus et les contraintes de cadrage sont
détaillés dans [images/README.md](images/README.md).

## Modifier les textes

`index.html` fait 41 Ko et se lit de haut en bas : la feuille de style d'abord,
puis les sections dans l'ordre de la page, chacune précédée d'un commentaire
(`<!-- ====== ACCUEIL ====== -->`, etc.). Les textes sont en clair.

## Déploiement

Site statique, aucune étape de build. Sur Vercel : préréglage « Other »,
pas de commande de build, répertoire de sortie à la racine.

Une connexion est nécessaire au premier chargement : React et les polices
Sora sont chargés depuis un CDN.
