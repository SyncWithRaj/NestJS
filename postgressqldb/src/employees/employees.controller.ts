import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @Post()
  async create(@Body() employeeData: Partial<Employee>): Promise<Employee> {
    return this.employeesService.create(employeeData);
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeesService.findOne(Number(id));
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') id: number,
    @Body() body: Partial<Employee>,
  ): Promise<Employee> {
    return this.employeesService.update(id, body);
  }

  @Delete(':id')
  async deleteEmployee(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    return this.employeesService.delete(id)
  }
}
