import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './modules/users/user.controller';
import { UsersModule } from './modules/users/user.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}