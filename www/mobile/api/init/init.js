
var util = require('util'),
    moment = require('moment'),
    
    Utils = require('./modules/utils.js'),
    Log = require('./modules/log.js'),
    Events = require('./modules/events.js');
    

module.exports = function() {

  global['util'] = util;
  global['moment'] = moment;
  
  global['Config'] = config = (process.env.CONFIG)?JSON.parse(process.env.CONFIG):{};
  global['Utils'] = utils = Utils();
  global['Log'] = log = Log();
  
  log.debug('Bootstraping...');
  log.debug('Config: %s',[config]);

  global['Events'] = events = Events();
  
  utils.forEach(sails.services,function(service){
    service = log.extend(service,'services',service.globalId,null,true);
  });
  global['Services'] = sails.services;

  utils.forEach(sails.models,function(model){
    model = log.extend(model,'models',model.globalId,null,true);
  });
  global['Models'] = sails.models;

  utils.forEach(sails.controllers,function(controller){
    controller = log.extend(controller,'controllers',controller.globalId+'Controller',null,true);
  });
  global['Controllers'] = sails.controllers;
  
  function processStop() {
    events.end();
  }
  
  process.on('SIGTERM',processStop);
  process.on('SIGINT',processStop);

}