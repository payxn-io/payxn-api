import { Module } from '@nestjs/common';
import { SolanaService } from './solana.service';

@Module({
  providers: [SolanaService]
})
export class SolanaModule {}
