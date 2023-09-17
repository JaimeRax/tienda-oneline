import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
 
   constructor(
      @InjectRepository(ClientEntity)
      private readonly clientRepository: Repository<ClientEntity>,
    ) {}
  
    async create(createClientDto: CreateClientDto) {
      const newClient = this.clientRepository.create(createClientDto);
      return await this.clientRepository.save(newClient);
    }
  
    async findAll() {
      return await this.clientRepository.find();
    }
  
    async findOne(id: number): Promise<ClientEntity | undefined> {
      return await this.clientRepository.findOne({ where: { id } });
    }
  
    async update(id: number, updateClientDto: UpdateClientDto): Promise<ClientEntity | undefined> {
      const ClientExist = await this.clientRepository.findOne({ where: { id } });
      if (!ClientExist){
        return undefined;
      }
  
      ClientExist.name = updateClientDto.name;
      ClientExist.last_name = updateClientDto.last_name;
      ClientExist.address = updateClientDto.address;

      return await this.clientRepository.save(ClientExist);
    }
  
    async remove(id: number):  Promise<void> {
      await this.clientRepository.delete(id);
    }
}
