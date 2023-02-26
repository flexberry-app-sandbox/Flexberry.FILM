import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-f-i-l-m-фильмы', 'Unit | Model | i-i-s-f-i-l-m-фильмы', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-f-i-l-m-кинотеатр',
    'model:i-i-s-f-i-l-m-сеансы',
    'model:i-i-s-f-i-l-m-фильмы',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
