import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as СеансыMixin
} from '../mixins/regenerated/models/i-i-s-f-i-l-m-сеансы';

import ФильмыModel from './i-i-s-f-i-l-m-фильмы';

let Model = ФильмыModel.extend(СеансыMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
