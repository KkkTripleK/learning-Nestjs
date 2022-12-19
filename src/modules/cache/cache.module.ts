import { CacheModule, Module } from '@nestjs/common';
import CacheService from './cache.service';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [],
  providers: [CacheService],
  exports: [CacheService],
})
export default class _CacheModule {}
