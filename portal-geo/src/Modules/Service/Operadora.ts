/* eslint-disable prettier/prettier */
// src/Modules/Service/operadora.service.ts

import { Injectable } from '@nestjs/common';
import { OperadoraRepository } from '../Repository/Operadora';

@Injectable()
export class OperadoraSService {
    constructor(private readonly operadoraRepository: OperadoraRepository) {}

    async findAll(): Promise<any> {
        return this.operadoraRepository.findAll();
    }
}
