pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/DaniilKylik/Lr5PPPI.git'
            }
        }
        stage('Check Node Version') {
            steps {
                bat 'node -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Verify Files') {
            steps {
                dir('clothing-shop-backend') {
                    bat 'echo Current directory: && cd'
                    bat 'echo Available files: && dir'
                }
            }
        }
        stage('Run Tests') {
            steps {
                dir('clothing-shop-backend') {
                    bat 'npx jest --verbose'
                }
            }
        }
        stage('Check Funding') {
            steps {
                bat 'npm fund'
            }
        }
    }
}
