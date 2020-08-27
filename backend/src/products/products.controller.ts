import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return;
  }
  @Get(':id')
  find(@Param('id') id: string) {
    return;
  }
}
