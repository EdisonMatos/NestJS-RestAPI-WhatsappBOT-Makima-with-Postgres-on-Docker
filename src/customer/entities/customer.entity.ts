import { Prisma } from '@prisma/client';

export class Customer implements Prisma.CustomerUncheckedCreateInput{
    id?: string;
    phone: string;
    name: string;
    credit?: number;
    email: string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutCustomerInput;
}
