import { Module } from '@nestjs/common';
import { LandingController } from './landing.controller';
import { LandingService } from './landing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encabezado } from './Entities/encabezadoEntity';
import { Review } from './Entities/reviewEntity';
import { Servicio } from './Entities/servicioEntity';

@Module({
    imports: [TypeOrmModule.forFeature([Review, Encabezado, Servicio])],
    controllers: [LandingController],
    providers: [LandingService],
})
export class LandingModule {}
