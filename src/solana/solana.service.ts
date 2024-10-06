import { Injectable } from '@nestjs/common';
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL, Keypair } from '@solana/web3.js';

@Injectable()
export class SolanaService {
    private connection: Connection;

    constructor() {
        // Establish a connection to the Solana devnet
        this.connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    }

    // Example: Create a Solana account
    createAccount() {
        const keypair = Keypair.generate();
        return {
        publicKey: keypair.publicKey.toString(),
        secretKey: keypair.secretKey.toString(),
        };
    }

    // Example: Get SOL balance for a given public key
    async getBalance(publicKeyString: string) {
        const publicKey = new PublicKey(publicKeyString);
        const balance = await this.connection.getBalance(publicKey);
        return balance / LAMPORTS_PER_SOL; // Convert lamports to SOL
    }

    // Example: Airdrop SOL to a public key (for development purposes)
    async airdropSol(publicKeyString: string, amountInSol: number) {
        const publicKey = new PublicKey(publicKeyString);
        const signature = await this.connection.requestAirdrop(publicKey, amountInSol * LAMPORTS_PER_SOL);
        await this.connection.confirmTransaction(signature);
        return signature;
    }
}
