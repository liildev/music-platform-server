import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors()
    
    await app.listen(process.env.PORT || 3000);
  } catch (e) {
    console.log(e);
  }
}

start();
