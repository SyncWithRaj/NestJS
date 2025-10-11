import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomers(): Customer[] /*Here is Customer[] array bcz it returns array*/ {
        return this.customers;
    }

    addCustomer(createCustomerDto: CreateCustomerDto): Customer /*Here is Customer is not array bcz it not returns array*/ {
        const newCustomer: Customer = {
            id:Date.now(),
            ...createCustomerDto,
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
