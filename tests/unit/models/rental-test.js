import { moduleForModel, test } from 'ember-qunit';

moduleForModel('rental', ' | Model | rental', {
  // Specify the other s that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
