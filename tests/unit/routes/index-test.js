import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', ' | Route | index', {
  // Specify the other s that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
