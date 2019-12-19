
import { success, failure } from '../../libs/response-lib'
import models  from '../../models'

export async function main (event, context) {
    
    try {
      let card, Card, data

      data    = JSON.parse(event)
      Card    = models.Card
      card    = await Card.create(data)
      
      return success(card);
    } catch (e) {
      console.error(e)
      return failure({status: false})
    }
}