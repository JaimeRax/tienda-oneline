import { Entity, Column, PrimaryGeneratedColumn, Double} from "typeorm";

@Entity('tb_products')
export class ProductEntity {
   @PrimaryGeneratedColumn()
   id: number;
   
   @Column()
   description: string;

   @Column()
   price: Double;

   @Column()
   id_cat: number;
}
