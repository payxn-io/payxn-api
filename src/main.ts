import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Solana API')
    .setDescription('API for interacting with the Solana blockchain')
    .setVersion('1.0')
    .addTag('solana')
    .build();

  await app.listen(3000);
}
bootstrap();
