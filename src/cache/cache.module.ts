import { CacheModule, Module } from '@nestjs/common';
import CacheService from './cache.service';
import * as redisStore from 'cache-manager-ioredis';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const cfg = new ConfigService();
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: cfg.get('REDIS_HOST'),
      port: cfg.get('REDIS_PORT'),
    }),
  ],
  controllers: [],
  providers: [CacheService],
  exports: [CacheService],
})
export default class _CacheModule {}
