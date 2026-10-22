# Mise en ligne — SunyGreen

Le site est **statique** : aucune compilation, aucun serveur applicatif, aucune
base de données. Ce que contient ce dossier est exactement ce qui doit se
trouver sur le serveur.

---

## ⚠️ Les six points bloquants

Aucun ne peut être fait à votre place — ils demandent des informations ou des
comptes qui vous appartiennent. Le site fonctionne sans, mais il ne doit pas
être publié tant qu'ils ne sont pas traités.

### 1. La clé du formulaire de contact

Sans elle, le formulaire affiche un message d'échec et **aucun email n'est
envoyé**.

1. Ouvrez [web3forms.com](https://web3forms.com), entrez l'adresse email qui
   doit recevoir les messages, validez. Aucun compte à créer.
2. Vous recevez une clé d'accès par email (une longue suite de caractères).
3. Remplacez `REMPLACER-PAR-LA-CLE-WEB3FORMS` dans **les deux fichiers** :
   - `index.html` — chercher `access_key`
   - `en/index.html` — chercher `access_key`
4. Envoyez-vous un message de test depuis chaque version, française et anglaise.

> La clé n'est pas un secret : elle est visible dans le code de la page, c'est
> normal et prévu par le service. Elle ne donne accès à rien d'autre qu'à
> l'envoi vers votre adresse.

**Si le visiteur a désactivé JavaScript**, le formulaire s'envoie quand même,
mais il quitte le site et atterrit sur la page de confirmation de Web3Forms.
Pour éviter cela, ajoutez dans les deux formulaires :
`<input type="hidden" name="redirect" value="https://www.sunygreen.com/merci.html">`
et créez la page correspondante.

### 2. Les champs des pages légales

Les trois pages légales sont écrites et conformes, mais les informations qui
identifient l'éditeur ne peuvent pas être devinées. Elles apparaissent
**surlignées en jaune** dans la page, impossible de les manquer.

| Fichier | À renseigner |
|---|---|
| `mentions-legales.html` + `en/legal-notice.html` | raison sociale, forme juridique, siège, n° d'entreprise, TVA, téléphone, responsable de publication, crédits photo, prestataire, droit applicable |
| `confidentialite.html` + `en/privacy.html` | responsable de traitement, adresse, DPO, autorité de contrôle (APD belge **ou** CNIL française — supprimez la ligne inutile) |

**Vérifiez aussi les coordonnées de l'hébergeur** sur votre facture o2switch :
elles sont pré-remplies d'après les informations publiées par o2switch, mais
une société peut changer d'adresse ou de forme juridique.

Quand une page est complète, plus aucun surlignage jaune ne doit y subsister.
Pour contrôler l'ensemble d'un coup :

```bash
grep -rn "class=\"todo\"" *.html en/*.html
```

Zéro résultat = les pages légales sont prêtes.

### 3. Le domaine

Tout le site est écrit pour **`https://www.sunygreen.com`**. Si l'adresse
finale diffère, elle doit être corrigée **partout à la fois**, sinon les
moteurs de recherche renvoient vers une adresse inexistante :

```bash
grep -rln "www.sunygreen.com" . --include=*.html --include=*.xml --include=*.txt --include=.htaccess
```

Les endroits concernés : les balises `canonical`, `og:`, `hreflang` et les
données structurées de chaque page ; `sitemap.xml` ; `robots.txt` ; et les
redirections du `.htaccess`.

### 4. L'adresse email du projet

`contact@sunygreen.com` figure sur la page d'accueil, dans les trois pages
légales et dans les données structurées. **Cette boîte doit exister et être
relevée** avant la mise en ligne — c'est aussi elle qui recevra les demandes
d'exercice des droits RGPD, auxquelles il faut répondre sous un mois.

### 5. Les anciennes adresses SUN-Link

**À traiter uniquement si un site a déjà été en ligne sous l'ancien nom.** Si
SunyGreen est la première mise en ligne du projet, il n'y a rien à faire.

Le code du site ne contient plus aucune mention de SUN-Link : ni dans les
textes, ni dans les noms de fichiers, ni dans les identifiants. Le risque est
ailleurs — les adresses de l'ancien site restent dans l'index des moteurs et
dans les liens déjà publiés (dossier JEWEL, sites des partenaires, courriels).
Sans redirection, ces liens tombent en erreur, et l'ancienneté acquise par
l'ancien domaine est perdue au lieu d'être transmise au nouveau.

Le `.htaccess` contient un bloc **« Héritage de l'ancienne marque SUN-Link »**
prêt à l'emploi, avec deux cas : redirection d'un domaine entier, ou
correspondance adresse par adresse. Relevez les anciennes adresses dans Google
Search Console (*Pages → Introuvables*) ou dans les journaux d'accès du cPanel.

Redirigez chaque ancienne adresse vers la page **équivalente**, jamais toutes
vers l'accueil : une redirection sans rapport est traitée comme une erreur par
Google. Conservez ces redirections au moins un an.

### 6. Le certificat HTTPS

Activez le certificat Let's Encrypt depuis le cPanel o2switch (rubrique
« SSL/TLS »), puis vérifiez que `https://www.sunygreen.com` s'affiche sans
avertissement.

