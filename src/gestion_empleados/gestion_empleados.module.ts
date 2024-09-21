import { Module } from '@nestjs/common';
import { GestionEmpleadosService } from './gestion_empleados.service';
import { GestionEmpleadosController } from './gestion_empleados.controller';

@Module({
  controllers: [GestionEmpleadosController],
  providers: [GestionEmpleadosService],
})
export class GestionEmpleadosModule {}
