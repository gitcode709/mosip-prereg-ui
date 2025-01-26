pipeline {
    agent {
            label '72-agent'
    }
 
    stages {
        stage('Build the Application') {
            steps {
                script {
					def version = "v${env.BUILD_NUMBER}"
                    sh """
                        docker build prereg:${version} .
                        docker tag prereg:${version} jayantbharti/prereg:${version}
                        docker push jayantbharti/prereg:${version}
                    """
                }
            }
        }
 
        stage('Deploy the Application') {
            steps {
                script {
                    def version = "v${env.BUILD_NUMBER}"
                    sh "kubectl set image deploy/prereg-ui  prereg-ui=jayantbharti/prereg:${version}"
                }
            }
        }
    }
}
