import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parada } from '../Entity/Parada';
import { formatParadasGeoJSON } from '../utils/Parada'; // Importa o utilitário para GeoJSON

@Injectable()
export class ParadaService {
  constructor(
    @InjectRepository(Parada)
    private readonly tabParadaRepository: Repository<Parada>,
  ) {}

  async findAll(): Promise<any> {
    const paradas = await this.tabParadaRepository.find(); // Busca todas as paradas do banco
    return formatParadasGeoJSON(paradas); // Converte os dados no formato GeoJSON
  }
}
