import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './Entities/reviewEntity';
import { Repository } from 'typeorm';
import { Encabezado } from './Entities/encabezadoEntity';
import { ReviewDto } from './ReviewDto/ReviewDto';
import { EncabezadoDto } from './EncabezadoDto/EncabezadoDto';
import { Servicio } from './Entities/servicioEntity';
import { ServicioDto } from './ServiciosDto/ServiciosDto';

@Injectable()
export class LandingService {


    constructor(
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>,
        @InjectRepository(Encabezado)
        private encabezadoRepository: Repository<Encabezado>,
        @InjectRepository(Servicio)
        private servicioRepository: Repository<Servicio>
    ){}

    //Entidades para la review
    async createReview(createReview: ReviewDto) {
        const review = this.reviewRepository.create(createReview);
        return await this.reviewRepository.save(review);
    }
    
    async findAllReviews() {
        return await this.reviewRepository.find();
    }
    
    async findOneReview(id: number) {
        return await this.reviewRepository.findOneBy({ id });
    }
    
    async updateReview(id: number, updatedReview: ReviewDto) {
        return await this.reviewRepository.update(id, updatedReview);
    }
    
    async removeReview(id: number) {
        return await this.reviewRepository.softDelete(id);
    }

    //Entidades para el encabezado
    async createEncabezado(createEncabezado: EncabezadoDto) {
        const encabezado = this.encabezadoRepository.create(createEncabezado);
        return await this.encabezadoRepository.save(encabezado);
    }
    
    async findAllEncabezado() {
        return await this.encabezadoRepository.find();
    }
    
    async findOneEncabezado(id: number) {
        return await this.encabezadoRepository.findOneBy({ id });
    }
    
    async updateEncabezado(id: number, updatedEncabezado: EncabezadoDto) {
        return await this.encabezadoRepository.update(id, updatedEncabezado);
    }
    
    async removeEncabezado(id: number) {
        return await this.encabezadoRepository.softDelete(id);
    }

    //Entidades para la servicio
    async createServicio(createServicio: ServicioDto) {
        const servicio = this.servicioRepository.create(createServicio);
        return await this.servicioRepository.save(servicio);
    }
    
    async findAllServicios() {
        return await this.servicioRepository.find();
    }
    
    async findOneServicio(id: number) {
        return await this.servicioRepository.findOneBy({ id });
    }
    
    async updateServicio(id: number, updatedServicio: ServicioDto) {
        return await this.servicioRepository.update(id, updatedServicio);
    }
    
    async removeServicio(id: number) {
        return await this.servicioRepository.softDelete(id);
    }
}
