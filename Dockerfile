# Utiliser une image officielle Node.js
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 5000

# Commande de démarrage
CMD ["npm", "start"]
