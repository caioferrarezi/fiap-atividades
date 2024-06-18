import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { z } from 'zod';
import { ZodValidationPipe } from 'src/shared/pipe/zod-validation.pipe';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { LoggingInterceptor } from 'src/shared/interceptors/logging.interceptor';

const createStockSchema = z.object({
  name: z.string(),
  quantity: z.coerce.number(),
  relationId: z.string(),
});

const updateStockSchema = z.object({
  quantity: z.coerce.number(),
});

type CreateStockSchema = z.infer<typeof createStockSchema>;
type UpdateStockSchema = z.infer<typeof updateStockSchema>;

@UseInterceptors(LoggingInterceptor)
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async index(@Query('limit') limit: number, @Query('page') page: number) {
    return this.stockService.getAllStock(limit, page);
  }

  @Get(':id')
  async show(@Param('id') productId: string) {
    return this.stockService.getStock(productId);
  }

  @UseGuards(AuthGuard)
  @UsePipes(new ZodValidationPipe(createStockSchema))
  @Post()
  async create(@Body() { name, quantity, relationId }: CreateStockSchema) {
    return this.stockService.createStock({ name, quantity, relationId });
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id') productId: string,
    @Body(new ZodValidationPipe(updateStockSchema))
    { quantity }: UpdateStockSchema,
  ) {
    return this.stockService.updateStock(productId, quantity);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') productId: string) {
    return this.stockService.deleteStock(productId);
  }
}
