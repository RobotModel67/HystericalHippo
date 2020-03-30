'use strict';
const controller = require('./controller');

module.exports = {
    method: 'GET',
    path: '/facultad',
    handler: (request, h) => {
        //return { message: 'StageX running...' };
        return { message: `Facultad say ${controller.sayHello()} at ${Date.now()} (${controller.timeStamp})` };
    }
}