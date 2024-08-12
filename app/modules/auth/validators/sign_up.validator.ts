import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
  vine.object({
    username: vine.string().trim(),
    email: vine.
  })
)