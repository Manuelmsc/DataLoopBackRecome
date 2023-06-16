import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Estudios} from '../models';
import {EstudiosRepository} from '../repositories';

export class EstudioControllerController {
  constructor(
    @repository(EstudiosRepository)
    public estudiosRepository: EstudiosRepository,
  ) { }

  @post('/estudios')
  @response(200, {
    description: 'Estudios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estudios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudios, {
            title: 'NewEstudios',
            exclude: ['idestudio'],
          }),
        },
      },
    })
    estudios: Omit<Estudios, 'idEstudio'>,
  ): Promise<Estudios> {
    return this.estudiosRepository.create(estudios);
  }

  @get('/estudios/count')
  @response(200, {
    description: 'Estudios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estudios) where?: Where<Estudios>,
  ): Promise<Count> {
    return this.estudiosRepository.count(where);
  }

  @get('/estudios')
  @response(200, {
    description: 'Array of Estudios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estudios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estudios) filter?: Filter<Estudios>,
  ): Promise<Estudios[]> {
    return this.estudiosRepository.find(filter);
  }

  @patch('/estudios')
  @response(200, {
    description: 'Estudios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudios, {partial: true}),
        },
      },
    })
    estudios: Estudios,
    @param.where(Estudios) where?: Where<Estudios>,
  ): Promise<Count> {
    return this.estudiosRepository.updateAll(estudios, where);
  }

  @get('/estudios/{id}')
  @response(200, {
    description: 'Estudios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estudios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estudios, {exclude: 'where'}) filter?: FilterExcludingWhere<Estudios>
  ): Promise<Estudios> {
    return this.estudiosRepository.findById(id, filter);
  }

  @patch('/estudios/{id}')
  @response(204, {
    description: 'Estudios PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudios, {partial: true}),
        },
      },
    })
    estudios: Estudios,
  ): Promise<void> {
    await this.estudiosRepository.updateById(id, estudios);
  }

  @put('/estudios/{id}')
  @response(204, {
    description: 'Estudios PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estudios: Estudios,
  ): Promise<void> {
    await this.estudiosRepository.replaceById(id, estudios);
  }

  @del('/estudios/{id}')
  @response(204, {
    description: 'Estudios DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estudiosRepository.deleteById(id);
  }
}
