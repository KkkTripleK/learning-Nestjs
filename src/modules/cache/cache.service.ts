import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export default class CacheService {
  redis = new Redis();

  async setKey(key: string, values: string) {
    return this.redis.set(key, values);
  }

  async getKey(key: string) {
    return this.redis.get(key);
  }

  async removeAll() {
    return this.redis.flushall();
  }
}
