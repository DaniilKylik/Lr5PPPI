pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/DaniilKylik/Lr5PPPI.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Check Node.js and npm versions') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test -- --watchAll=false'
            }
        }
    }
}

