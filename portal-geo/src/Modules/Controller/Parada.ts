/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ParadaService } from '../Service/Parada';
import {  Parada } from '../Entity/Parada';

@Controller('parada/onibus')
export class ParadaController {
  constructor(private readonly tabParadaService: ParadaService) {}

  @Get()
  async findAll(): Promise<Parada[]> {
    return this.tabParadaService.findAll();
  }
}
