import { Serializer as СеансыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-f-i-l-m-сеансы';
import ФильмыSerializer from './i-i-s-f-i-l-m-фильмы';

export default ФильмыSerializer.extend(СеансыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
