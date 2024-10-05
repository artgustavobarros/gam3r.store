import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { PrismaOrder } from './order.prisma'
import { Order } from '@gstore/core'

@Controller('orders')
export class OrderController {

    constructor(private readonly repo: PrismaOrder){}

    @Get()
    async fetchOrders(){
        return this.repo.getOrders()
    }

    @Get(':id')
    async getOrdersById(@Param('id') id: string){
        return this.repo.getById(Number(id))
    }

    @Post()
    async save(@Body() order: Order){
        return this.repo.save(order)
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        return this.repo.delete(Number(id))
    }
}
