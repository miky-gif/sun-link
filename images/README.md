# Images du site

> **Vous cherchez quelle image obtenir, et où elle irait ?**
> C'est dans [BRIEF-VISUELS.md](BRIEF-VISUELS.md) : la carte des treize
> sections, ce qui manque, et par quoi commencer.
> Le présent fichier ne traite que des contraintes techniques.

Chaque fichier de ce dossier est affiché tel quel par `index.html`.
**Pour changer un visuel : remplacez le fichier en gardant exactement le même
nom.** Rien d'autre à faire, aucune recompilation.

> Après remplacement, rechargez la page en forçant le cache
> (`Ctrl+F5`, ou `Cmd+Shift+R` sur Mac), sinon le navigateur réaffiche l'ancienne.

### Comment les fichiers sont nommés

Les noms décrivent ce que montre l'image, en minuscules, sans accent et sans
espace : `sunygreen-02-monde-sous-pression.webp`. Ce n'est pas de la
coquetterie — la recherche d'images de Google lit le nom de fichier comme un
indice de contenu. Un `img-4.webp` n'apporte rien ; un nom descriptif situe la
photo et fait remonter le projet sur des requêtes utiles.

Les anciens noms commençaient par `sl-`, hérité de la marque précédente
SUN-Link. Ils ont tous été renommés : plus rien, dans le site, ne renvoie à
l'ancien nom.

**Si vous ajoutez un visuel**, suivez la même règle : `sunygreen-` suivi de ce
que l'on voit, en trois ou quatre mots séparés par des tirets.

---

## Les visuels

### Photos plein cadre — le texte est écrit par-dessus

Format **16:9 paysage** obligatoire (1920×1080 par exemple).
Le texte se place à gauche : **laissez le tiers gauche sombre et vide, et
placez le sujet dans le tiers droit.**

| Fichier | Où | Sujet |
|---|---|---|
| `sunygreen-01-infrastructures-de-demain.webp` | Accueil, premier écran | Bouton SunyGreen sur une machine, atelier de nuit |
| `sunygreen-02-monde-sous-pression.webp` | « Autonome, pour de bon » | Macro de la cellule photovoltaïque |
| `sunygreen-06-impact.webp` | « Une portée qui traverse le béton » | Couloir en béton, onde, boîtier au fond |
| `sunygreen-07-applications.webp` | « Posez-le. Il se connecte. » | Technicien posant le bouton |

Le cadrage est réglé image par image dans `assets/styles.css` (bloc
`object-position`, section « cadrage dirigé des photos plein cadre »). Si vous
mettez une photo dont le sujet n'est pas au même endroit, dites-le moi : c'est
une valeur en pourcentage à ajuster.

### Vignettes — section « Pensé pour le terrain »

Format **4:5 portrait**. Les fichiers actuels font 880×1320 : c'est la taille
utile, y compris sur écran retina, puisque la vignette s'affiche à environ
405 px de large.

| Fichier | Titre associé |
|---|---|
| `sunygreen-etape-1-capter.webp` | Zéro pile, zéro câble |
| `sunygreen-etape-3-transmettre.webp` | Longue portée réelle |
| `sunygreen-etape-4-agir.webp` | Installé en deux minutes |

⚠️ **Ne mettez pas une image à fond noir pur.** La page est déjà noire :
l'image se confondrait avec le fond. Visez un gris graphite, jamais plus
sombre que `#14161A`.

### Logos

| Fichier | Partenaire |
|---|---|
| `logo-blinqy.webp` | BLINQY |
| `logo-e-peas.webp` | e-peas |
| `logo-enfucell.webp` | Enfucell — 🔴 *le fichier actuel est une photo, pas un logo* |
| `logo-dhf.webp` | DHF |
| `logo-programme-europeen-jewel.webp` | Programme européen JEWEL |

Ils sont posés sur une pastille blanche parce que les fichiers actuels ont un
fond blanc incrusté. Si vous obtenez des versions **blanches sur fond
transparent**, la pastille pourra disparaître et les logos se poseront
directement sur le noir — c'est nettement plus soigné.

### En attente de placement

| Fichier | Sujet |
|---|---|
| `sunygreen-05-notre-reponse.webp` | Galerie de mine — destiné à la fiche secteur Mines |
| `sunygreen-03-enjeu-humain.webp` | Appel au poste — destiné à la fiche secteur Industrie |

Voir [BRIEF-VISUELS.md](BRIEF-VISUELS.md) : il manque une photo Logistique
pour illustrer les trois secteurs prioritaires de façon homogène.

### Divers

| Fichier | Où |
|---|---|
| `sunygreen-logo.png` | Lockup complet — barre de navigation et pied de page |
| `sunygreen-icone.png` | Symbole seul, carré — icône d'accueil iOS |
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
Si vous changez de format, il faut corriger la ligne correspondante dans
**les deux** pages d'accueil — `index.html` et `en/index.html` — ainsi que
dans `sitemap.xml` pour les quatre photos plein cadre qui y sont déclarées.

---

## Les originaux

Les photos d'origine, en JPEG haute définition, sont conservées dans
`../sources-images/`, **hors du dossier publié**. Elles servent à produire une
nouvelle version WebP si un recadrage devient nécessaire ; elles ne doivent pas
être téléversées sur le serveur : à elles seules, elles pèsent dix fois le site
entier.

Conversion utilisée pour passer de l'original au fichier servi :

```python
from PIL import Image
im = Image.open('photo-originale.jpg').convert('RGB')
im.thumbnail((1500, 9999), Image.LANCZOS)   # 880 px de large pour les vignettes
im.save('sunygreen-nouveau-visuel.webp', 'WEBP', quality=80, method=6)
```

Sur les sept photos, l'opération a fait passer l'ensemble de 7,3 Mo à 735 Ko
sans différence visible à l'écran.

---

## Le logo

Le fichier `sunygreen-logo.png` est le **lockup complet** : symbole, nom de la
marque et baseline « Industry. Mining. Performance. », en blanc sur fond
transparent. Rapport 3:1.

**N'écrivez rien à côté.** Le nom figure déjà dans l'image, dans sa propre
typographie ; le répéter en Sora créait deux graphies concurrentes pour la
même marque.

Il est dimensionné **en hauteur** dans `assets/styles.css` (`.brand img`), la
largeur suivant le rapport du fichier : 46 px dans la barre, 60 px dans le
pied, réduits progressivement sous 900 px de large.

**Si vous remplacez le logo**, gardez un fond transparent et un tracé clair :
il est toujours posé sur du sombre. Vérifiez aussi les attributs
`width` et `height` des balises `<img>` dans les neuf pages — ils doivent
correspondre aux dimensions réelles du nouveau fichier, sinon la page saute
au chargement.

`sunygreen-icone.png` en dérive : c'est le symbole seul, recadré carré et
composé sur le fond de la marque. iOS ne gère pas la transparence sur les
icônes d'accueil — elle y deviendrait un aplat noir sans marge. À regénérer
si le symbole change.
