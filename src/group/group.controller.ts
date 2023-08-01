import { Controller, Get, Post, Body, HttpStatus, Delete, Param } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetGroupDto } from './dto/get-group.dto';


@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiBody({ type: CreateGroupDto })
  @ApiOperation({ summary: 'Create group' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The group has been created successfully.', type: CreateGroupDto })
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @ApiOperation({ summary: 'List all groups'})
  @ApiResponse({ status: HttpStatus.OK, description: 'The group list has been returned successfully.', type: [GetGroupDto]})
  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @ApiOperation({ summary: 'Delete specified groups'})
  @ApiResponse({status: HttpStatus.OK, description:'The group chosed as been deleted'})
  @Delete(':id')
  deleteOne(@Param('id') id: string){
    return this.groupService.deleteOne(id);
  }
}
