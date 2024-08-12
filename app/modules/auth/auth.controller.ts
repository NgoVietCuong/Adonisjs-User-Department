import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import AuthService from './auth.service.js'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  async signUp(ctx: HttpContext) {
    return this.authService.signUp(ctx);
  }
}