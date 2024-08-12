import router from '@adonisjs/core/services/router'
const AuthController = require('./auth.controller')

router.group(() => {
  router.post('/sign-up', [AuthController, 'signUp'])
}).prefix('/auth')