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

        stage('Testing/Sonarqube') {
            environment {
                scannerHome = tool 'makpar-sonar-scanner'
            }
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh "${scannerHome}/bin/sonar-scanner -X"
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Upload') {
            steps {
                sh 'aws s3 cp ./build/ s3://jenkins-makpar-innolab-aws-devops-template2 --recursive'
            }
        }
    }
}

