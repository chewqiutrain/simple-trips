pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            reuseNode true
        }
    }
    stages {
        stage('Build') {
            steps {
                echo "Building branch: ${GIT_BRANCH}"
                echo "is this a branch? : ${env.GIT_BRANCH}"
                echo "try this: ${env.BRANCH_NAME}"
                echo "how about: ${BRANCH_NAME}"

            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo "env.BRANCH_NAME: ${env.BRANCH_NAME}"
                echo "env.CHANGE_ID: ${env.CHANGE_ID}"
                echo ""
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}