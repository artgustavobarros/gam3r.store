/* eslint-disable no-useless-constructor */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ProductRepository } from './product.repository'
import { Product } from '@prisma/client'

@Controller('products')
export class ProductController {
  constructor(private readonly repo: ProductRepository) {}

  @Post()
  save(@Body() product: Product): Promise<void> {
    return this.repo.save(product)
  }

  @Get()
  fecth(): Promise<Product[]> {
    return this.repo.fetch()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Product> {
    return this.repo.getById(Number(id))
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.repo.delete(Number(id))
  }
}
