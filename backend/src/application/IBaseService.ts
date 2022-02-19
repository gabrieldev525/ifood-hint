// Third party
import { Request } from 'express'

export interface IBaseService {
  execute: (request: Request) => Promise<any>
}