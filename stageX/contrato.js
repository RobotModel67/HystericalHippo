'use strict';
const controller = require('./controller');

module.exports = {
    method: 'GET',
    path: '/contrato',
    handler: (request, h) => {
        //return { message: 'StageX running...' };
        return { message: `Contrato say ${controller.sayHello()} at ${Date.now()} (${controller.timeStamp})` };
    }
}