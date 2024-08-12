import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import AuthService from './auth.service.js'
import { signUpValidator } from './auth.validator.js';

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  async signUp(ctx: HttpContext) {
    // console.log('1')
    console.log(ctx.request.all())
    return this.authService.signUp(ctx);
  }
}