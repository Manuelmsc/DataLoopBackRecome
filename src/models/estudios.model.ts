import {Entity, model, property} from '@loopback/repository';

@model()
export class Estudios extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idestudio?: number;

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
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  diagnostico: string;


  constructor(data?: Partial<Estudios>) {
    super(data);
  }
}

export interface EstudiosRelations {
  // describe navigational properties here
}

export type EstudiosWithRelations = Estudios & EstudiosRelations;
