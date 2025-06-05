@Library('Shared') _
pipeline {
    agent {label 'Master'}
    
    
    parameters {
        string(name: 'FRONTEND_DOCKER_TAG', defaultValue: '', description: 'Setting docker image for latest push')
        string(name: 'BACKEND_DOCKER_TAG', defaultValue: '', description: 'Setting docker image for latest push')
    }
    
    stages {
        stage("Validate Parameters") {
            steps {
                script {
                    if (params.FRONTEND_DOCKER_TAG == '' || params.BACKEND_DOCKER_TAG == '') {
                        error("FRONTEND_DOCKER_TAG and BACKEND_DOCKER_TAG must be provided.")
                    }
                }
            }
        }
        stage("Workspace cleanup"){
            steps{
                script{
                    cleanWs()
                }
            }
        }
        
        stage('Git: Code Checkout') {
            steps {
                script{
                    git_clone("https://github.com/monu3/samitenthouse.git","main")
                }
            }
        }
        
        
        // stage('Exporting environment variables') {
        //     parallel{
        //         stage("Backend env setup"){
        //             steps {
        //                 script{
        //                     dir("Automations"){
        //                         sh "bash updatebackendnew.sh"
        //                     }
        //                 }
        //             }
        //         }
                
        //         stage("Frontend env setup"){
        //             steps {
        //                 script{
        //                     dir("Automations"){
        //                         sh "bash updatefrontendnew.sh"
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        
        stage("Docker: Build Images"){
            steps{
                script{
                        dir('backend'){
                            docker_build("samitenthouse-backend","${params.BACKEND_DOCKER_TAG}","monusiddiki")
                        }
                    
                        dir('frontend'){
                            docker_build("samitenthouse-frontend","${params.FRONTEND_DOCKER_TAG}","monusiddiki")
                        }
                }
            }
        }
        
        stage("Docker: Push to DockerHub"){
            steps{
                script{
                    docker_push("samitenthouse-backend","${params.BACKEND_DOCKER_TAG}","monusiddiki") 
                    docker_push("samitenthouse-frontend","${params.FRONTEND_DOCKER_TAG}","monusiddiki")
                }
            }
        }
    }
    post{
        success{
            script {
                echo "Build completed successfully and transfer to CD job."
            }
            build job: "sami_CD", parameters: [
                string(name: 'FRONTEND_DOCKER_TAG', value: "${params.FRONTEND_DOCKER_TAG}"),
                string(name: 'BACKEND_DOCKER_TAG', value: "${params.BACKEND_DOCKER_TAG}")
            ]
        }
    }
}