def LANDINGPAGE_FOLDER = '.';
def LANDINGPAGE_TARGET_FOLDER = '/home/odm2019/node/ODM2019/website/';

pipeline {
  agent any
  stages {
    stage('install dev deps'){
      steps{
        dir(LANDINGPAGE_FOLDER){
          sh 'npm i'
        }
      }
    }
    stage('build'){
      steps{
        dir(LANDINGPAGE_FOLDER){
          sh 'npm run build'
        }
      }
    }
    stage('create deliverable'){
      steps{
        dir(LANDINGPAGE_FOLDER){
          sh 'mkdir deliver'
          sh 'mkdir deliver/dist'
          sh 'mkdir deliver/backend'
          sh 'cp package.json deliver/package.json'
          sh "cp -r dist/ deliver/"
          sh "cp -r backend/ deliver/"
        }
      }
    }
    stage('deliver'){
      when {
        branch 'master'
      }
      steps{
        dir("$LANDINGPAGE_FOLDER/deliver"){
          sh "mkdir -p $LANDINGPAGE_TARGET_FOLDER"
          sh "rm -r $LANDINGPAGE_TARGET_FOLDER"
          sh "mkdir -p $LANDINGPAGE_TARGET_FOLDER"
          sh "cp -r . $LANDINGPAGE_TARGET_FOLDER"
          sh "ls ."
          sh "ls $LANDINGPAGE_TARGET_FOLDER"
        }
      }
    }
    stage('post delivery'){
      when {
        branch 'master'
      }
      steps{
        dir(LANDINGPAGE_TARGET_FOLDER){
          sh "npm i --production"
          sh "supervisorctl restart website"
        }
      }
    }
  }
}