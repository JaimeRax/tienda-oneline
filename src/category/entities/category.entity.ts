import { Entity, Column, PrimaryGeneratedColumn, Double} from "typeorm";

@Entity('tb_category')
export class CategoryEntity {
   @PrimaryGeneratedColumn()
   id: number;
   
   @Column()
   name: string;

}