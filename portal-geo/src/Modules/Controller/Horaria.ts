/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { HorariaService } from '../Service/Horaria';

@Controller('tabela/horario')
export class HorarioController {
    constructor(private readonly horariaService: HorariaService) {}

    @Get()
    findAll(): Promise<any> {
        return this.horariaService.findAll();
    }

}