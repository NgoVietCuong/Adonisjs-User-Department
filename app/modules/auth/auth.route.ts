import router from '@adonisjs/core/services/router'
import AuthController from './auth.controller.js'

export default () => {
  router.group(() => {
    router.post('/sign-up', [AuthController, 'signUp'])
  }).prefix('/auth')
}