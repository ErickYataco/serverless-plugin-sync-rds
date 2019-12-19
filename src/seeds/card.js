
const Card = require('../models').Card


module.exports = function() {
    
    return Card.bulkCreate([ // Returning and thus passing a Promise here
        {
            accountId   : '1ASDS546ADS655644223',
            status      : 1,
            orderId     : 1,            
            amount      : 8000,
            balance     : 8000,
            createdAt: '2019-10-31T22:34:22.000Z'
        },
        {
            accountId   : '7778SDFVZOY51SDF33KL',
            status      : 1,
            orderId     : 1,            
            amount      : 8000,
            balance     : 8000,
            createdAt: '2019-10-31T22:34:22.000Z'
        },
        {
            accountId   : '9QW33DFGJ2222E11Q8SD',
            status      : 1,
            orderId     : 1,            
            amount      : 8000,
            balance     : 8000,
            createdAt: '2019-10-31T22:34:22.000Z'
        },
        {
            accountId   : '88MNN61GG6644689000',
            status      : 2,
            orderId     : 2,            
            amount      : 18000,
            balance     : 18000
        },
        {
            accountId   : '555Q0SC0VBB34YZX55',
            status      : 2,
            orderId     : 2,            
            amount      : 18000,
            balance     : 18000
        },
        {
            accountId   : 'WAQCT99TT51111111',
            status      : 2,
            orderId     : 2,            
            amount      : 18000,
            balance     : 18000
        },
        {
            accountId   : '22020257145632QQWR444',
            status      : 2,
            orderId     : 2,            
            amount      : 18000,
            balance     : 18000
        },
        {
            accountId   : 'TTYT556465SDCCCVSA111',
            status      : 2,
            orderId     : 2,            
            amount      : 18000,
            balance     : 18000
        },
        {
            accountId   : 'E1H1H1H333FGHJK5454EEE',
            status      : 2,
            orderId     : 2,            
            amount      : 18000,
            balance     : 18000
        },
        {
            accountId   : '778789WE6656611SDFG11',
            status      : 3,
            orderId     : 2,             
            amount      : 18000,
            balance     : 18000
        },
        // data smart-fit
        {
            accountId   : '897654ASD0WEW9SS44SPJ',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : 'QWEW66KL4D5F12Q1H50W0',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : 'LL0101Q01Q01LPVB5NSKL',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : '0QF0JL5D12YRTPOP2353',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : 'LLKSKDO6405645QQ0000',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : 'CVMBPPP342200LSMM47',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : '778789WE6656611SDFG11',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : 'VBNMLL3210475ASD00S13',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : '01897987QWESLLPSPP336',
            status      : 2,
            orderId     : 3,             
            amount      : 58000,
            balance     : 58000
        },
        {
            accountId   : 'ZXSDF5871LPEI0G89SD56',
            status      : 1,
            orderId     : 4,             
            amount      : 58000,
            balance     : 58000
        },        
        {
            accountId   : 'DDFGH8O1SE9Y1HJK6LD1S99',
            status      : 1,
            orderId     : 4,             
            amount      : 10058000,
            balance     : 10058000
        },
        {
            accountId   : 'ZAXDF4YUF5710ASDA2998',
            status      : 1,
            orderId     : 4,             
            amount      : 7058000,
            balance     : 7058000
        },
        {
            accountId   : 'QPOS645SE74SHVASF5445',
            status      : 1,
            orderId     : 4,             
            amount      : 5058000,
            balance     : 5058000
        },
        {
            accountId   : 'PLSKI546QWZS56G456HYH',
            status      : 1,
            orderId     : 4,             
            amount      : 98000,
            balance     : 98000
        },
        {
            accountId   : 'CVVB665AS87W9E9D66AS1',
            status      : 1,
            orderId     : 4,             
            amount      : 28000,
            balance     : 28000
        },
    ]);
};