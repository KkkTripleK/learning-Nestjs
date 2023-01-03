import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export default class CacheService {
  redis = new Redis();

  async setKey1(key: string, value: string) {
    setTimeout(() => {
      console.log(`Set the values with key: ${key} and value ${value}`);
      return this.redis.set(key, value);
    }, 30000);
  }

  async setKey2(key: string, value: string) {
    console.log(`Set the values with key: ${key} and value ${value}`);
    return this.redis.set(key, value);
  }

  async getKey(key: string) {
    return this.redis.get(key);
  }

  async removeAll() {
    return this.redis.flushall();
  }
}
