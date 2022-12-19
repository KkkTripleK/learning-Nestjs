import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { UsersService } from './users.service';
import CacheService from '../cache/cache.service';

@Controller('users')
@ApiTags('users')
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cacheService: CacheService,
  ) {}

  @Post()
  async setKey(@Query('key') key: string, @Query('value') value: string) {
    return this.cacheService.setKey(key, value);
  }

  @Get()
  async getKey(@Query('key') key: string) {
    return this.cacheService.getKey(key);
  }
}
