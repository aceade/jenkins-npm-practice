# jenkins-npm-practice
A practice project to teach myself how to create Jenkins builds. It contains a sample Gulp task to run JSHint validation on a piece of JavaScript code.

## Setting up Jenkins
This assumes you have Jenkins installed. If not, that is beyond the scope of this README; consult [the Jenkins documentation](https://www.jenkins.io/doc/book/installing/) for details.

You will need to install the Docker and Docker Pipeline plugins to use this.

### Setting up the Pipeline
Most of these are taken from [the Jenkins pipeline tutorial](https://www.jenkins.io/doc/tutorials/#pipeline). This is the summary version:

1. Log into Jenkins and select New Item.
2. Select "Multibranch Pipeline" and click "OK".
3. Under "Branch Sources", select "GitHub" and enter the repository URL (https://github.com/aceade/jenkins-npm-practice.git)
4. Click "Save" and "Apply".

### The Jenkinsfile
The comments here are to explain what is required.

```
pipeline {
    agent { 
        docker { 
            image 'node:14-alpine' 
            args '--user root'  // required due to permissions issues inside Docker
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'  // debugging step to check NPM version
                sh 'npm install -g gulp'    // install globally so that Gulp is on the global PATH
                sh 'npm install'            // install the actual dependencies
                sh 'gulp'                   // run the gulp task
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
    }
}
```

### The Gulp task
The Gulpfile contains a single task: validating some dodgy JavaScript code using JSHint. This is set to deliberately pass.

The following JSHint rules are configured inside the `.jshintrc` file:
* undef - catch potential mistyped or leaking variables 
* unused - unused functions and variables are not allowed
* strict - all functions must start with a "use strict" statement, if not already nested inside a function that contains this
* eqeqeq - mandates the use of strict equality (=== or !==)
* curly - loops and conditionals *must* include curly brackets
* browser - assume that this will be running inside a browser.
* devel - assume that `console` and `alert`  functions may be present.

The code inside `src/badCode.js` violates these rules, unlike the code inside `goodCode.js`.

## Licence
See the attached LICENSE file.