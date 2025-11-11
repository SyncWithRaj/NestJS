import { Controller, Post, Body, Get, Param, Put, Patch, Delete, Query, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.entity';
import { SupabaseAuthGuard } from 'src/auth/supabase-auth/supabase-auth.guard';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @Post()
  async create(@Body() employeeData: Partial<Employee>): Promise<Employee> {
    return this.employeesService.create(employeeData);
  }

  @UseGuards(SupabaseAuthGuard)
  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get('search')
  async searchEmployees(@Query('name') name?: string, @Query('department') department?: string): Promise<Employee[]> {
    return this.employeesService.search({ name, department })
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
