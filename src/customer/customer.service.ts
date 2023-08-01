import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaService } from '../prisma/prisma.service';
import { GetCustomerDto } from './dto/get-customer.dto';
import { UpdateCustomersDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateCustomerDto) {
    const { phone, email } = data;

    try {
      const foundCustomer = await this.prisma.customer.findFirst({
        where: {
          phone,
          email,
        },
      });

      if (foundCustomer) {
        Logger.error('Customer already created', '', 'CustomerService', true);
        throw new ConflictException(`Customer already created`);
      }

      const createdUser = await this.prisma.customer.create({
        data,
      });

      return createdUser;
    } catch (error) {
      Logger.error(error, '', 'CustomerService', true);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const foundCustomer = await this.prisma.customer.findFirst({
        where: {
          id,
        },
      });

      if (!foundCustomer) {
        Logger.error('Customer not found', '', 'CustomerService', true);
        throw new NotFoundException('Customer not found');
      }
      return foundCustomer;
    } catch (error) {
      Logger.error(error, '', 'CustomerService', true);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.customer.findMany() as unknown as GetCustomerDto[];
  }

  async update(id: string, data: UpdateCustomersDto) {
    await this.findOne(id);

    try {
      return await this.prisma.customer.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      Logger.error(error, '', 'CustomerService', true);
      throw error;
    }
  }

  async deleteOne(id: string) {
    try {
      const foundCustomer = await this.prisma.customer.findFirst({
        where: {
          id,
        },
      });

      if (!foundCustomer) {
        Logger.error('Customer not found', '', 'CustomerService', true);
        throw new NotFoundException('Customer not found');
      }

      await this.prisma.customer.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      Logger.error(error, '', 'CustomerService', true);
      throw error;
    }
  }
}
