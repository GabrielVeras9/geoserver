/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HorariosRepository } from '../Repository/Horario';

@Injectable()
export class HorariaService {
    constructor(private readonly horariosRepository: HorariosRepository) {}

    async findAll(): Promise<any[]> {
        // Chama o repositório para buscar todos os registros
        const result = await this.horariosRepository.findAll();
        return result; // Retorna o resultado corretamente
    }
}
