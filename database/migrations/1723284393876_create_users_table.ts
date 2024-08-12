import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('department_id').notNullable()
      table.string('username', 100).notNullable()
      table.string('email', 100).notNullable()
      table.string('password')
      table.boolean('email_verified').notNullable().defaultTo(false)
      table.boolean('is_active').notNullable().defaultTo(true)
      table.string('role', 100).notNullable()
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}