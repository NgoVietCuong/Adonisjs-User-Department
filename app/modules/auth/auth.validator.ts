import vine from '@vinejs/vine'

export const emailValidator = vine.compile(
  vine.object({
    email: vine.string().email().toLowerCase()
  })
)

export const signUpValidator = vine.compile(
  vine.object({
    username: vine.string(),
    email: vine.string().email().toLowerCase(),
    password: vine.string()
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().toLowerCase(),
    password: vine.string()
  })
)