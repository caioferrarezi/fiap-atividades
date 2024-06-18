import { Observable, tap } from 'rxjs';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const now = Date.now();
    console.log(request.headers);
    return next
      .handle()
      .pipe(tap(() => console.log(`Request took ${Date.now() - now}ms`)));
  }
}
