import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Receta, RecetaRelations} from '../models';

export class RecetaRepository extends DefaultCrudRepository<
  Receta,
  typeof Receta.prototype.idReceta,
  RecetaRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Receta, dataSource);
  }
}
