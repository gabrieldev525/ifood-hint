// Project
import Prisma from '@/infra/loaders/Prisma'
import { Request } from 'express'
import { BaseService } from '../BaseService'

export class ProductListService extends BaseService {
  async execute(request: Request): Promise<any> {
    const prisma = new Prisma().client
    const productList = await prisma.product.findMany()

    return productList
  }
}