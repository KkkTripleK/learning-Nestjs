import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Demo nestjs example')
    .setDescription('The Nestjs API description')
    .setVersion('1.0')
    .addTag('DEMO')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    console.log(
      'Server is running on port 3000, link: http://localhost:3000/api ',
    );
  });
}
bootstrap();
