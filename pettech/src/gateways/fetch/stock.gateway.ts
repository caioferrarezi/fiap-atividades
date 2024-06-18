import { IProductStock, IStockGateway } from '../stock.gateway.interface'

export class StockGateway implements IStockGateway {
  async createProductInStock(
    product: IProductStock,
    token: string,
  ): Promise<void> {
    const url = `${process.env.STOCK_API_URL}/stock`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(product),
    })
    if (!response.ok)
      throw new Error(
        `Failed to create product in stock with status ${response.status}`,
      )
  }
}
