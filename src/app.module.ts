import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingModule } from './landing/landing.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encabezado } from './landing/Entities/encabezadoEntity';
import { Review } from './landing/Entities/reviewEntity';

@Module({
  imports: [
    LandingModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "12345",
      database: "landing_db",
      entities: [Review, Encabezado],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
