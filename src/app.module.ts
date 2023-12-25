import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { collector } from './entity/user.entity';
import { Admin } from './entity/user.entity';
import { Land } from './entity/land.entity';
import { Bill } from './entity/bill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'waterwatch.db',
      entities: [User,collector,Admin,Land,Bill],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
