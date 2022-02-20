// Third party
import { Express } from 'express'
import {
  productController,
  productCategoryController
} from './ui/controllers/product/'
import { restaurantController } from './ui/controllers/restaurant'


class Routes {
  private _app: Express

  constructor(app: Express) {
    this._app = app
  }

  init() {
    this.productRoutes()
    this.restaurantRoutes()
  }

  productRoutes() {
    this._app.get('/products', (req, res) => {
      return productController.list(req, res)
    })
    this._app.get('/products/:id', (req, res) => {
      return productController.detail(req, res)
    })
    this._app.get('/product-categories', (req, res) => {
      return productCategoryController.list(req, res)
    })
  }

  restaurantRoutes() {
    this._app.get('/restaurants', (req, res) => {
      return restaurantController.list(req, res)
    })
    this._app.get('/restaurants/:id', (req, res) => {
      return restaurantController.detail(req, res)
    })
  }
}

export default Routes