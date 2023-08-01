import { Customer } from "../entities/customer.entity";
import { ApiProperty } from '@nestjs/swagger';

export class GetCustomerDto extends Customer{

    @ApiProperty({
        description: 'Customer id',
        default: "38b8a577-8e3d-49db-b01c-988d9b4e47e2",
        type: String
    })
    id: string;

    @ApiProperty({
        description: 'Customer phone number',
        default: "557388015449",
        type: String
    })
    phone: string;

    @ApiProperty({
        description: 'Customer name',
        default: "Gabriel Queiroz",
        type: String
    })
    name: string;

    @ApiProperty({
        description: 'Number of groups where customer can insert Makima in',
        default: 1,
        type: Number
    })
    credit?: number;

    @ApiProperty({
        description: 'Customer email',
        default: "gabrielqueiroz@hotmail.com",
        type: String
    })
    email: string;
}
