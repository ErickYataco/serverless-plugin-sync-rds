// const db = require('../models')
// const Order = require('../models/order')(db.sequelize,db.Sequelize)
const Order = require('../models').Order

module.exports = function() {
    return Order.bulkCreate([ // Returning and thus passing a Promise here
        {
            status: '1',
            clientId: 1,
            createdAt: '2019-10-31T22:34:22.000Z'
        },
        {
            status: '2',
            clientId:2,
        },
        {
            status: '2',
            clientId:4,
            createdAt: '2019-10-31T22:34:22.000Z'
        },
        {
            status: '1',
            clientId:3,            
        },
    ]);
};