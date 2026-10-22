# Brief visuels — où mettre quoi

Ce document répond à une question simple : **si je peux obtenir de nouvelles
images, lesquelles, et où vont-elles ?**

Il décrit les treize sections du site dans leur ordre d'apparition, avec pour
chacune ce qui existe aujourd'hui et ce qui manque. Les emplacements sont
**déjà prévus dans la mise en page** : le jour où vous avez le fichier, il n'y
a qu'à le déposer.

> Contraintes techniques (formats, poids, conversion) : voir [README.md](README.md).
> Ici, il n'est question que du contenu des images.

---

## ✅ Mise à jour du 2 septembre 2026

Le site suit désormais la structure du document *Texte site web*, et chacune
de ses sections porte l'image que le document lui associe.

| § du document | Fichier | Où |
|---|---|---|
| 01 | `sunygreen-01-infrastructures-de-demain.webp` | premier écran, plein cadre |
| 02 | `sunygreen-02-monde-sous-pression.webp` | fond de section |
| 03 | `sunygreen-03-enjeu-humain.webp` | fond de section |
| 04 | `sunygreen-04-basculement.webp` | fond de section |
| 05 | `sunygreen-etape-1-capter.webp` … `-4-agir.webp` | les quatre étapes |
| 06 | `sunygreen-06-impact.webp` | fond de section |
| 07 | `sunygreen-07-applications.webp` | fond de section |

**Un fichier n'est plus affiché :** `sunygreen-05-notre-reponse.webp`, la
galerie de mine. Le document l'attribue à la section 05, mais celle-ci a été
repassée sur fond vert sombre à trame, comme le comparatif : elle contient
déjà quatre images, une par étape, et une cinquième en arrière-plan
surchargeait.

Le fichier reste dans le dossier. Pour le remettre en fond, il suffit
d'ajouter `sec--fond` à la section et d'y replacer le bloc `sec-media`.

---|---|---|
| `sunygreen-05-notre-reponse.webp` | Galerie de mine, boîtier sur un pilier, deux mineurs s'éloignant | Fiche secteur **Mines** |
| `sunygreen-03-enjeu-humain.webp` | Opérateur pressant le boîtier dans une halle industrielle | Fiche secteur **Industrie** |

Ils sont tous deux au format 16:9, celui des panneaux plein cadre — or le site
en compte déjà cinq, ce qui suffit. Leur vraie place est ailleurs : **les six
fiches de la section Secteurs n'ont aucune image.** Leur en donner une les
sortirait du tout-texte.

Il en manque une pour cela : **une photo Logistique** — appel de cariste ou
signalement de quai dans un entrepôt. Avec elle, les trois secteurs
prioritaires seraient illustrés de façon homogène. Sans elle, deux fiches sur
trois auraient une photo et la troisième non, ce qui se verrait davantage que
l'absence totale d'images.

Dites-moi si vous pouvez l'obtenir, ou si vous préférez que je place les deux
existantes malgré le déséquilibre.

---

## Le manque principal, avant tout le reste

**Il n'existe aucune photo nette du bouton seul.** Les sept visuels actuels
sont tous atmosphériques : un atelier, un couloir, une main gantée, une halle.
On devine le produit, on ne le voit jamais.

C'est le point faible le plus coûteux du site. Un site de matériel industriel
vit de l'objet : les visiteurs — évaluateurs, partenaires, industriels —
veulent voir ce qu'ils financent ou installent. Les trois quarts des
propositions ci-dessous découlent de ce constat.

**Si vous ne pouvez obtenir qu'une seule image, prenez la n° 1.**

---

## Les cinq images à obtenir, par ordre d'importance

### 1. 🔴 Le produit seul, sur fond neutre

| | |
|---|---|
| **Où** | Nouvelle place, en tête de la section « Autonome, pour de bon » |
| **Format** | Carré ou 4:5, sujet centré, **fond uni** (gris graphite `#1A1E1B` ou crème `#F2F5EC`) |
| **Sujet** | Le bouton, vu de trois quarts, éclairage doux et rasant qui révèle le relief de la cellule photovoltaïque |
| **Pourquoi** | C'est l'objet. Sans lui, le site parle d'un produit qu'il ne montre pas. |

Lumière diffuse, pas de flash direct : la cellule OPV a une texture, c'est
précisément ce qu'il faut faire voir. Un seul reflet maîtrisé sur la surface.

### 2. 🔴 Le bouton en main, à l'échelle

| | |
|---|---|
| **Où** | Vignette 1 de « Pensé pour le terrain », en remplacement de la photo actuelle |
| **Format** | 4:5 portrait, 880×1320 px |
| **Sujet** | Une main tenant le bouton entre le pouce et l'index |
| **Pourquoi** | Aucune image ne dit sa taille. Une main est l'étalon que tout le monde lit instantanément. |

Main gantée de travail, pas une main de studio : le contexte industriel doit
rester lisible.

### 3. 🟠 Le dos du bouton, adhésif visible

