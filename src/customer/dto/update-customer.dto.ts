import { CreateCustomerDto } from "./create-customer.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateCustomersDto extends PartialType(CreateCustomerDto) {

}