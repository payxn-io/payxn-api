import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SolanaService } from './solana.service';

@Controller('solana')
export class SolanaController {
    constructor(private readonly solanaService: SolanaService) {}

    // Endpoint to create a new Solana account
    @Get('create-account')
    createAccount() {
        return this.solanaService.createAccount();
    }

}
