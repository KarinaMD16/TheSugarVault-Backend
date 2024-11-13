import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LandingService } from './landing.service';
import { ReviewDto } from './ReviewDto/ReviewDto';
import { EncabezadoDto } from './EncabezadoDto/EncabezadoDto';
import { ServicioDto } from './ServiciosDto/ServiciosDto';

@Controller('landing_db')
export class LandingController {

    constructor(private landingService: LandingService) {}

    @Post('review')
    createReview(@Body() createReview: ReviewDto){
        return this.landingService.createReview(createReview);
    }

    @Post('encabezado')
    createEncabezado(@Body() createEncabezado: EncabezadoDto){
        return this.landingService.createEncabezado(createEncabezado);
    }

    // reviews 
    @Get('review')
    findAllReviews(){
        return this.landingService.findAllReviews();
    }

    @Get('review/:id')
    findOneReview(@Param('id') id: number){
        return this.landingService.findOneReview(id);
    }

    @Put('review/:id')
    updateReview(@Param('id') id: number, @Body() updatedReview: ReviewDto){
        return this.landingService.updateReview(id, updatedReview);
    }

    @Delete('review/:id')
    removeReview(@Param('id') id: number){
        return this.landingService.removeReview(id);
    }

    // encabezdo

    @Get('encabezado')
    findAllEncabezados(){
        return this.landingService.findAllEncabezado()
    }

    @Get('encabezado/:id')
    findOneEncabezado(@Param('id') id: number){
        return this.landingService.findOneEncabezado(id);
    }

    @Put('encabezado/:id')
    updateEncabezado(@Param('id') id: number, @Body() updatedEncabezado: EncabezadoDto){
        return this.landingService.updateEncabezado(id, updatedEncabezado)
    }

    @Delete('encabezado/:id')
    removeEncabezado(@Param('id') id: number){
        return this.landingService.removeEncabezado(id);
    }

}
