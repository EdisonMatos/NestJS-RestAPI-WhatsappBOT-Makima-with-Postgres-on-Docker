import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {

  }
  async create(data: CreateGroupDto) {
    const { chatId, customerId } = data
    try {
      const foundCustomer = await this.prisma.customer.findFirst({
        where: {
          id: customerId
        }
      })

      if (!foundCustomer) {
        Logger.error('Customer not found', '', 'GroupService', true)
        throw new NotFoundException('Customer not found')
      }

      const foundGroup = await this.prisma.group.findFirst({
        where: {
          chatId
        }
      })

      if (foundGroup) {
        Logger.error('Group already created', '', 'GroupService', true)
        throw new ConflictException('Group already created')
      }

      const group = await this.prisma.group.create({
        data
      })

      return group

    } catch (error) {
      Logger.error(error, '', 'CustomerService', true)
      throw error
    }
  }

  findAll() {
    return this.prisma.group.findMany();
  }

  async deleteOne(id: string) {
    try {
      const foundGroup = await this.prisma.group.findFirst({
        where: {
          id
        }
      })

      if (!foundGroup) {
        Logger.error('Group not found', '', 'GroupService', true)
        throw new NotFoundException('Group not found')
      }

      await this.prisma.group.delete({
        where: {
          id
        }
      })
    } catch (error) {
      Logger.error(error, '', 'GroupService', true)
      throw error
    }
  }

}
