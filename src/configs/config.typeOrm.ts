import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

const cfg = new ConfigService();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: cfg.get('TYPEORM_HOST'),
  port: cfg.get('TYPEORM_PORT'),
  username: cfg.get('TYPEORM_USERNAME'),
  password: cfg.get('TYPEORM_PASSWORD'),
  database: cfg.get('TYPEORM_DATABASE'),
  entities: [`${__dirname}/../modules/**/*.entity{.js,.ts}`],
  synchronize: true,
};
