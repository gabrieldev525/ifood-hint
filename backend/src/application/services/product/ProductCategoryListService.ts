// Project
import Prisma from '@/infra/loaders/Prisma'
import { Request } from 'express'
import { BaseService } from '../BaseService'

export class ProductCategoryListService extends BaseService {
  async execute(request: Request): Promise<any> {
    const prisma = new Prisma().client
    const categoryList = await prisma.productCategory.findMany()

    return categoryList
  }
}