pipeline {
    agent any
    tools { nodejs 'odos-nodejs' }

    stages {

        stage('Install & Build') {          // <-- moved to the top
            steps {
                /*
                 * npm ci is faster and uses package-lock.json
                 * swap to `npm install` if you don’t have the lock-file.
                 */
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Coverage Test') {
            steps {
                sh 'npm test -- --coverage'
            }
        }


        stage('Upload') {
            steps {
                sh 'echo "complete"'
            }
        }
    }
}

