'use strict'

const db = require('../src/models/index').sequelize
const Seed = require('../src/seeds/index')
const aws = require('aws-sdk');

class DeploySchemeRDS {
  constructor (serverless, options) {
    this.hooks = {
      // this is where we declare the hook we want our code to run
      'after:deploy:finalize': function () { syncScheme(serverless,db,Seed) }
    }
  }
}

function syncScheme (serverless,database,seeder) {

  updateAWSbyDeployStrategy(aws)
  
  let endpoint = getRDSEndpointAdress(aws)
 
  updateRDSConection(database,endpoint)

  switch(serverless.service.custom.stage.toLowerCase()) {
    case 'dev':
      rdsSyncForceAndSeed(database,seeder)      
      break
    case 'qa':
      rdsSyncForceAndSeed(database,seeder)            
      break
    case 'prod':
      rdsSyncWithoutForce(database)          
      break
    default:
        serverless.cli.log(`stage not supported`)
      break

  }
}

function updateAWSbyDeployStrategy(aws){
  let strategy = serverless.service.custom.deploy.toLowerCase()  

  if ( strategy === 'local'){
    let aws_profile = serverless.service.custom.aws_profile
    aws.config.update({
      credentials: new aws.SharedIniFileCredentials({profile: aws_profile}),
      region: serverless.service.provider.region,
      apiVersions: {
        rds: '2014-10-31',
      }
    })
  }

  if ( strategy === 'bastion'){
    aws.config.update({      
      region: serverless.service.provider.region,
      apiVersions: {
        rds: '2014-10-31',
      }
    })
  }

}

function getRDSEndpointAdress(aws){

  let rds = new aws.RDS();

  let params = {
    DBInstanceIdentifier:     process.env.DB_NAME,
  };

  rds.describeDBInstances(params, function(err, data) {
    if (err) {
      serverless.cli.log(err, err.stack); // an error occurred
      return null
    }
    else {     
      return data.DBInstances[0].Endpoint.Address
    }
  })  
}

function updateRDSConection(database, endpoint){

  database.connectionManager.config.database = process.env.DB_NAME
  database.connectionManager.config.username = process.env.DB_USER
  database.connectionManager.config.password = process.env.DB_PASSWORD
  database.connectionManager.config.host     = endpoint

}

function rdsSyncForceAndSeed(database,seeder){

  database.sync({ force: true }).then(() => {
      serverless.cli.log(`Database & tables created!`)
  }).then(()=>{
    seeder()
    serverless.cli.log(`Database & init data loaded!`)
  }).catch(err => {
    serverless.cli.log(err)
  })

}

function rdsSyncWithoutForce(database){

  database.sync({ force: false }).then(() => {
      serverless.cli.log(`Database & tables created!`)
  }).catch(err => {
    serverless.cli.log(err)
  })

}

module.exports = DeploySchemeRDS