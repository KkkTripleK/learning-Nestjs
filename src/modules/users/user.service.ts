import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private dataSource: Repository<User>,
  ) {}

  async createUser(userInfo: createUserDto) {
    const k = await this.dataSource.save(userInfo);
    return k;
  }
}
