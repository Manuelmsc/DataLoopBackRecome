import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Notamedica} from '../models';
import {NotamedicaRepository} from '../repositories';

export class NotamedicaController {
  constructor(
    @repository(NotamedicaRepository)
    public notamedicaRepository : NotamedicaRepository,
  ) {}

  @post('/notamedicas')
  @response(200, {
    description: 'Notamedica model instance',
    content: {'application/json': {schema: getModelSchemaRef(Notamedica)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notamedica, {
            title: 'NewNotamedica',
            exclude: ['idNota'],
          }),
        },
      },
    })
    notamedica: Omit<Notamedica, 'idNota'>,
  ): Promise<Notamedica> {
    return this.notamedicaRepository.create(notamedica);
  }

  @get('/notamedicas/count')
  @response(200, {
    description: 'Notamedica model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Notamedica) where?: Where<Notamedica>,
  ): Promise<Count> {
    return this.notamedicaRepository.count(where);
  }

  @get('/notamedicas')
  @response(200, {
    description: 'Array of Notamedica model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Notamedica, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Notamedica) filter?: Filter<Notamedica>,
  ): Promise<Notamedica[]> {
    return this.notamedicaRepository.find(filter);
  }

  @patch('/notamedicas')
  @response(200, {
    description: 'Notamedica PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notamedica, {partial: true}),
        },
      },
    })
    notamedica: Notamedica,
    @param.where(Notamedica) where?: Where<Notamedica>,
  ): Promise<Count> {
    return this.notamedicaRepository.updateAll(notamedica, where);
  }

  @get('/notamedicas/{id}')
  @response(200, {
    description: 'Notamedica model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Notamedica, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Notamedica, {exclude: 'where'}) filter?: FilterExcludingWhere<Notamedica>
  ): Promise<Notamedica> {
    return this.notamedicaRepository.findById(id, filter);
  }

  @patch('/notamedicas/{id}')
  @response(204, {
    description: 'Notamedica PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notamedica, {partial: true}),
        },
      },
    })
    notamedica: Notamedica,
  ): Promise<void> {
    await this.notamedicaRepository.updateById(id, notamedica);
  }

  @put('/notamedicas/{id}')
  @response(204, {
    description: 'Notamedica PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() notamedica: Notamedica,
  ): Promise<void> {
    await this.notamedicaRepository.replaceById(id, notamedica);
  }

  @del('/notamedicas/{id}')
  @response(204, {
    description: 'Notamedica DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.notamedicaRepository.deleteById(id);
  }
}
