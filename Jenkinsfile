pipeline {
    agent { 
        docker { 
            image 'node:14-alpine' 
            args '--user root'
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install -g'
                sh 'gulp'
            }
        }
    }
    post {
        always {
            echo "Running the build"
        }
        success {
            echo 'Build completed successfully'
        }
        failure {
            echo 'The build failed'
        }
        unstable {
            echo 'The build is unstable!'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
        }
    }
}
