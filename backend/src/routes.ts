// Third party
import { Express } from 'express'
import { productController } from './ui/controllers/product/'


class Routes {
  private _app: Express

  constructor(app: Express) {
    this._app = app
  }

  init() {
    this._app.get('/products', (req, res) => {
      return productController.list(req, res)
    })
  }
}

export default Routes