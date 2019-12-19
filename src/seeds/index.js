
const ClientSeed = require('./client');
const OrderSeed = require('./order');
const CardSeed = require('./card');

module.exports = function() {
    return Promise.all([ // Returning and thus passing a Promise here
        // Independent seeds first        
        ClientSeed(),        
        OrderSeed()
    ]).then(() => {
        // More seeds that require IDs from the seeds above                
        CardSeed()        
    }).then(() => {   
        console.log('********** Successfully seeded db **********');
    });
}