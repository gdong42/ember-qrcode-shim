import { module, test } from 'qunit';
import QRCode from 'qrcode';

module('QRCode as an ES6 module');

test('constructs, updates, and clears a QR code', function(assert) {
  const element = document.createElement('div');
  document.body.appendChild(element);
  try {
    const code = new QRCode(element, {
      text: 'https://example.com',
      width: 155,
      height: 155,
      correctLevel: QRCode.CorrectLevel.L
    });
    assert.strictEqual(element.title, 'https://example.com');
    assert.ok(element.querySelector('canvas, img, table'));
    code.makeCode('updated');
    assert.strictEqual(element.title, 'updated');
    code.clear();
    assert.ok(code, 'clear completes');
    assert.deepEqual(Object.keys(QRCode.CorrectLevel).sort(), ['H', 'L', 'M', 'Q']);
  } finally {
    element.remove();
  }
});
