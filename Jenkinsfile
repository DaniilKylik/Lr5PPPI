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
                dir('clothing-shop-backend/models') {
                    bat 'npx jest clothing-shop-backend/models/user.test.js'
                }
            }
        }
        stage('Check Funding') {
            steps {
                bat 'npm fund'
            }
        }
        post {
            always {
                junit '**/test-coverage/test-results.xml' // Шлях до вашого XML файлу результатів
            }
        }
    }
}
