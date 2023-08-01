import { Prisma } from "@prisma/client";

export class Group implements Prisma.GroupUncheckedCreateInput {
  id?: string;
  chatId: string;
  customerId?: string;
  createdAt?: string | Date;
  createdBy?: string;
}
