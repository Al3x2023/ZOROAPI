import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/zoro'),
    StudentsModule,
    UsersModule,
    LoginModule,
    ProductsModule,
     ],
  providers: [],
})
export class AppModule {}
