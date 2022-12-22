import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { URL_Exceptions } from 'src/exceptions/url-exceptions.filter';
import { UsersService } from 'src/modules/v1/users/users.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // Can import other service to middleware
  constructor(private readonly userService: UsersService) {}
  use(req: Request, res: Response, next: NextFunction) {
    for (let i = 0; i < URL_Exceptions.length; i++) {
      console.log(URL_Exceptions[i]);
      if (RegExp(URL_Exceptions[i]).test(req.url)) {
        console.log(req.url);
        return next();
      }
    }
    console.log('<Middleware...>');
    console.log(req.url);
    console.log('<...Middleware>');
    return next();
  }
}
