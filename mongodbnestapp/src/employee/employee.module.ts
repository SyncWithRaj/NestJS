import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './Schemas/employee.schema';
import { Profile, ProfileSchema } from './Schemas/profile.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Employee.name,
        schema: EmployeeSchema
      },
      {
        name:Profile.name,
        schema: ProfileSchema
      },
    ])
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
