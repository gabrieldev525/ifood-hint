
import { Express as IExpress } from 'express'

class Express {
  private _app: IExpress = null

  constructor(app: IExpress) {
    this._app = app
  }

  init() {
    const port = process.env.PORT || 3001
    this._app?.listen(port, () => console.log(`Your application is running on port ${port}`))
  }
}

export default Express