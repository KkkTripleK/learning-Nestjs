import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './user.dto';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('*/register')
  async createUser(@Body() bodyRequest: createUserDto) {
    return this.userService.createUser(bodyRequest);
  }

  @Get('*/hello')
  async helloW() {
    return 'hello';
  }
}
