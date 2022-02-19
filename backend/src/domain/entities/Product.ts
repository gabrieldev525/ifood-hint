import { ProductCategory } from './ProductCategory'

export class Product {
  private id: number
  private name: string
  private image: string

  private categories: Array<ProductCategory>

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

  public getImage(): string {
    return this.image
  }
  public setImage(image: string) {
    this.image = image
  }

  public getCategories(): Array<ProductCategory> {
    return this.categories
  }
  public setCategories(categories: Array<ProductCategory>) {
    this.categories = categories
  }
}