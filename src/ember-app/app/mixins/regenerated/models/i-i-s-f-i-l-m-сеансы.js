import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  pK: DS.attr('string')
});

export let ValidationRules = {
  pK: {
    descriptionKey: 'models.i-i-s-f-i-l-m-сеансы.validations.pK.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-f-i-l-m-фильмы'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СеансыE', 'i-i-s-f-i-l-m-сеансы', {
    pK: attr('PK', { index: 0 }),
    код: attr('Код', { index: 1 })
  });

  modelClass.defineProjection('СеансыL', 'i-i-s-f-i-l-m-сеансы', {
    pK: attr('PK', { index: 0 }),
    код: attr('Код', { index: 1 })
  });
};
