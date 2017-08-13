'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/user','user.list');
  app.get('/user/:id','user.single');
  app.get('/u-user/:id','user.update');
  app.get('/us-user/:id','user.updateSingle');
};
