import { join } from 'node:path'

import {
  ClassSerializerInterceptor,
  HttpStatus,
  ValidationPipe,
  VersioningType
} from '@nestjs/common'
import type { ConfigType } from '@nestjs/config'
import { ConfigService } from '@nestjs/config'
import { NestFactory, Reflector } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { appConfig } from '@taskward/config'
import compression from 'compression'
import helmet from 'helmet'

import { AppModule } from '@/modules/app.module'

import { CustomLogger } from './modules/shared/logger/logger.service'
import type { AppEnvConfig } from './shared/configs'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    bodyParser: true,
    bufferLogs: true
  })

  const configService = app.get(ConfigService)
  const appEnvConfig = configService.get<ConfigType<typeof AppEnvConfig>>('app')!

  app.useLogger(new CustomLogger())
  app.use(helmet())
  app.use(compression())

  const corsOriginWhiteList = ['https://bit-ocean.studio']

  if (!appEnvConfig) {
    corsOriginWhiteList.push('http://localhost:*')
  }

  app.enableCors({
    origin: corsOriginWhiteList,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: HttpStatus.NO_CONTENT
  })

  app.setGlobalPrefix('/')

  app.enableVersioning({ type: VersioningType.URI })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      },
      stopAtFirstError: true
    })
  )

  app.useGlobalFilters()

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  app.enableShutdownHooks()

  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/' })
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads' })
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.setViewEngine('pug')

  const config = new DocumentBuilder()
    .setTitle(appConfig.APP_NAME)
    .setDescription(appConfig.DESCRIPTION)
    .setVersion(appEnvConfig.APP_VERSION)
    .addBearerAuth({
      type: 'http',
      description: 'JWT Bearer token authentication',
      name: 'bearer'
    })
    .build()
  await SwaggerModule.loadPluginMetadata(() => import('./metadata'))
  const document = SwaggerModule.createDocument(app, config, {})

  // TODO: Only enable Swagger in DEV env.
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      displayOperationId: false,
      defaultModelsExpandDepth: 3,
      defaultModelExpandDepth: 3,
      docExpansion: 'list',
      filter: true,
      syntaxHighlight: {
        activated: true,
        theme: 'monokai' // ["agate"*, "arta", "monokai", "nord", "obsidian", "tomorrow-night", "idea"]
      },
      tryItOutEnabled: false,
      // maxDisplayedTags: 10,
      displayRequestDuration: true,
      persistAuthorization: true
    }
  })

  await app.listen(appEnvConfig.APP_PORT)
}
bootstrap()
