import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { URL_Exceptions } from 'src/exceptions/url-exceptions.filter';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // Can import other service to middleware
  // constructor() {}
  use(req: Request, res: Response, next: NextFunction) {
    for (let i = 0; i < URL_Exceptions.length; i++) {
      if (RegExp(URL_Exceptions[i]).test(req.url)) {
        return next();
      }
    }
    return next();
  }
}
