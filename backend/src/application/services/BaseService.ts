// Project
import NotImplementedError from '@/infra/exceptions/NotImplementedError'
import { Request } from 'express'
import { IBaseService } from '../IBaseService'

export class BaseService implements IBaseService {
  async execute(request: Request): Promise<any> {
    throw new NotImplementedError()
  }
}