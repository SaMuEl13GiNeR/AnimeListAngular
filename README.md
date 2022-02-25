\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***TICSIMARRO**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*

per accedir al TicSimarro:
http://2daw07.ticsimarro.org/AnimeListAngular

# AnimeListAngular

\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***FUNCIONAMENT**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*

L'aplicació serveix per anotar el seguiment d'Animes, de tal forma que si estas vegent diferents animes al mateix temps podes saber per quin capítol t'has quedat en cada un d'ells.
També pots veure en l'apartat general diferents animes que pots tindre o no en la teua propia llista, de forma que serveix com a recomanació ja que están ordenat per popularitat (l'ordre l'he tret d'una altra pàgina que té una base de dades amb tots els animes existents ordenats de diferents formes).
Cada usuari té una llita d'anime (manga en un futur) en el que pots veure els animes que estas vegent, els que tens en "pendent per a veure", els que has deixat de veure (abandonats) i els que ja has acabat.

\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***PAGINES**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*

**\*\***\***\*\*\*HOME**\*\***\***\*\*\*\*

La pàgina home, es la inicial, té una llista de animes ordenats per la popularitat que tenen.
Aquesta pàgina la pots veure tant si has iniciat sessió o si no.
Cada anime te un botó detall per a veure més detalladament la informació de cada anime.

**\*\***\***\*\*\*LOGIN**\*\***\***\*\*\*\*

La pàgina login, es un formulari en el que si ja tens un compte creat podrás iniciar sessió, si no estas, hi ha un botó de Registrar-se que envia a la pàgina per a registrar-se.
Si inicies sessió correctament enviarà a la pàgina inicial on mostrarà els animes més populars per a poder afegi-los a la llista de l'usuari.
Hi han validadors els cuals validen si l'usuari y la contrasenya tenen un mínim de 3 carácters.

**\*\***\***\*\*\*REGISTRE**\*\***\***\*\*\*\*

La pàgina de registre, es un formulari per a crear un compte de la pàgina per a poder iniciar sessió en la pàgian de login.
Si crees el compote en registrar i no esta tot correctament donarà un error i no es registrará en la "base de dades" ni en "usuaris" de firebase.
Si està tot correctament, crearà l'usuari i l'afegirà a la base de dades en una llista buida i mostrarà el login per a que inicie sessió després de registrar-se.
Hi ha tres tipus d'usuaris: Usuario (usuari per a fer us normal de la pàgina), Convidat (no tens una llista per a mostrar però pots veure la llista general), admin (serveix per a fer funcions d'administració i es l'unic que pot veure l'apartat de tests).

**\*\***\***\*\*\*LLISTA_ANIME**\*\***\***\*\*\*\*

La pàgina de llista d'anime mostra una llista dels animes que tens afegits.
Els animes tenen un estat en el que pots mostrar la llista dels que tenene aquest estat.
En els animes en "watching" tenen un botó "+" per a afegir un capitol més i anotar per quin vas, ja que els animes en emisió emiteixen un capitul per semana i aquest botó llevaría la necessitat d'entrar al boto de modificar cada anime i cambiar el capitol pel que vas.

**\*\***\***\*\*\*ANIME_DETALL**\*\***\***\*\*\*\*

Es un boto que hi ha a les llistes d'anime on es mostra uan un llistat de la informació de cada anime de forma un poc més ampliada.

**\*\***\***\*\*\*LLISTA_MANGA**\*\***\***\*\*\*\*

La pàgina de llista de manga te la mateixa funcionalitat que la d'anime però per al manga.
No acabada.

**\*\***\***\*\*\*LOGOUT**\*\***\***\*\*\*\*

El botó de logout serveix per a quan estas logeat tancar la sessió, de forma que borra la sessió de localStorage.

##########################################################################################################################

# Proyecto2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
