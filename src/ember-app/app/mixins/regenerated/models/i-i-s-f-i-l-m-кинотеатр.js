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
    descriptionKey: 'models.i-i-s-f-i-l-m-кинотеатр.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КинотеатрE', 'i-i-s-f-i-l-m-кинотеатр', {
    код: attr('Код', { index: 0 })
  });

  modelClass.defineProjection('КинотеатрL', 'i-i-s-f-i-l-m-кинотеатр', {
    код: attr('Код', { index: 0 })
  });
};
