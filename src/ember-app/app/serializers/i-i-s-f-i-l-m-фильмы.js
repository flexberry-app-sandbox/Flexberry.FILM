import { Serializer as ФильмыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-f-i-l-m-фильмы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФильмыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
