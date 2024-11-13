import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingModule } from './landing/landing.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encabezado } from './landing/Entities/encabezadoEntity';
import { Review } from './landing/Entities/reviewEntity';
import { Servicio } from './landing/Entities/servicioEntity';

@Module({
  imports: [
    LandingModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "landing_db",
      entities: [Review, Encabezado, Servicio],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
