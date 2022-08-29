import { dataSource } from '@config/database';

import User from '@modules/users/entities/User';

export default class UserRepository {
  public async findAll(): Promise<User[]> {
    const findAll = (await dataSource)
      .getRepository(User)
      .find({ order: { id: 'ASC' } });

    return findAll;
  }
}
