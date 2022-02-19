// Project
import Prisma from '@/infra/loaders/Prisma'
import { Request } from 'express'
import { BaseService } from '../BaseService'

export class ProductDetailService extends BaseService {
  async execute(request: Request): Promise<any> {
    const prisma = new Prisma().client
    let id: string | number = request.params.id

    if(!id)
      return

    try {
      id = parseInt(id)
    } catch(error) {
      return
    }

    let productDetail
    try {
      productDetail = await prisma.product.findFirst({
        where: {
          id
        }
      })
    } catch(error) {
      return
    }

    return productDetail
  }
}