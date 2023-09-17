import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(newCategory);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<CategoryEntity | undefined> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity | undefined> {
    const CategoryExist = await this.categoryRepository.findOne({ where: { id } });
    if (!CategoryExist){
      return undefined;
    }

    CategoryExist.name = updateCategoryDto.name;
 

    return await this.categoryRepository.save(CategoryExist);
  }

  async remove(id: number):  Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
