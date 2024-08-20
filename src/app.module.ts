import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
