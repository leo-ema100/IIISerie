import { Test, TestingModule } from '@nestjs/testing';
import { GestionEmpleadosService } from './gestion_empleados.service';

describe('GestionEmpleadosService', () => {
  let service: GestionEmpleadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestionEmpleadosService],
    }).compile();

    service = module.get<GestionEmpleadosService>(GestionEmpleadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
