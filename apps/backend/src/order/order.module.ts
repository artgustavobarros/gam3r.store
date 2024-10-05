import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { PrismaOrder } from './order.prisma';
import { PrismaProvider } from 'src/db/prisma.provider';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [OrderController],
  providers: [PrismaOrder],
  imports: [DbModule]
})
export class OrderModule {}
