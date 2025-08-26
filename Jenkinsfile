pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "node_hello_app"   // Nom de l'image Docker
    }

    stages {
        stage('Checkout') {
            steps {
                // Récupération du code depuis Git
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 ${DOCKER_IMAGE}'
            }
        }
    }

    post {
        always {
            echo "Pipeline terminé."
        }
    }
}
