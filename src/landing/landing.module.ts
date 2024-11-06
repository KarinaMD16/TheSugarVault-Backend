import { Module } from '@nestjs/common';
import { LandingController } from './landing.controller';
import { LandingService } from './landing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encabezado } from './Entities/encabezadoEntity';
import { Review } from './Entities/reviewEntity';

@Module({
    imports: [TypeOrmModule.forFeature([Review, Encabezado])],
    controllers: [LandingController],
    providers: [LandingService],
})
export class LandingModule {}
