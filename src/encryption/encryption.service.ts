import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv } from 'crypto';

const ALGORITHM = 'aes-128-cbc';
const KEY = Buffer.from('1234567890123456', 'utf8');
const IV = Buffer.from('6543210987654321', 'utf8');

@Injectable()
export class EncryptionService {
  encrypt(plainText: string): string {
    const cipher = createCipheriv(ALGORITHM, KEY, IV);
    const encrypted = Buffer.concat([
      cipher.update(plainText, 'utf8'),
      cipher.final(),
    ]);
    return encrypted.toString('base64');
  }

  decrypt(cipherText: string): string {
    const decipher = createDecipheriv(ALGORITHM, KEY, IV);
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(cipherText, 'base64')),
      decipher.final(),
    ]);
    return decrypted.toString('utf8');
  }
}
