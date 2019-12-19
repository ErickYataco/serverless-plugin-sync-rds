
import { success, failure } from '../../libs/response-lib'
import models  from '../../models'


export async function main (event, context) {
    
    try {
      let Clients, Client
    
      Client    = models.Client
      Clients   = await Client.findAll({        
        logging: console.log
      })
      
      return success(Clients)
    } catch (e) {
      console.error(e)
      return failure({status: false})
    }
}