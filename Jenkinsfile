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
                sh 'npm install -g gulp'
                sh 'npm install'
                sh 'gulp'
            }
        }
    }
    post {
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
            echo 'Pipeline state has changed'
        }
        always {
            archive "dist/*"
            stash includes: 'dist/*.js', name: 'debugBuiltArtifacts'
        }
    }
}
