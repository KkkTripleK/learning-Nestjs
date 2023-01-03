/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import * as moment from 'moment';
import { AppModule } from './modules/app/app.module';


config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cfg = new ConfigService();
  const port = cfg.get('PORT');
  const config = new DocumentBuilder()
    .setTitle('Demo project nestjs')
    .setDescription('Create by HoaNK')
    .setVersion('1.0')
    .addTag('DEMO')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    console.log(
      `Server is running on port ${port}, link: http://localhost:${port}/api `,
    );
  });
}
bootstrap();
