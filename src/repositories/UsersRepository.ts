import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { EntityRepository } from 'typeorm';

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export {UsersRepository}