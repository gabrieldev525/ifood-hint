import { PrismaClient } from '@prisma/client';

class Prisma {
  client: PrismaClient

  constructor() {
    this.client = new PrismaClient()
  }
}
export default Prisma