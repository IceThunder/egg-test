'use strict';

module.exports = app => {
  class UserService extends app.Service {
    * list(page=1) {
      var res = '';
      if (page == 1){
        res = {'list':[{'id':'1','title':'abcd'},{'id':'2','title':'ffff'},{'id':'3','title':'dddd'}]};
      } else if (page == 2){
        res = {'list':[{'id':'4','title':'gggg'},{'id':'5','title':'hhhh'},{'id':'6','title':'iiii'}]};
      } else {
        res = {'list':[]};
      }
      return res;
    }

    * single(id){
      var res = '';
      res = yield app.mysql.get('user',{'userCode': id});
      return res;
    }

    * update(id){
      var res = '';
      // 更新内容
      const row = {
        'userName': 'bcde'
      };
      // WHERE 条件
      const options = {
        'where': {'userCode':id}
      };
      const result = yield this.app.mysql.update('user', row, options);
      if (result.affectedRows == 1){
        res = {'msg':'success'};
      } else {
        res = {'msg':'failed'};
      }
      return res;
    }

    * updateSingle(id){
      var res = '';
      const conn = yield app.mysql.beginTransaction();
      const result = yield app.mysql.beginTransactionScope(function* (conn){
        res = yield app.mysql.get('user',{'userCode':id});
        if(res.state != '1'){
          // 更新内容
          const row = {
            'state': '1'
          };
          // WHERE 条件
          const options = {
            'where': {'userCode':id}
          };
          yield app.mysql.update('user',row,options);
          res.state = 1;
          res.update = 'success';
        }
        // 更新成功后commit
        return {'success':true};
      }, this.ctx);
      // 返回需要返回的内容
      return res;
    }
  }
  return UserService;
}
