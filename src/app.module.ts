import { Module } from '@nestjs/common';
import { EncryptionModule } from './encryption/encryption.module';

@Module({
  imports: [EncryptionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
