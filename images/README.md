# Images du site

Chaque fichier de ce dossier est affiché tel quel par `index.html`.
**Pour changer un visuel : remplacez le fichier en gardant exactement le même
nom.** Rien d'autre à faire, aucune recompilation.

> Après remplacement, rechargez la page en forçant le cache
> (`Ctrl+F5`, ou `Cmd+Shift+R` sur Mac), sinon le navigateur réaffiche l'ancienne.

---

## Les visuels

### Photos plein cadre — le texte est écrit par-dessus

Format **16:9 paysage** obligatoire (1920×1080 par exemple).
Le texte se place à gauche : **laissez le tiers gauche sombre et vide, et
placez le sujet dans le tiers droit.**

| Fichier | Où | Sujet |
|---|---|---|
| `sl-hero.webp` | Accueil, premier écran | Bouton SUN-Link sur une machine, atelier de nuit |
| `sl-energie.webp` | « Autonome, pour de bon » | Macro de la cellule photovoltaïque |
| `sl-portee.webp` | « Une portée qui traverse le béton » | Couloir en béton, onde, boîtier au fond |
| `sl-install.webp` | « Posez-le. Il se connecte. » | Technicien posant le bouton |

Le cadrage est réglé image par image dans `index.html` (bloc
`object-position`, vers le début de la feuille de style). Si vous mettez une
photo dont le sujet n'est pas au même endroit, dites-le moi : c'est une valeur
en pourcentage à ajuster.

### Vignettes — section « Pensé pour le terrain »

Format **4:5 portrait** (1122×1402 par exemple).

| Fichier | Titre associé |
|---|---|
| `sl-grid-1.webp` | Zéro pile, zéro câble |
| `sl-grid-2.webp` | Longue portée réelle |
| `sl-grid-3.webp` | Installé en deux minutes |

⚠️ **Ne mettez pas une image à fond noir pur.** La page est déjà noire :
l'image se confondrait avec le fond. Visez un gris graphite, jamais plus
sombre que `#14161A`.

### Logos

| Fichier | Partenaire |
|---|---|
| `sl-logo-blinqy.webp` | BLINQY |
| `sl-logo-epeas.webp` | e-peas |
| `sl-logo-enfucell.webp` | Enfucell — 🔴 *le fichier actuel est une photo, pas un logo* |
| `sl-logo-dhf.webp` | DHF |
| `sl-logos-ue.webp` | Programme européen JEWEL |

Ils sont posés sur une pastille blanche parce que les fichiers actuels ont un
fond blanc incrusté. Si vous obtenez des versions **blanches sur fond
transparent**, la pastille pourra disparaître et les logos se poseront
directement sur le noir — c'est nettement plus soigné.

### Divers

| Fichier | Où |
|---|---|
| `sl-brand.png` | Logo SUN-Link, barre de navigation et pied de page |
| `favicon.svg` | Icône de l'onglet du navigateur |

---

## Formats et poids

- **WebP recommandé** : deux à trois fois plus léger qu'un PNG à qualité égale.
- Gardez chaque fichier **sous ~200 Ko**. Un PNG d'appareil photo fait souvent
  2 Mo : il ralentirait le site inutilement.
- Si vous n'avez que des PNG ou des JPG, déposez-les et je les convertis
  (c'est ce qui a été fait pour les trois vignettes : 6 Mo → 269 Ko).

⚠️ **L'extension doit correspondre au vrai format du fichier.** Renommer un
`.png` en `.webp` ne le convertit pas et l'image ne s'affichera plus.
Si vous changez de format, il faut aussi corriger la ligne correspondante
dans `index.html` (cherchez `images/` : il y a une ligne par visuel).
