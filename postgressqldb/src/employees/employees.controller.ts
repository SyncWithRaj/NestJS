import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees.entity';
import { Repository } from 'typeorm';

@Controller('employees')
export class EmployeesController {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) { }

  @Post()
  async create(@Body() employeeData: Partial<Employee>): Promise<Employee> {
    const employee = this.employeeRepository.create(employeeData);
    return await this.employeeRepository.save(employee);
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Employee | null> {
    return this.employeeRepository.findOne({ where: { id } });
  }
}