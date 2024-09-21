import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestionEmpleadosService } from './gestion_empleados.service';
import { CreateGestionEmpleadoDto } from './dto/create-gestion_empleado.dto';
import { UpdateGestionEmpleadoDto } from './dto/update-gestion_empleado.dto';

@Controller('gestion-empleados')
export class GestionEmpleadosController {
  constructor(private readonly gestionEmpleadosService: GestionEmpleadosService) {}

  @Post()
  create(@Body() createGestionEmpleadoDto: CreateGestionEmpleadoDto) {
    return this.gestionEmpleadosService.create(createGestionEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.gestionEmpleadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestionEmpleadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestionEmpleadoDto: UpdateGestionEmpleadoDto) {
    return this.gestionEmpleadosService.update(+id, updateGestionEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestionEmpleadosService.remove(+id);
  }
}
