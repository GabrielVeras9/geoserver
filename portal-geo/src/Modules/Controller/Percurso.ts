/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { PercursoService } from '../Service/Percurso';

@Controller('/linhas/itinerarios/espaciais')
export class PercursoController {
  constructor(private readonly itinerarioEspacialService: PercursoService) {}

  /**
   * 
   * @returns 
   */
  @Get()
  async findAll(): Promise<any> {
    return this.itinerarioEspacialService.findAllPercurso();
  }
}
