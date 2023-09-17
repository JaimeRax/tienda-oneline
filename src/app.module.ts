import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaModule } from './tienda/tienda.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TiendaModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
