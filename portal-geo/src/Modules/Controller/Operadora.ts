/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { OperadoraSService } from '../Service/Operadora';

@Controller('frota/operadora')
export class OperadoraCController {
    constructor(private readonly operadoraService: OperadoraSService) {}

    @Get()
    async findAll() {
        return this.operadoraService.findAll();
    }
}
