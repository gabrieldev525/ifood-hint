// Local
import { Product } from './Product'

export class ProductCategory {
  private id: number
  private name: string
  private products: Array<Product>

  public getId(): number {
    return this.id
  }
  public setId(id: number) {
    this.id = id
  }

  public getName(): string {
    return this.name
  }
  public setName(name: string) {
    this.name = name
  }

  public getProducts(): Array<Product> {
    return this.products
  }
  public setProducts(products: Array<Product>) {
    this.products = products
  }
}