import { Injectable } from '@nestjs/common';
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL, Keypair } from '@solana/web3.js';

@Injectable()
export class SolanaService {
    private connection: Connection;

    constructor() {
        // Establish a connection to the Solana devnet
        this.connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
      }
}
