import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { CategoryModule } from './category/category.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ClientModule, CategoryModule],
})
export class AppModule {}
