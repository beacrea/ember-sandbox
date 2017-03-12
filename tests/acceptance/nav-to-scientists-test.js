import { test } from 'qunit';
import moduleForAcceptance from 'ember-test0/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | nav to scientists');

test('Header text check', function (assert) {
  visit('/scientists');
  andThen(function() {
    assert.equal(find('section.section_scientists h1').text(), 'It\'s science time!');
  });
});
