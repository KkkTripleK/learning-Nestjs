import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { UsersService } from './users.service';
import CacheService from '../../../cache/cache.service';
import { HttpExceptionFilter } from 'src/exceptions/http-exceptions.filter';
import { TestsService } from '../tests/tests.service';
@Controller('users')
@ApiTags('Users')
@UseFilters(new HttpExceptionFilter())
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cacheService: CacheService,
  ) {}

  @Post('setTimeOut')
  async setKey1(@Query('key') key: string, @Query('value') value: string) {
    return this.cacheService.setKey1(key, value);
  }

  @Post('withoutSetTimeOut')
  async setKey2(@Query('key') key: string, @Query('value') value: string) {
    return this.cacheService.setKey2(key, value);
  }

  @Get()
  async getKey(@Query('key') key: string) {
    return this.cacheService.getKey(key);
  }

  @Get('error')
  async getError() {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'ERROR...',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  @Get('test')
  async test() {
    return this.usersService.create();
  }
}
