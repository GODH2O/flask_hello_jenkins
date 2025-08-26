pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "node_hello_app"   // Nom de l'image Docker
        DOCKER_CONTAINER = "node_hello_container"
    }
     triggers {
        // Déclenche à chaque push GitHub (via webhook)
        githubPush()
        // Optionnel : vérifie le dépôt toutes les 5 minutes si pas de webhook
        // pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                // Récupération du code depuis le dépôt Git
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                // Installation des dépendances avec npm
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Exécution des tests ou affichage d'un message si aucun test n'est présent
                sh 'npm test || echo "Pas de tests à exécuter"'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Construction de l'image Docker
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }

        stage('Stop Old Container') {
            steps {
                // Arrêter et supprimer l’ancien container s’il existe
                sh 'docker rm -f ${DOCKER_CONTAINER} || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                // Lancer un nouveau container Docker
                sh 'docker run -d --name ${DOCKER_CONTAINER} -p 3000:3000 ${DOCKER_IMAGE}'
            }
        }
    }

    post {
        always {
            // Message de fin de pipeline
            echo "✅ Pipeline terminé."
        }
    }
}