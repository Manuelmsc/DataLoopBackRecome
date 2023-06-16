import {Entity, model, property} from '@loopback/repository';

@model()
export class Receta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idReceta?: number;

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
  descripcionmedica: string;

  @property({
    type: 'string',
    required: true,
  })
  diagnostico: string;


  constructor(data?: Partial<Receta>) {
    super(data);
  }
}

export interface RecetaRelations {
  // describe navigational properties here
}

export type RecetaWithRelations = Receta & RecetaRelations;
