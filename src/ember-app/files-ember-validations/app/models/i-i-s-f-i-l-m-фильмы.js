import {
  defineNamespace,
  defineProjections,
  Model as ФильмыMixin
} from '../mixins/regenerated/models/i-i-s-f-i-l-m-фильмы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФильмыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
