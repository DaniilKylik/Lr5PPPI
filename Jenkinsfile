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
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
    }
}
