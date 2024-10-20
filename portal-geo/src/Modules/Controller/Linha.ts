/* eslint-disable prettier/prettier */
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { LinhaService } from '../Service/Linha';
import { Linha } from '../Entity/Linha';

@Controller('linhas/numeros')
export class LinhaController {
    constructor(private readonly linhaService: LinhaService) {}

    /**
     * 
     * @returns 
     */
    @Get()
    findAll(): Promise<any> {
        return this.linhaService.getFindAll();
    }
}
