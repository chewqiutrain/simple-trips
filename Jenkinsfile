pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            reuseNode true
        }
    }
    stages {
        stage('Lint') {
            steps {
                echo "Building branch: ${GIT_BRANCH}"
                echo "is this a branch? : ${env.GIT_BRANCH}"
                echo "try this: ${env.BRANCH_NAME}"
                echo "how about: ${BRANCH_NAME}"
                sh 'ls -lah'
                sh 'npm run lint'
            }
        }
        stage('Build') {
            steps {
                echo 'Testing..'
                echo "env.BRANCH_NAME: ${env.BRANCH_NAME}"
                echo "env.CHANGE_ID: ${env.CHANGE_ID}"
                echo ""
                // npm run build
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}