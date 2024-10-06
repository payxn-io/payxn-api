import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { SolanaService } from './solana.service';

@ApiTags('solana') // Group the Solana APIs under one tag in Swagger
@Controller('solana')
export class SolanaController {
    constructor(private readonly solanaService: SolanaService) {}

    // Endpoint to create a new Solana account
    @Get('create-account')
    createAccount() {
        return this.solanaService.createAccount();
    }

    // Endpoint to get SOL balance for a public key
    @Get('balance/:publicKey')
    async getBalance(@Param('publicKey') publicKey: string) {
        const balance = await this.solanaService.getBalance(publicKey);
        return { balance };
    }

    // Endpoint to airdrop SOL (devnet only)
    @Post('airdrop')
    async airdropSol(@Body('publicKey') publicKey: string, @Body('amount') amount: number) {
        const signature = await this.solanaService.airdropSol(publicKey, amount);
        return { signature };
    }

}
