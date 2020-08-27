import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';

@Controller('admin/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get(':id')
  find(@Param('id') id: number) {
    return this.productService.find(id);
  }
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
