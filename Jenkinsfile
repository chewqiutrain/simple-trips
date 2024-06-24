pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building branch: ${GIT_BRANCH}'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}