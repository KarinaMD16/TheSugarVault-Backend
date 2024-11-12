import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export class Review {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    reviewerName: string
  
    @Column()
    reviewerPicture: string;
  
    @Column()
    reviewTitle: string;
  
    @Column()
    reviewDescription: string;

    @Column()
    reviewDate: string;

    @DeleteDateColumn()
    deletedAt: Date;

  }