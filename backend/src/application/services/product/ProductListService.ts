// Project
import Prisma from '@/infra/loaders/Prisma'
import { Request } from 'express'
import { BaseService } from '../BaseService'

export class ProductListService extends BaseService {
  async execute(request: Request): Promise<any> {
    const prisma = new Prisma().client
    const query = request.query
    let filters = Object()

    const fields = {
      name: true,
      image: true,
      categories: true,
      restaurant: true,
    }

    try {
      if(query.category && typeof query.category == 'string')
        filters.categories = {
          some: {
            id: parseInt(query.category)
          }
        }
    } catch(error) {
      return
    }

    let productList
    try {
      if(Object.keys(filters).length > 0)
        productList = await prisma.product.findMany({
          where: filters,
          select: fields
        })
      else
        productList = await prisma.product.findMany({
          select: fields
        })
    } catch(error) {
      return
    }

    return productList
  }
}