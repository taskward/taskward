import { join } from 'node:path'

import { ClassSerializerInterceptor, HttpStatus, VersioningType } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { appConfig } from '@taskward/config'
import compression from 'compression'
import helmet from 'helmet'

import { AppModule } from '@/modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    bodyParser: true,
    bufferLogs: true
    // logger: false
  })

  app.use(helmet())
  app.use(compression())

  const corsOriginWhiteList = ['https://bit-ocean.studio']

  // TODO: Enable CORS localhost in STAGING env.
  corsOriginWhiteList.push('http://localhost:*')

  app.enableCors({
    origin: corsOriginWhiteList,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: HttpStatus.NO_CONTENT
  })

  app.setGlobalPrefix('/')

  app.enableVersioning({ type: VersioningType.URI })

  app.useGlobalPipes()

  app.useGlobalFilters()

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  app.enableShutdownHooks()

  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/' })
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads' })
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.setViewEngine('pug')

  const config = new DocumentBuilder()
    .setTitle(appConfig.appName)
    .setDescription(appConfig.description)
    .setVersion('1.0')
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

  await app.listen(3000)
}
bootstrap()
