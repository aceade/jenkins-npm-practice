pipeline {
    agent { 
        docker { 
            // note: if you are using a tool that requires Git,
            // replace '14-alpine' with '14'
            image 'node:14-alpine' 
            args '--user root'
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'

                // Gulp has to be installed globally AND locally
                sh 'npm install -g gulp'
                sh 'npm install'
                sh 'gulp'
            }
        }
    }
    post {
        success {
            echo 'Build completed successfully'
            archiveArtifacts "dist/*"
            stash includes: 'dist/*.js', name: 'debugBuiltArtifacts'
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
    }
}
