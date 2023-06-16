import {Entity, model, property} from '@loopback/repository';

@model()
export class Notamedica extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idNota?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrepaciente: string;

  @property({
    type: 'string',
    required: true,
  })
  nombremedico: string;

  @property({
    type: 'string',
    required: true,
  })
  frcuenciacardiaca: string;

  @property({
    type: 'string',
    required: true,
  })
  frecuenciarespiratoria: string;

  @property({
    type: 'number',
    required: true,
  })
  talla: number;

  @property({
    type: 'number',
    required: true,
  })
  peso: number;

  @property({
    type: 'number',
    required: true,
  })
  temperatura: number;

  @property({
    type: 'string',
    required: true,
  })
  diagnostico: string;


  constructor(data?: Partial<Notamedica>) {
    super(data);
  }
}

export interface NotamedicaRelations {
  // describe navigational properties here
}

export type NotamedicaWithRelations = Notamedica & NotamedicaRelations;
