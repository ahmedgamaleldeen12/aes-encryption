import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { EncryptionService } from './encryption.service';
import { EncryptDto, EncryptResponseDto } from './dto/encrypt.dto';

@ApiTags('encryption')
@Controller('encryption')
export class EncryptionController {
  constructor(private readonly encryptionService: EncryptionService) {}

  @Post('encrypt')
  @ApiOperation({
    summary: 'Encrypt plain text using AES-128-CBC',
    description:
      'Encrypts UTF-8 plain text with AES-128-CBC, PKCS#7 padding, a static 16-byte key/IV, and returns the Base64-encoded ciphertext.',
  })
  @ApiOkResponse({ type: EncryptResponseDto })
  @ApiBadRequestResponse({ description: '"text" must be a non-empty string' })
  encrypt(@Body() body: EncryptDto): EncryptResponseDto {
    if (typeof body?.text !== 'string' || body.text.length === 0) {
      throw new BadRequestException('"text" must be a non-empty string');
    }
    return { encrypted: this.encryptionService.encrypt(body.text) };
  }
}
