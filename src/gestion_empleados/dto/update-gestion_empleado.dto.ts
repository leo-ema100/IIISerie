import { PartialType } from '@nestjs/mapped-types';
import { CreateGestionEmpleadoDto } from './create-gestion_empleado.dto';

export class UpdateGestionEmpleadoDto extends PartialType(CreateGestionEmpleadoDto) {}
