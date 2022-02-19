// Third party
import { Request, Response } from 'express'

// Project
import { ProductListService } from '@/application/services/product/ProductListService'

class ProductController {
  async list(request: Request, response: Response): Promise<Response> {
    const productListService = await new ProductListService().execute(request)
    return response.status(200).json(productListService)
  }
}

export default ProductController