| | |
|---|---|
| **Où** | Panneau « Posez-le. Il se connecte. » — en second visuel, ou en remplacement |
| **Format** | 4:5 ou 16:9 |
| **Sujet** | Face arrière, système de fixation apparent, éventuellement le film protecteur à moitié retiré |
| **Pourquoi** | « Installé en deux minutes, sans travaux » est une promesse. Cette image la prouve. |

### 4. 🟠 Le vrai logo Enfucell

| | |
|---|---|
| **Où** | Section Consortium, `logo-enfucell.webp` |
| **Format** | Logo vectoriel ou PNG large, **blanc sur fond transparent** de préférence |
| **Sujet** | Le logo officiel |
| **Pourquoi** | Le fichier actuel est une photographie, pas un logo. C'est visible, et c'est gênant sur une page qui présente des partenaires institutionnels. |

Si vous obtenez les **cinq** logos en blanc sur fond transparent, la pastille
blanche derrière chacun pourra disparaître et les logos se poseront
directement sur le fond — nettement plus soigné.

### 5. 🟡 Une vue d'ensemble de site industriel

| | |
|---|---|
| **Où** | Fond de la section Contact, passée sur fond sombre |
| **Format** | 16:9 très large, sera affichée à faible opacité |
| **Sujet** | Vue large d'un site industriel ou d'une halle, de nuit ou en lumière basse |
| **Pourquoi** | La section Contact est maintenant sombre et entièrement typographique. Une texture de fond très discrète lui donnerait de la profondeur sans distraire du formulaire. |

Optionnel. Le site fonctionne très bien sans.

---

## Carte complète des sections

Ordre réel de la page, après le retravail du rythme.

| # | Section | Fond | Image aujourd'hui | Ce qu'il faudrait |
|---|---|---|---|---|
| 1 | **Accueil** | photo plein cadre | `sunygreen-01-infrastructures-de-demain.webp` | ✅ convient — le produit y est présent mais lointain |
| 2 | Chiffres clés | sombre | *aucune* | ✅ **n'en ajoutez pas** — « 800 m+ » doit rester seul à l'écran |
| 3 | **Énergie** | photo plein cadre | `sunygreen-02-monde-sous-pression.webp` | 🔴 y ajouter le **plan produit n° 1** |
| 4 | **Portée** | photo plein cadre | `sunygreen-06-impact.webp` | ✅ convient |
| 5 | Secteurs | crème | *aucune* | ✅ six fiches texte, volontairement sans image |
| 6 | **Vignettes terrain** | crème soutenu | 3 photos 4:5 | 🔴 remplacer la 1re par le **bouton en main n° 2** |
| 7 | **Installation** | photo plein cadre | `sunygreen-07-applications.webp` | 🟠 y ajouter le **dos du bouton n° 3** |
| 8 | Comparatif | sombre | *aucune* | ✅ tableau — une image nuirait à la lecture |
| 9 | Consortium | crème | 4 logos partenaires | 🟠 **logo Enfucell n° 4**, et les 5 en blanc détouré |
| 10 | Feuille de route | **sombre** | *aucune* | ✅ frise typographique, elle se suffit |
| 11 | Impact | crème | *aucune* | ✅ trois colonnes de texte |
| 12 | **Contact** | **sombre** | *aucune* | 🟡 **fond d'ambiance n° 5**, optionnel |
| 13 | Pied de page | sombre | `logo-programme-europeen-jewel.webp` | ✅ logo officiel obligatoire |

🔴 important · 🟠 utile · 🟡 confort · ✅ rien à faire

---

## Règles communes à toute nouvelle photo

**Le tiers gauche doit rester sombre et vide** sur les quatre photos plein
cadre (sections 1, 3, 4, 7) : le texte s'y écrit par-dessus. Placez le sujet
dans le tiers droit.

**Jamais de fond noir pur** sur les vignettes 4:5. La page est déjà sombre :
une image trop noire s'y dissout. Visez un gris graphite, jamais plus foncé
que `#14161A`.

**Cohérence de lumière.** Les visuels actuels sont en lumière basse, à
dominante froide, avec des sources ponctuelles chaudes. Une photo en plein
jour, à plat, jurerait avec le reste même si elle est bonne en elle-même.

**Deux couleurs seulement** dans la scène : le vert `#8CC63F` et l'ambre
`#FDB022` sont les accents de la marque. Une scène qui ramène du bleu ou du
rouge saturé entre en concurrence avec eux.

---

## Si les photos ne sont pas possibles

Le prototype est au TRL 5 : il n'a peut-être pas encore son aspect
définitif, et le photographier trop tôt figerait une image qui deviendra
fausse. Deux solutions intermédiaires :

- **Un rendu 3D** du boîtier, même simple, sur fond neutre. Pour les images
  n° 1 et n° 3, un rendu est souvent préférable à une photo de prototype :
  il montre le produit visé, sans les défauts d'un tirage d'atelier.
- **Génération par intelligence artificielle**, comme cela a été fait pour
  les visuels d'ambiance actuels. Attention : dans ce cas, les mentions
  légales doivent le déclarer dans la rubrique Crédits.

Dans les deux cas, la mise en page est déjà prête : rien à modifier dans le
code, il suffira de déposer le fichier.
