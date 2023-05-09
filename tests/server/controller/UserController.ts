// import UserService from '../service/UserService';
import { Result } from '../utils';

const fakeUserInfo = {
  userId: '1',
  username: 'qckj',
  realName: 'Admin',
  desc: 'manager',
  password: '123456',
  token: 'fakeToken1',
  roles: [
    {
      roleName: 'Super Admin',
      value: 'super',
    },
  ],
};

class UserController {
  // private service: UserService = new UserService();

  login = async (ctx) => {
    // ctx.body = await this.service.login();
    ctx.body = await Result.success(fakeUserInfo);
  };

  getUserInfoById = async (ctx) => {
    // ctx.body = await this.service.getUserInfoById();
    ctx.body = await Result.success(fakeUserInfo);
  };
}

export default new UserController();
