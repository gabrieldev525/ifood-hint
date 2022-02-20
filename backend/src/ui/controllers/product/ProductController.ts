// Third party
import { Request, Response } from 'express'

// Project
import { ProductListService } from '@/application/services/product/ProductListService'
import { ProductDetailService } from '@/application/services/product/ProductDetailService'

class ProductController {
  async list(request: Request, response: Response): Promise<Response> {
    const productListService = await new ProductListService().execute(request)
    if(!productListService)
      return response.status(400).json({ message: 'Could not proccess the request' })

    return response.status(200).json(productListService)
  }

  async detail(request: Request, response: Response): Promise<Response> {
    const productDetailService = await new ProductDetailService().execute(request)

    if(!productDetailService)
      return response.status(400).json({ message: 'Could not proccess the request' })

    return response.status(200).json(productDetailService)
  }
}

export default ProductController