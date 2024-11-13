import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  servicesName: string;

  @Column()
  servicesPicture: string;

  @Column()
  servicesDescription: string;

  @Column({nullable: true })
  servicesParagraph: string;

  @DeleteDateColumn()
  deletedAt: Date;

}