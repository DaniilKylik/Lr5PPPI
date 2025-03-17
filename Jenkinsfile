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
        stage('Run Tests') {
            steps {
                dir('clothing-shop-backend') {
                    bat 'npm test'
                }
            }
        }
    }
}

