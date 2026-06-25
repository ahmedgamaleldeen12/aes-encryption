import { ApiProperty } from '@nestjs/swagger';

export class EncryptDto {
  @ApiProperty({
    description: 'Plain text to encrypt',
    example: 'Hello, World!',
  })
  text: string;
}

export class EncryptResponseDto {
  @ApiProperty({
    description: 'AES-128-CBC encrypted ciphertext, Base64 encoded',
    example: 'FpRFKe/3OCGv63eI3L1d0Q==',
  })
  encrypted: string;
}
