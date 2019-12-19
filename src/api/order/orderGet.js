
import { success, failure } from '../../libs/response-lib'
import models  from '../../models'

export async function main (event, context) {
    
    try {
      let order, Order, Client
    
      Order    = models.Order
      Client   = models.Client

      order   = await Order.findOne({
        where: {id: event.pathParameters.id},
        include: [{
          model: Client
        }],
      })
      
      return success(order);
    } catch (e) {
      console.error(e)
      return failure({status: false})
    }
}