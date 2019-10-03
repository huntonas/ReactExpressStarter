'use strict';
const StaticController = require('../controllers/StaticController');
const TestController = require('../controllers/TestController');

exports.getStaticRoutes = (app, cb) => {
  app.get('/', StaticController.index);
  app.get('/test', TestController.index);
  cb();
};
