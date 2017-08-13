'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    * list() {
      console.log(this.ctx.query.page);
      this.ctx.body = yield this.ctx.service.user.list(this.ctx.query.page || 1);
    }
    * single() {
      this.ctx.body = yield this.ctx.service.user.single(this.ctx.params.id);
    }
    * update() {
      this.ctx.body = yield this.ctx.service.user.update(this.ctx.params.id);
    }
    * updateSingle() {
      this.ctx.body = yield this.ctx.service.user.updateSingle(this.ctx.params.id);
    }
  }
  return UserController;
};
