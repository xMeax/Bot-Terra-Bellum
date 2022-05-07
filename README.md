# Social Bellum

Social Bellum est un bot discord open source basé sur le serveur discord de Terra Bellum, une chaine YouTube francophone traitant de géopolitique.
Le bot est à caractère humoristique, le second degré est de mise ou vous risquez de perdre des crédits !
Les fans de chats sont l'élite.

#### Pré-requis
- Un compte Discord
- Une application créée dans le panel développeur
Le token de l'application

## Créer une application
- Rendez-vous sur https://discord.com/developers/applications
- Créez une application
- Copiez votre token discord
- Créez un fichier .env à la racine du site et suivez la suite des instructions

## Installation
Installation du bot et de ses dépendances
```
git clone https://github.com/xMeax/Bot-Terra-Bellum
cd Bot-Terra-Bellum
npm install
```
Créez un fichier `.env` à la racine contenant les données suivantes :
```
BOT_TOKEN=<VOTRE TOKEN>
BOT_SUFFIX=<VOTRE SUFFIX, PAR DEFAUT "!">
```

## Lancer l'application
Rendez-vous dans le terminal et lancez la commande suivante
`node src/index.js`