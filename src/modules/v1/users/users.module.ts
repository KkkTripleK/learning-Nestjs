import { Module } from '@nestjs/common';
import CacheModule from '../../../cache/cache.module';
import { TestsModule } from '../tests/tests.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [CacheModule, TestsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
