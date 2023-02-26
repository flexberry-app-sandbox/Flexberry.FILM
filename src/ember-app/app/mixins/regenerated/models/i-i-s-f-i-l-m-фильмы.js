import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-f-i-l-m-фильмы.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФильмыE', 'i-i-s-f-i-l-m-фильмы', {
    код: attr('Код', { index: 0 })
  });

  modelClass.defineProjection('ФильмыL', 'i-i-s-f-i-l-m-фильмы', {
    код: attr('Код', { index: 0 })
  });
};
