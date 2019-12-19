
import { success, failure } from '../../libs/response-lib'
import Sequelize from 'sequelize'
import models  from '../../models'

export async function main (event, context) {
    
    try {
      let orders,Order, pagination = {}, queryString,  
          whereClause = {}, whereClauseClient = {}, Op = Sequelize.Op,
      
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
        whereClause['id']=queryString.orderId
      }
 
      if (queryString && queryString.status){
        whereClause['status']=queryString.status
      }
      
      if (queryString && queryString.startDate && queryString.endDate){

        whereClause['createdAt']={[Op.between]:
                                        [new Date(queryString.startDate),
                                          new Date(queryString.endDate)]
                                }
      }
    
      if (queryString && queryString.clientId){
        whereClauseClient['id']=queryString.clientId
      }
      
      Order     = models.Order
      
      orders  = await Order.findAll({
        pagination,
        attributes: ['id','status','createdAt','updatedAt',
          [Sequelize.fn('SUM', Sequelize.col('cards.amount')), 'amount']
        ],
        where:    whereClause,
        group:    ['id','status','createdAt','updatedAt'],
        include:  [{
            model:  models.Client,          
            where:  whereClauseClient
          },
          {
            model:  models.Card,
            attributes: [],            
          }
        ],
        order:   [
          ['createdAt','DESC']
        ],
        logging: console.log
      })
      
      return success(orders)
    } catch (e) {
      console.error(e)
      return failure(e)
    }
}