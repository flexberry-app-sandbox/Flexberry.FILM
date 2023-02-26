import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФильмыMixin
} from '../mixins/regenerated/models/i-i-s-f-i-l-m-фильмы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФильмыMixin, Validations, {
});

defineProjections(Model);

export default Model;
