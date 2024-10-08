import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { SolanaService } from './solana.service';

@ApiTags('solana') // Group the Solana APIs under one tag in Swagger
@Controller('payxn')
export class SolanaController {
    constructor(private readonly solanaService: SolanaService) {}

    
    // Endpoint to create a new Solana account
    @ApiOperation({ summary: 'Create a new Payxn account' })
    @Get('v1/create-account')
    createAccount() {
        return this.solanaService.createAccount();
    }

    // Endpoint to airdrop SOL (devnet only)
    @ApiOperation({ summary: 'Airdrop SOL to a public key' })
    @ApiBody({ schema: { example: { publicKey: 'YourPublicKey', amount: 1 } } })
    @Post('v1/airdrop')
    async airdropSol(@Body('publicKey') publicKey: string, @Body('amount') amount: number) {
        const signature = await this.solanaService.airdropSol(publicKey, amount);
        return { signature };
    }

    // Endpoint to get SOL balance for a public key
    @ApiOperation({ summary: 'Get SOL balance of a public key' })
    @ApiParam({ name: 'publicKey', description: 'Public key of the account' })
    @Get('v1/balance/:publicKey')
    async getBalance(@Param('publicKey') publicKey: string) {
        const balance = await this.solanaService.getBalance(publicKey);
        return { balance };
    }

    

}