**Ensuite seulement**, ouvrez `.htaccess` et retirez le `#` devant la ligne
`Strict-Transport-Security`. Activée trop tôt, cette directive rend le site
inaccessible pendant un an sans possibilité de retour en arrière côté
visiteur.

---

## Téléverser

Depuis le cPanel o2switch (Gestionnaire de fichiers) ou en FTP/SFTP, déposez
**tout le contenu de ce dossier** dans `public_html/`, en conservant
l'arborescence :

```
public_html/
├── .htaccess              ← fichier caché : pensez à activer l'affichage
├── index.html
├── 404.html
├── mentions-legales.html
├── confidentialite.html
├── cookies.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── styles.css
│   ├── site.js
│   └── fonts/
│       ├── sora-latin.woff2
│       └── sora-latin-ext.woff2
├── en/
│   ├── index.html
│   ├── legal-notice.html
│   ├── privacy.html
│   └── cookies.html
└── images/
```

**Ne téléversez pas** les fichiers `.md` (`README.md`, `DEPLOIEMENT.md`,
`images/README.md`, `images/BRIEF-VISUELS.md`) ni `apercu.cmd` : ce sont des
outils de travail. S'ils partent par mégarde, le `.htaccess` en bloque
l'accès, mais autant ne pas les envoyer.

Le `.htaccess` est un fichier **caché** (son nom commence par un point) :
beaucoup de clients FTP ne l'affichent pas par défaut. S'il manque, le site
s'affiche quand même, mais sans HTTPS forcé, sans compression, sans cache et
sans en-têtes de sécurité.

---

## Regarder le site avant de le mettre en ligne

**Double-cliquez `apercu.cmd`, pas `index.html`.**

Le lanceur démarre un petit serveur local et ouvre le navigateur dessus, ce
qui reproduit les conditions réelles. Laissez la fenêtre ouverte pendant la
consultation ; fermez-la pour arrêter le serveur.

Ouvert directement depuis le disque (adresse `file://`), le site n'a aucun
serveur derrière lui, et deux choses se dérèglent :

- **la page 404 perd sa mise en forme** — elle demande `/assets/styles.css`,
  ce qui désigne la racine du disque `E:\` et non celle du site ;
- **les liens vers un dossier** n'ont personne pour choisir le fichier
  d'index. C'est corrigé : les liens de langue désignent désormais
  `en/index.html` plutôt que `en/`, précisément pour que le site reste
  consultable depuis une archive, sans serveur.

Si vous préférez la ligne de commande, `py -m http.server 8000` depuis ce
dossier fait exactement la même chose.

Ce que ce serveur ne reproduit **pas** : les redirections, la compression, le
cache et les en-têtes de sécurité du `.htaccess` — Apache seul les applique.
Ils se vérifient une fois le site en ligne.

---

## Vérifier après la mise en ligne

| Vérification | Comment | Attendu |
|---|---|---|
| HTTPS forcé | ouvrir `http://sunygreen.com` | redirection vers `https://www.sunygreen.com` |
| Page 404 | ouvrir `/nimportequoi` | la page 404 du site, pas celle d'Apache |
| Version anglaise | cliquer sur « EN » | `/en/`, entièrement en anglais |
| Adresse courte | ouvrir `/en/index.html` | redirection vers `/en/` |
| Formulaire FR | envoyer un test | email reçu, message vert sous le bouton |
| Formulaire EN | envoyer un test | idem depuis `/en/` |
| Pages légales | les trois liens du pied de page | aucun surlignage jaune |
| Images | recharger avec `Ctrl+F5` | toutes présentes, aucune case vide |
| Mobile | ouvrir sur téléphone | menu burger fonctionnel, lien « English version » dedans |
| Clavier | `Tab` depuis le haut | « Aller au contenu » apparaît en premier |

