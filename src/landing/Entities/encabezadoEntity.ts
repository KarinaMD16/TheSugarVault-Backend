import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export class Encabezado {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    titulo: string;
  
    @Column()
    imagen: string;
  
    @Column()
    descripcion: string;
  
    @DeleteDateColumn()
    deletedAt: Date;
    
  }
  