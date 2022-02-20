// Project
import Prisma from '@/infra/loaders/Prisma'
import { Request } from 'express'
import { BaseService } from '../BaseService'

export class RestaurantListService extends BaseService {
  async execute(request: Request): Promise<any> {
    const prisma = new Prisma().client
    const restaurantList = await prisma.restaurant.findMany()

    return restaurantList
  }
}