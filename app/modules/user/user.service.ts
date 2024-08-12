import User from "#models/user"

export default class UserService {
  async create(data: Omit<User, 'id' & 'createdAt' & 'updatedAt'>) {
    return await User.create(data);
  }
}