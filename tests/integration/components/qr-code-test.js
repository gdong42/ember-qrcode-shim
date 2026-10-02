import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, clearRender } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | qr-code', function(hooks) {
  setupRenderingTest(hooks);

  test('renders, updates text, and clears on teardown', async function(assert) {
    this.set('text', 'https://example.com');
    await render(hbs`<QrCode @text={{this.text}} @width={{155}} @height={{155}} @correctLevel="L" />`);
    const element = this.element.querySelector('.ember-view');
    assert.strictEqual(element.title, 'https://example.com');
    assert.ok(element.querySelector('canvas, img, table'), 'renders a QR code');
    this.set('text', 'updated text');
    await settled();
    assert.strictEqual(element.title, 'updated text');
    await clearRender();
    assert.strictEqual(this.element.children.length, 0, 'teardown completes');
  });
});
