/* Comportements de la page, sans dependance externe.
   Le contenu est deja dans le HTML : ce script ne fait qu'ajouter
   l'interaction. Si le JS ne s'execute pas, la page reste lisible. */
(function () {
  var d = document;
  // .sg-js est deja pose par la ligne bloquante du <head> : voir index.html.

  // apparition au defilement
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    d.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  var sobre = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // compteur : le chiffre phare se construit quand il entre a l'ecran
  d.querySelectorAll('[data-compte]').forEach(function (el) {
    var cible = parseFloat(el.dataset.compte), suffixe = el.dataset.suffixe || '';
    if (sobre || !('IntersectionObserver' in window)) return;
    var vu = false;
    var obs = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting || vu) return;
      vu = true; obs.disconnect();
      var t0 = performance.now(), duree = 1400;
      (function pas(t) {
        var p = Math.min(1, (t - t0) / duree);
        // ralentissement en fin de course, plus naturel qu'un defilement lineaire
        el.textContent = Math.round(cible * (1 - Math.pow(1 - p, 3))) + suffixe;
        if (p < 1) requestAnimationFrame(pas);
      })(t0);
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  // parallaxe des photos plein cadre : elles glissent moins vite que la page
  var medias = [].slice.call(d.querySelectorAll('.sec-media img'));
  if (medias.length && !sobre) {
    var enAttente = false;
    var placer = function () {
      enAttente = false;
      var h = innerHeight;
      medias.forEach(function (img) {
        var r = img.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) return;   // hors champ : on ne calcule pas
        var avance = (r.top + r.height / 2 - h / 2) / h;  // -1 en bas, +1 en haut
        img.style.transform = 'translate3d(0,' + (avance * -3.4).toFixed(2) + '%,0) scale(1.06)';
      });
    };
    addEventListener('scroll', function () {
      if (!enAttente) { enAttente = true; requestAnimationFrame(placer); }
    }, { passive: true });
    addEventListener('resize', placer, { passive: true });
    placer();
  }

  // fond de la barre de navigation des qu'on quitte le haut de page
  var nav = d.querySelector('.nav');
  if (nav) {
    var maj = function () { nav.classList.toggle('is-stuck', window.scrollY > 24); };
    addEventListener('scroll', maj, { passive: true }); maj();
  }

  // menu mobile
  var burger = d.querySelector('.burger'), menu = d.getElementById('menu');
  if (burger && menu) {
    var ouvrir = function (o) {
      burger.classList.toggle('is-open', o);
      burger.setAttribute('aria-expanded', String(o));
      menu.hidden = !o;
    };
    burger.addEventListener('click', function () { ouvrir(menu.hidden); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) ouvrir(false); });
    // Echap ferme le menu : sans cela, au clavier, on reste piege dedans.
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { ouvrir(false); burger.focus(); }
    });
  }

  // selecteur de langue — liste deroulante
  // Un menu qu'on ne peut fermer qu'en cliquant a nouveau sur son bouton est
  // penible : on le ferme aussi a Echap, au clic exterieur et a la perte du
  // focus. Echap ramene le focus sur le bouton, sinon la tabulation repart
  // du haut de la page.
  var langue = d.querySelector('[data-langue]');
  if (langue) {
    var lbouton = langue.querySelector('.lang-btn');
    var lliste = langue.querySelector('.lang-liste');

    var deplier = function (ouvert) {
      lbouton.setAttribute('aria-expanded', String(ouvert));
      lliste.hidden = !ouvert;
    };

    lbouton.addEventListener('click', function (e) {
      e.stopPropagation();
      deplier(lliste.hidden);
    });

    d.addEventListener('click', function (e) {
      if (!langue.contains(e.target)) deplier(false);
    });

    d.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || lliste.hidden) return;
      deplier(false);
      lbouton.focus();
    });

    // Fleche bas depuis le bouton : on ouvre et on entre dans la liste,
    // comme le fait n'importe quel menu natif.
    lbouton.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowDown') return;
      e.preventDefault();
      deplier(true);
      var premier = lliste.querySelector('a.lang-opt');
      if (premier) premier.focus();
    });

    // Le focus quitte le composant : plus rien ne justifie de le garder ouvert.
    langue.addEventListener('focusout', function (e) {
      if (!langue.contains(e.relatedTarget)) deplier(false);
    });
  }

  // onglets des secteurs
  d.querySelectorAll('.tab').forEach(function (onglet) {
    onglet.addEventListener('click', function () {
      var cible = onglet.getAttribute('aria-controls');
      d.querySelectorAll('.tab').forEach(function (t) {
        var actif = t === onglet;
        t.classList.toggle('is-on', actif);
        t.setAttribute('aria-selected', String(actif));
      });
      d.querySelectorAll('[data-secteurs]').forEach(function (g) { g.hidden = g.id !== cible; });
    });
  });

  // bandeau cookies — le choix est retenu d'une visite a l'autre.
  // Le site ne pose aucun traceur : le bandeau informe et enregistre le choix,
  // il n'a rien a activer ni a desactiver derriere lui.
  var cookie = d.querySelector('.cookie');
  if (cookie) {
    try { if (localStorage.getItem('sg-cookies')) cookie.hidden = true; } catch (e) {}
    cookie.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-choix]');
      if (!b) return;
      try { localStorage.setItem('sg-cookies', b.dataset.choix); } catch (e) {}
      cookie.hidden = true;
    });
  }

  // Formulaire de contact — envoi reel via Web3Forms, sans quitter la page.
  // Les libelles sont lus sur le formulaire lui-meme (data-*), pour que la
  // version anglaise n'ait pas besoin d'un second script.
  var form = d.querySelector('.form');
  if (form && form.getAttribute('action')) {
    var etat = form.querySelector('.form-etat');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bouton = form.querySelector('button[type=submit]');
      var libelle = bouton.textContent;
      bouton.disabled = true;
      bouton.textContent = form.dataset.envoi;
      if (etat) { etat.textContent = ''; etat.className = 'form-etat'; }

      fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok || res.j.success === false) throw new Error(res.j.message || 'erreur');
          form.reset();
          bouton.textContent = form.dataset.succesBouton;
          if (etat) { etat.className = 'form-etat is-ok'; etat.textContent = form.dataset.succes; }
        })
        .catch(function () {
          bouton.textContent = libelle;
          if (etat) { etat.className = 'form-etat is-ko'; etat.textContent = form.dataset.erreur; }
        })
        .then(function () {
          bouton.disabled = false;
          setTimeout(function () { bouton.textContent = libelle; }, 4000);
        });
    });
  }
})();
