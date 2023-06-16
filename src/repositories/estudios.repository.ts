import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Estudios, EstudiosRelations} from '../models';

export class EstudiosRepository extends DefaultCrudRepository<
  Estudios,
  typeof Estudios.prototype.idestudio,
  EstudiosRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Estudios, dataSource);
  }
}
