// Third party
import { Request, Response } from 'express'

// Project
import { ListProductService } from '@/application/services/product/ListProduct'

class ProductController {
  async list(request: Request, response: Response): Promise<Response> {
    const productListService = await new ListProductService().execute(request)
    return response.status(200).json(productListService)
  }
}

export default ProductController