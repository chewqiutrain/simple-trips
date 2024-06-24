pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building branch: ${GIT_BRANCH}'
                echo 'is this a branch? : ${env.GIT_BRANCH}'
                echo 'try this: ${env.BRANCH_NAME}'
                echo 'how about: ${BRANCH_NAME}'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo "${env.BRANCH_NAME}"
                echo $CHANGE_ID
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}