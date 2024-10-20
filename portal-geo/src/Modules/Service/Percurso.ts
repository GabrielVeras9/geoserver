import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PercursoRepository } from '../Repository/Percurso';
import { PercursoEntity } from '../Entity/Percurso';

@Injectable()
export class PercursoService {
  constructor(
    @InjectRepository(PercursoRepository)
    private readonly percursoRepository: PercursoRepository,
  ) {}

  /**
   *
   * @returns Uma lista de todos os percursos
   */
  async findAllPercurso(): Promise<any> {
    return await this.percursoRepository.findAllPercurso();
  }
}