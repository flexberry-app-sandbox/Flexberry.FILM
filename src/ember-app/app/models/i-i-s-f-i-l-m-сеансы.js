import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as СеансыMixin
} from '../mixins/regenerated/models/i-i-s-f-i-l-m-сеансы';

import ФильмыModel from './i-i-s-f-i-l-m-фильмы';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-f-i-l-m-фильмы';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ФильмыModel.extend(СеансыMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
