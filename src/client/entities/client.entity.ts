import { Entity, Column, PrimaryGeneratedColumn, Double} from "typeorm";

@Entity('tb_client')
export class ClientEntity {
   @PrimaryGeneratedColumn()
   id: number;
   
   @Column()
   name: string;

   @Column()
   last_name: string;

   @Column()
   address: string;
}
