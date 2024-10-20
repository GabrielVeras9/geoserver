/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Res } from '@nestjs/common';
import { UltimaPosicaoService } from '../Service/UltimaPosicao';
import { UltimaPosicao } from '../Entity/UltimaPosicao';
import { Response } from 'express';

@Controller('/gps/ultima/posicao')
export class UltimaPosicaoController {
  constructor(private readonly UltimaPosicaoService: UltimaPosicaoService) {}

    @Get()
    async findAll(@Res() res: Response): Promise<void> {
        const data = await this.UltimaPosicaoService.getFindAllOperadorasPosicoes();
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    }
}
