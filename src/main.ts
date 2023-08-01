import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
const swStats = require('swagger-stats');
const actuator = require('express-actuator')

const DEFAULT_API_PORT = 3000
const loggerInstance = new Logger('Bootstrap')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  app.use(actuator())

  const config = new DocumentBuilder()
    .setTitle('Makima Backoffice API')
    .setDescription('The Makima Backoffice Main API')
    .setVersion(process.env.npm_package_version)
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger', app, document);

  app.use(swStats.getMiddleware({ swaggerSpec: document }));
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.API_PORT || DEFAULT_API_PORT);
  loggerInstance.log(`Makima Backoffice API, Application is running on: ${await app.getUrl()}`)
}

bootstrap().catch((error) => loggerInstance.error(error))
