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

    @Post('servicio')
    createServicio(@Body() createServicio: ServicioDto){
        return this.landingService.createServicio(createServicio);
    }

    @Get('review')
    findAllReviews(){
        return this.landingService.findAllReviews();
    }

    @Get('encabezado')
    findAllEncabezados(){
        return this.landingService.findAllEncabezado()
    }

    @Get('servicio')
    findAllServicios(){
        return this.landingService.findAllServicios();
    }

    @Get('review/:id')
    findOneReview(@Param('id') id: number){
        return this.landingService.findOneReview(id);
    }

    @Get('encabezado/:id')
    findOneEncabezado(@Param('id') id: number){
        return this.landingService.findOneEncabezado(id);
    }

    @Get('servicio/:id')
    findOneServicio(@Param('id') id: number){
        return this.landingService.findOneServicio(id);
    }

    @Put('review/:id')
    updateReview(@Param('id') id: number, @Body() updatedReview: ReviewDto){
        return this.landingService.updateReview(id, updatedReview);
    }

    @Put('encabezado/:id')
    updateEncabezado(@Param('id') id: number, @Body() updatedEncabezado: EncabezadoDto){
        return this.landingService.updateEncabezado(id, updatedEncabezado)
    }

    @Put('servicio/:id')
    updateServicio(@Param('id') id: number, @Body() updatedServicio: ServicioDto){
        return this.landingService.updateServicio(id, updatedServicio);
    }

    @Delete('review/:id')
    removeReview(@Param('id') id: number){
        return this.landingService.removeReview(id);
    }

    @Delete('encabezado/:id')
    removeEncabezado(@Param('id') id: number){
        return this.landingService.removeEncabezado(id);
    }

    @Delete('servicio/:id')
    removeServicio(@Param('id') id: number){
        return this.landingService.removeServicio(id);
    }





}
