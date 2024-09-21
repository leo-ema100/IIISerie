import { Test, TestingModule } from '@nestjs/testing';
import { GestionEmpleadosController } from './gestion_empleados.controller';
import { GestionEmpleadosService } from './gestion_empleados.service';

describe('GestionEmpleadosController', () => {
  let controller: GestionEmpleadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionEmpleadosController],
      providers: [GestionEmpleadosService],
    }).compile();

    controller = module.get<GestionEmpleadosController>(GestionEmpleadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
