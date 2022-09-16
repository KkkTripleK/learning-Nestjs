import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Conheo12',
  database: 'local-db',
  entities: [`${__dirname}/../modules/**/*.entity{.js,.ts}`],
  synchronize: true,
};