Puis, une fois en ligne :

- **Google Search Console** — déclarer le domaine, soumettre
  `https://www.sunygreen.com/sitemap.xml`.
- **PageSpeed Insights** — [pagespeed.web.dev](https://pagespeed.web.dev).
  Le site doit être vert sur les quatre catégories.
- **Données structurées** —
  [validator.schema.org](https://validator.schema.org) sur la page d'accueil.
- **En-têtes de sécurité** —
  [securityheaders.com](https://securityheaders.com). Note attendue : A ou A+.

---

## Modifier le site ensuite

| Pour changer… | Ouvrez… |
|---|---|
| un texte français | `index.html` |
| un texte anglais | `en/index.html` |
| une couleur, une marge, une taille | `assets/styles.css` |
| un comportement (menu, onglets, formulaire) | `assets/site.js` |
| une image | remplacez le fichier dans `images/` **en gardant le même nom** |

**Toute modification de contenu doit être faite dans les deux langues.** Les
deux pages ont exactement la même structure, section par section, dans le même
ordre : le repérage est immédiat d'un fichier à l'autre.

### Attention à la CSS et au JavaScript

`assets/styles.css` et `assets/site.js` sont partagés par les **neuf pages**.
Une modification s'y répercute partout — c'est l'intérêt, mais une erreur s'y
propage tout autant. Vérifiez au moins la page d'accueil et une page légale
après chaque changement.

### Attention au script inline

Chaque page contient une ligne de JavaScript dans son `<head>` :

```html
<script>document.documentElement.classList.add('sg-js')</script>
```

Elle est autorisée par la politique de sécurité du `.htaccess` **au moyen de
son empreinte**. Si vous en modifiez ne serait-ce qu'un espace, le navigateur
la bloquera et les blocs à apparition progressive resteront invisibles. Il
faudra alors recalculer l'empreinte et la reporter dans le `.htaccess`.

---

## Ce qui a été écarté, et pourquoi

**Google Fonts.** La police Sora est servie depuis ce serveur
(`assets/fonts/`) au lieu du CDN de Google. Un appel à Google Fonts transmet
l'adresse IP de chaque visiteur à un serveur hors Union européenne — un
transfert qu'il faudrait déclarer, et faire consentir, sur un site public
financé par l'UE. Servie localement, la question ne se pose plus, et la page
économise deux connexions vers un domaine tiers. Sora est distribuée sous
licence SIL Open Font License 1.1, qui autorise explicitement
l'auto-hébergement.

**Toute mesure d'audience.** Aucun analytics n'est installé. C'est ce qui
permet au bandeau cookies de rester un simple bandeau d'information plutôt
qu'un véritable outil de consentement bloquant. Si vous ajoutez un jour un
outil de mesure, il faudra : le bloquer tant que le visiteur n'a pas accepté,
réécrire `cookies.html` et `en/cookies.html`, et rouvrir la politique de
confidentialité. Une solution sans cookie et sans traceur (Plausible en
auto-hébergement, ou les statistiques AWStats déjà fournies par o2switch)
évite tout cela.

**Les fichiers JPEG d'origine.** Les photos ont été converties en WebP
(7,3 Mo → 735 Ko, sans perte visible). Les originaux ont été déplacés dans
`../sources-images/`, hors du dossier publié : ils restent disponibles pour un
recadrage ultérieur sans alourdir le site.
