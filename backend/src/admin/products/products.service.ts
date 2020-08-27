import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }
  find(id: number) {
    return this.productRepository.findOne(id);
  }

  async create(input: CreateProductDto) {
    const p = this.productRepository.create({
      name: input.name,
      price: input.price,
    });
    await this.productRepository.save(p);
  }

  async update(id: number, input: UpdateProductDto) {
    const p = await this.productRepository.findOne(id);
    p.name = input.name;
    p.price = input.price;
    await this.productRepository.save(p);
    return;
  }

  async delete(id: number) {
    await this.productRepository.delete(id);
  }
}
