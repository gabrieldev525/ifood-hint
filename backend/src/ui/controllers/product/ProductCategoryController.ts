// Third party
import { Request, Response } from 'express'

// Project
import { ProductCategoryListService } from '@/application/services/product/ProductCategoryListService'

class ProductCategoryController {
  async list(request: Request, response: Response): Promise<Response> {
    const productCategoryListService = await new ProductCategoryListService().execute(request)
    return response.status(200).json(productCategoryListService)
  }
}

export default ProductCategoryController