import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/configs/config.typeOrm';
import { Role } from './role.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Role]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RoleModule {}
