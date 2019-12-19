
import { success, failure } from '../../libs/response-lib'
import models  from '../../models'

export async function main (event, context) {
    
    try {
      let cards, Card, queryString, pagination = {}, whereClauseOrder = {}
         
           
      queryString = event.queryStringParameters

      if (queryString && queryString.offset){
        pagination['offset'] = queryString.offset
      }else{
        pagination['offset'] = 0
      }

      if (queryString && queryString.limit){
        pagination['limit']=queryString.limit
      }else{
        pagination['limit'] = 30
      }
                  
      if (queryString && queryString.orderId){
        whereClauseOrder['id']=queryString.orderId
      }
    
      Card    = models.Card
    
      cards   = await Card.findAll({
        pagination,        
        include: [
          {
            model:  models.Order,
            where:  whereClauseOrder
          },          
          // {
          //   model:  Client,
          // }
        ],
        order: [
          ['createdAt','DESC']
        ],
        logging: console.log
      })
      
      return success(cards)
    } catch (e) {
      console.error(e)
      return failure({status: false})
    }
}