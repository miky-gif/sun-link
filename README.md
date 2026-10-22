# SunyGreen — site vitrine

Site vitrine du projet SunyGreen, qui développe des **technologies IoT
autonomes en énergie** pour les infrastructures connectées. Première
application&nbsp;: un dispositif d'alerte industrielle sans pile ni câble.
Projet financé par la subvention européenne **JEWEL**.

Le contenu suit le document de positionnement *Texte site web*, conservé dans
le dossier parent. Le site présente donc une **technologie**, dont l'alerte
industrielle est la première incarnation — et non un produit isolé.

Site **statique**, bilingue français / anglais, **sans aucune dépendance** :
ni framework, ni CDN, ni police distante, ni traceur. La page s'affiche
correctement même si le JavaScript ne s'exécute pas.

> **Pour mettre le site en ligne, lisez [DEPLOIEMENT.md](DEPLOIEMENT.md).**
> Six points y sont à traiter avant publication — dont la clé du formulaire
> de contact, sans laquelle aucun message ne part.

---

## Arborescence

```
index.html               accueil, français
en/index.html            accueil, anglais
mentions-legales.html    ┐
confidentialite.html     ├ pages légales françaises
cookies.html             ┘
en/legal-notice.html     ┐
en/privacy.html          ├ pages légales anglaises
en/cookies.html          ┘
404.html                 page d'erreur, bilingue

assets/styles.css        toute la mise en forme des neuf pages
assets/site.js           tous les comportements des neuf pages
assets/fonts/            la police Sora, servie depuis ce serveur

images/                  tous les visuels — voir images/README.md
.htaccess                HTTPS, redirections, sécurité, compression, cache
robots.txt               autorise l'indexation, déclare le plan de site
apercu.cmd               lance un serveur local pour consulter le site
sitemap.xml              les huit pages indexables et leurs équivalences FR/EN
```

Les fichiers `.md` sont de la documentation de travail : ils ne sont pas
destinés au serveur.

## Regarder le site

**Double-cliquez `apercu.cmd`.** Il démarre un serveur local et ouvre le
navigateur dessus, ce qui reproduit les conditions réelles — contrairement à
l'ouverture directe d'`index.html`, où la page 404 perd sa mise en forme et
où le `.htaccess` n'est pas appliqué.

En ligne de commande : `py -m http.server 8000` depuis ce dossier.

## Modifier le site

`index.html` et `en/index.html` se lisent de haut en bas, section par section,
chacune précédée d'un commentaire :

```html
<!-- ============ SECTEURS ============ -->
```

Les deux fichiers ont exactement la même structure dans le même ordre : le
repérage d'une version à l'autre est immédiat. **Toute modification de contenu
doit être portée dans les deux langues.**

- une couleur, une marge, une taille → `assets/styles.css`
- un comportement (menu, onglets, formulaire) → `assets/site.js`
- une image → remplacez le fichier dans `images/` en gardant le même nom

`assets/styles.css` et `assets/site.js` sont partagés par les neuf pages :
une erreur s'y propage partout. Vérifiez la page d'accueil **et** une page
légale après chaque modification.

## Ce que le site respecte, et où le vérifier

| Exigence (cahier des charges) | Où |
|---|---|
| Bilingue, routes séparées (§5) | `/` et `/en/`, `hreflang` sur chaque page |
| Aucun backend, formulaire par service tiers (§5) | Web3Forms, `index.html` |
| Responsive (§5) | points de rupture à 1180, 900 et 620 px |
| Bandeau cookies conforme (§5) | `cookies.html` — aucun traceur à bloquer |
| Performance, site léger (§6) | 735 Ko d'images, 49 Ko de police, zéro dépendance |
| Sécurité, aucun serveur exposé (§6) | site statique, en-têtes dans `.htaccess` |
| Accessibilité, contrastes, sémantique (§6) | lien d'évitement, focus visible, `alt` partout |
| Référencement (§6) | `canonical`, `hreflang`, JSON-LD, `sitemap.xml` |
| Conformité légale (§6) | six pages légales, FR et EN |

## Ce qui n'est pas fait

- **Le formulaire n'envoie rien** tant que la clé Web3Forms n'est pas collée.
- **Les pages légales sont incomplètes** : l'identité de l'éditeur reste à
  renseigner. Les champs concernés sont surlignés en jaune dans la page.
- **Le domaine est codé en dur** sur `https://www.sunygreen.com`. S'il change,
  voir [DEPLOIEMENT.md](DEPLOIEMENT.md).
- **Le logo Enfucell** (`images/logo-enfucell.webp`) est une photographie,
  pas un logo. À remplacer par le fichier officiel.
- **HSTS est désactivé** dans le `.htaccess`, volontairement : à activer une
  fois le certificat HTTPS vérifié.

Le détail de chacun de ces points, et la marche à suivre, sont dans
[DEPLOIEMENT.md](DEPLOIEMENT.md).
