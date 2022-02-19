// Third party
import { Request, Response } from 'express'

// Project
import { RestaurantListService } from '@/application/services/restaurant/RestaurantListService'
import { RestaurantDetailService } from '@/application/services/restaurant/RestaurantDetailService'

class RestaurantController {
  async list(request: Request, response: Response): Promise<Response> {
    const restaurantListService = await new RestaurantListService().execute(request)
    return response.status(200).json(restaurantListService)
  }

  async detail(request: Request, response: Response): Promise<Response> {
    const restaurantDetailService = await new RestaurantDetailService().execute(request)
    if(!restaurantDetailService)
      return response.status(400).json({
        message: 'Could not proccess the request'
      })

    return response.status(200).json(restaurantDetailService)
  }
}

export default RestaurantController