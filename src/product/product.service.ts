import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return await this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<ProductEntity | undefined> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<ProductEntity | undefined> {
    const productExist = await this.productRepository.findOne({ where: { id } });
    if (!productExist){
      return undefined;
    }

    productExist.description = updateProductDto.description;
    productExist.price = updateProductDto.price;

    return await this.productRepository.save(productExist);
  }

  async remove(id: number):  Promise<void> {
    await this.productRepository.delete(id);
  }
}


