// Project
import Prisma from '@/infra/loaders/Prisma'
import { Request } from 'express'
import { BaseService } from '../BaseService'

export class RestaurantDetailService extends BaseService {
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

    const restaurantList = await prisma.restaurant.findFirst({
      where: {
        id
      }
    })

    return restaurantList
  }
}