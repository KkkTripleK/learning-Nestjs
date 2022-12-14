import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { V1Module } from '../v1.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [V1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
