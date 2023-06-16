import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Notamedica, NotamedicaRelations} from '../models';

export class NotamedicaRepository extends DefaultCrudRepository<
  Notamedica,
  typeof Notamedica.prototype.idNota,
  NotamedicaRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Notamedica, dataSource);
  }
}
