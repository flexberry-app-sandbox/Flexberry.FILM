import {
  defineNamespace,
  defineProjections,
  Model as КинотеатрMixin
} from '../mixins/regenerated/models/i-i-s-f-i-l-m-кинотеатр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КинотеатрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
