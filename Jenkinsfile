pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
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
  environment {
    DOCKER_IMAGE = 'node_hello_app'
  }
  post {
    always {
      echo 'Pipeline terminé.'
    }

  }
}