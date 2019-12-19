# Serverless Plugin SYNC RDS

You would found the code of the plugin [here](.serverless_plugins/deploy-scheme-rds.js#L7) who deploys the scheme of our DB.

[serverless.yml](serverless.yml#L12)
```yaml
plugins:
  - serverless-bundle # Package our functions with Webpack
  - serverless-offline
  - serverless-dotenv-plugin # Load .env as environment variables
  - deploy-scheme-rds # custom Sync RDS plugin
```

You cant use this plugin in two scenarios:

  1) local machine: you need to set [aws_profile](serverless.yml#L12) custom variable 
  2) Bastion Host: this machine must have iam role privilege and the value of custom variable [deploy](serverless.yml#L13) must be "bastion"


[serverless.yml](serverless.yml#L19-L20)
```yaml
custom:  
  
  # Our stage is based on what is passed in when running serverless
  # commands. Or fallsback to what we have set in the provider section.
  stage:                ${opt:stage, self:provider.stage}
  deploy:               ${opt:deploy, REPLACE_DEPLOY_STRATEGY} # values local or bastion
  aws_profile:          ${opt:aws_profile, REPLACE_PROFILE} # if your deploy is local set your aws_profile
```

In order to deploy this project you need to create in the root path a file .env and define the next values

```
DB_NAME             = Name of DB of RDS example gitfcard
DB_USER             = User with admin privilege to RDS instance example admin
DB_PASSWORD         = Password of admin user example admin564
DB_PORT             = default por to RDS instance example 3306
```

## RDS 

For testing propouse we deploy RDS to be accesible from internet

[serverless.yml](serverless.yml#L20-L22)
```yaml
custom:  
  
  # Our stage is based on what is passed in when running serverless
  # commands. Or fallsback to what we have set in the provider section.
  stage:                ${opt:stage, self:provider.stage}
  deploy:               ${opt:deploy, local} # values local or bastion
  aws_profile:          ${opt:aws_profile, torus} # if your deploy is local set your aws_profile
  PUBLIC_SUBNET_ID_1:   REPLACE_PUBLIC_SUBNET_ID_1
  PUBLIC_SUBNET_ID_2:   REPLACE_PUBLIC_SUBNET_ID_2
  PUBLIC_SUBNET_ID_3:   REPLACE_PUBLIC_SUBNET_ID_3
```

## Lambda in private subnet

The neccessity to uses private subnets is because we gave VPC privilege our lambda functions so they can talk any AWS services we define, so if you want your lambda functions have access to internet every subnet must have a nat gateway

[serverless.yml](serverless.yml#L47-L49)
```yaml
vpc:
    securityGroupIds:
      - Fn::GetAtt: [RDSSecurityGroup, GroupId]
    subnetIds:      
      - REPLACE_PRIVATE_SUBNET_ID_1
      - REPLACE_PRIVATE_SUBNET_ID_2
      - REPLACE_PRIVATE_SUBNET_ID_3      
```

reference https://gist.github.com/030/4a5271a664f7063ace472e579a33e524

# Serverless Node.js Starter

this project was created on base of  [Serverless Node.js Starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter) 