import { Serializer as КинотеатрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-f-i-l-m-кинотеатр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КинотеатрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
