import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] - [${req.originalUrl}]`)
    next(); // agar ye use nhi kiya toh apko cotroller pe direct nhi kiya jaayega means kaam idhar upar wala function execute hone  bad hi atak jaayega
  }
}
