@echo off
rem ======================================================================
rem  Apercu local du site SunyGreen
rem
rem  Double-cliquez ce fichier plutot que index.html.
rem
rem  Ouvert directement depuis le disque (adresse file://), le site n'a
rem  aucun serveur derriere lui : les pages legales et la page 404 perdent
rem  leur mise en forme, et certains liens ne se resolvent pas comme ils le
rem  feront en ligne. Ce lanceur demarre un petit serveur local, exactement
rem  comme o2switch le fera, puis ouvre le navigateur dessus.
rem
rem  Ce fichier ne doit PAS etre televerse : le .htaccess en bloque l'acces
rem  au cas ou, mais autant ne pas l'envoyer.
rem ======================================================================

title Apercu local - SunyGreen
cd /d "%~dp0"

echo.
echo   ==================================================
echo     Site SunyGreen - apercu local
echo   ==================================================
echo.
echo     Adresse : http://localhost:8000
echo.
echo     Laissez cette fenetre ouverte pendant que vous
echo     consultez le site. Fermez-la, ou faites Ctrl+C,
echo     pour arreter le serveur.
echo.

rem Le navigateur est lance avant le serveur : celui-ci bloque la fenetre
rem tant qu'il tourne, rien ne s'executerait apres lui.
start "" "http://localhost:8000"

rem « py » est le lanceur Python fourni avec l'installateur Windows ;
rem « python » sert de repli si seul celui-ci est disponible.
py -m http.server 8000
if errorlevel 1 python -m http.server 8000

rem Si les deux echouent, la fenetre se fermerait avant qu'on ait pu lire
rem le message d'erreur.
if errorlevel 1 (
  echo.
  echo   Python est introuvable sur cette machine.
  echo   Installez-le depuis https://www.python.org/downloads/
  echo   en cochant "Add python.exe to PATH", puis relancez ce fichier.
  echo.
  pause
)
