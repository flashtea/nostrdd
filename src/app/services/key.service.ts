import { Injectable } from '@angular/core';
import { generatePrivateKey, getPublicKey } from 'nostr-tools';
import * as secp256k1 from '@noble/secp256k1'

@Injectable({
  providedIn: 'root'
})
export class KeyManagementService {
  private PRIVATE_KEY = 'privKey';

  constructor() { }

  getPrivKey(): string {
    return localStorage.getItem(this.PRIVATE_KEY) || '';
  }

  setPrivKey(privkey: string): void {
    localStorage.setItem(this.PRIVATE_KEY, privkey);
  }

  removePrivKey(): void {
    localStorage.removeItem(this.PRIVATE_KEY);
  }

  isValidPrivateKey(privKey: string) {
    return secp256k1.utils.isValidPrivateKey(privKey)
  }

  generatePrivateKey(): string {
    return generatePrivateKey(); // `sk` is a hex string
  }

  getPubKey(): string {
    return getPublicKey(this.getPrivKey());
  }
}
