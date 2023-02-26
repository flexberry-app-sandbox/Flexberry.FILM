import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КинотеатрMixin
} from '../mixins/regenerated/models/i-i-s-f-i-l-m-кинотеатр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КинотеатрMixin, Validations, {
});

defineProjections(Model);

export default Model;
