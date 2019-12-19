
import { success, failure } from '../../libs/response-lib'
import models  from '../../models'


export async function main (event, context) {
    
    try {
      let order, Order, data

      data  = JSON.parse(event)
      Order = models.Order
 
      order = await Order.create(data)
    
      return success(order)
    } catch (e) {
      console.error(e)
      return failure({status: false})
    }
}