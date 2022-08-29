import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';

export default class ListUserService {
  public async execute(): Promise<User[]> {
    const repository = new UserRepository();

    const users = await repository.findAll();

    return users;
  }
}
