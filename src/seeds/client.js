const Client = require('../models').Client

module.exports = function() {
    console.log('ClientSeed')
    return Client.bulkCreate([ // Returning and thus passing a Promise here
        {
            name            : 'Reebok',            
        },
        {
            name            : 'Adidas',            
        },
        {
            name            : 'Nike',            
        },
        {
            name            : 'Puma',            
        },
    ]);
};

