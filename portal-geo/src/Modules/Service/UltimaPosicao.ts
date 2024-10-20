/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UltimaPosicaoRepository } from '../Repository/UltimaPosicao'; // Repositório personalizado
import { UltimaPosicao } from '../Entity/UltimaPosicao'; // Entidade

@Injectable()
export class UltimaPosicaoService {
  constructor(
    private readonly ultimaPosicaoRepository: UltimaPosicaoRepository, // Injeção do repositório personalizado
  ) {}

  /**
   * Retorna as posições de todas as operadoras
   */
  async getFindAllOperadorasPosicoes(): Promise<UltimaPosicao[]> {
    return await this.ultimaPosicaoRepository.getFindAllOperadorasPosicoes();
  }
}
