export interface IProductStock {
  name: string
  quantity: number
  relationId: string
}

export interface IStockGateway {
  createProductInStock(product: IProductStock, token: string): Promise<void>
}
