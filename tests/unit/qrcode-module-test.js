import { module, test } from 'qunit';
import QRCode from 'qrcode';

module('QRCode as an ES6 module');

test('it works', function(assert) {
  assert.ok(QRCode);
});

