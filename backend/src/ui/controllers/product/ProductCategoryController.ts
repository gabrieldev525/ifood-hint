// Third party
import { Request, Response } from 'express'

// Project
import { ListProductCategoryService } from '@/application/services/product/ListProductCategory'

class ProductCategoryController {
  async list(request: Request, response: Response): Promise<Response> {
    const productCategoryListService = await new ListProductCategoryService().execute(request)
    return response.status(200).json(productCategoryListService)
  }
}

export default ProductCategoryController