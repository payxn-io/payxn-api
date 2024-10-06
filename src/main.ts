import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Payxn Solana API')
    .setDescription('API for interacting with the Payxn & Solana blockchain')
    .setVersion('1.0')
    .addTag('solana')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // API docs at /api 

  await app.listen(3000);
}
bootstrap();
