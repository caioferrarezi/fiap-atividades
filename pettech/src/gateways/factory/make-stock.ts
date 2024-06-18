import { StockGateway } from '../fetch/stock.gateway'
import { IStockGateway } from '../stock.gateway.interface'

export function makeStockGateway(): IStockGateway {
  return new StockGateway()
}
