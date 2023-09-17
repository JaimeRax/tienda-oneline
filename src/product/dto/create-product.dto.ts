import { Double } from "typeorm";

export class CreateProductDto {
   id: number;
   description: string;
   price: Double;
   id_cat: number;
}