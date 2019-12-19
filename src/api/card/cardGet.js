
import { success, failure } from '../../libs/response-lib'
import models from '../../models'


export async function main (event, context) {
    
    try {
      let card, Card
    
      Card    = models.Card
      
      card = await Card.findOne({
        where: {id: event.pathParameters.id},
        include: [          
          {model: models.Order,
            include: [{model: models.Client}]
          },           
        ],
        order: [[models.Order, 'createdAt', 'asc']]
      });
      
      return success(card);
    } catch (e) {
      console.error(e)
      return failure({status: false})
    }
}