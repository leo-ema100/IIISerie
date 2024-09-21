import { Injectable } from '@nestjs/common';
import { CreateGestionEmpleadoDto } from './dto/create-gestion_empleado.dto';
import { UpdateGestionEmpleadoDto } from './dto/update-gestion_empleado.dto';

@Injectable()
export class GestionEmpleadosService {
  create(createGestionEmpleadoDto: CreateGestionEmpleadoDto) {
    return 'This action adds a new gestionEmpleado';
  }

  findAll() {
    return `This action returns all gestionEmpleados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestionEmpleado`;
  }

  update(id: number, updateGestionEmpleadoDto: UpdateGestionEmpleadoDto) {
    return `This action updates a #${id} gestionEmpleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestionEmpleado`;
  }
}
