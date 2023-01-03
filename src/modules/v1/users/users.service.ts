import { Injectable } from '@nestjs/common';
import { Test } from '../tests/entities/test.entity';
import { TestsService } from '../tests/tests.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private testsService: TestsService) {}

  create() {
    const result = TestsService.globalVar++;
    console.log('count : ', result);
    return result;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
