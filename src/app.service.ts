import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProgramId(): string {
    return 'payxnTDMsNZzEX3Q6LW58aAkrR9psLSpgoCb9ZsC7S4';
  }
}
