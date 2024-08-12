import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'
import UserService from '../user/user.service.js';

@inject()
export default class AuthService {
  constructor(private userService: UserService) {}

  async signUp(ctx: HttpContext) {

  }
}