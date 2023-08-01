import { IsString, IsUUID } from "class-validator";
import { Group } from "../entities/group.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDto extends Group {

  @IsString()
  @ApiProperty({
    description: 'Group id',
    default: "557388015449-1234567890@g.us",
    type: String
})
  chatId: string;

  @IsUUID()
  @ApiProperty({
    description: 'Customer id',
    default: "54d4e70b-3e70-4394-ab8c-bb3e551975ce",
    type: String
})
  customerId: string;

}
