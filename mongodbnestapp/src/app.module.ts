import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  MongooseModule.forRoot(process.env.MONGO_URI!),
    StudentModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
