/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheModule } from '@nestjs/cache-manager';

// Entidades
import { Linha } from './Modules/Entity/Linha';
import { LinhaService } from './Modules/Service/Linha';
import { LinhaController } from './Modules/Controller/Linha';

import { UltimaPosicao } from './Modules/Entity/UltimaPosicao';
import { UltimaPosicaoService } from './Modules/Service/UltimaPosicao';
import { UltimaPosicaoController } from './Modules/Controller/UltimaPosicao';

import { Parada } from './Modules/Entity/Parada';
import { ParadaService } from './Modules/Service/Parada';
import { ParadaController } from './Modules/Controller/Parada';

import { Horaria } from './Modules/Entity/Horario';
import { HorariaService } from './Modules/Service/Horaria';
import { HorarioController } from './Modules/Controller/Horaria';

import { PercursoEntity } from './Modules/Entity/Percurso';
import { PercursoService } from './Modules/Service/Percurso';
import { PercursoController } from './Modules/Controller/Percurso';

import { OperadoraEntity } from './Modules/Entity/Operadora';
import { OperadoraSService } from './Modules/Service/Operadora';
import { OperadoraCController } from './Modules/Controller/Operadora';

// Serviços responsáveis por executar os SQL das tabelas
import { LinhaRepository } from './Modules/Repository/Linha';
import { OperadoraRepository } from './Modules/Repository/Operadora';
import { PercursoRepository } from './Modules/Repository/Percurso';
import { UltimaPosicaoRepository } from './Modules/Repository/UltimaPosicao';
import { HorariosRepository } from './Modules/Repository/Horario';
import { CacheContentInterceptor } from './Modules/Interceptor/CacheContent';
import configuration from './Modules/Config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '192.168.1.122',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '123456',
      database: process.env.DB_DATABASE || 'postgres',
      entities: [Linha, Parada, OperadoraEntity, PercursoEntity, UltimaPosicao, Horaria],
      synchronize: false,
      logging: false,
    }),
    TypeOrmModule.forFeature([Linha, Parada, OperadoraEntity, PercursoEntity, UltimaPosicao]),
    HttpModule,
    CacheModule.register({
      ttl: 86400,
      isGlobal: true,
    }),
  ],
  providers: [
    LinhaService, 
    OperadoraSService, 
    ParadaService, 
    PercursoService,
    UltimaPosicaoService,
    LinhaRepository,
    OperadoraRepository,
    PercursoRepository,
    UltimaPosicaoRepository,
    HorariaService,
    HorariosRepository,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheContentInterceptor,
    },
  ],
  controllers: [
    LinhaController,
    ParadaController,
    OperadoraCController,
    PercursoController,
    UltimaPosicaoController,
    HorarioController
  ],
})
export class AppModule {}
