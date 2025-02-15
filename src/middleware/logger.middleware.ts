import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log(
      `Ejecutando el metodo ${req.method} en la ruta ${req.url} | fecha y hora ${new Date()}`,
    );
    next();
  }
}
