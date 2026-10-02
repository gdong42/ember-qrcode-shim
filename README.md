# Ember-qrcode-shim

An ember wrapper of [qrcode.js](https://davidshimjs.github.io/qrcodejs/), a tool to generate QR Code on client side.
[![NPM](https://nodei.co/npm/ember-qrcode-shim.png)](https://www.npmjs.com/package/ember-qrcode-shim)


Compatibility
------------------------------------------------------------------------------

* The classic `qr-code` component and `qrcode` ES module APIs are retained.
* The historical compatibility claim was Ember.js 2.18+ / Ember CLI 2.13+. This maintenance change tests Ember 3.28 and 4.12; compatibility with 2.18 and other versions is not yet confirmed. No new Ember minimum is inferred from the development CLI version.
* Downstream installation/build tooling requires the Node versions supported by `ember-cli-babel` 8: Node 16.x, 18.x, or 20 and above. Node 16 is a technical minimum, is end-of-life, and is **not** a recommended environment. The technical minimum is not tested here.
* Working on this repository requires Node 22 or 24 LTS because the Ember CLI 6.12 development toolchain has higher requirements. Use Node 24 LTS for local development; CI tests Node 22 and 24.
* This is a breaking Node toolchain compatibility change from the previous Node 8 claim. Projects that cannot update their build environment can keep the published `ember-qrcode-shim@0.4.0` until they can migrate; that older dependency tree still has known advisories.
* Node runs in developers' local/CI build environments. Site visitors do not need Node to render QR codes. Babel runtime helpers can be bundled into application JavaScript, so build dependencies and bundled runtime code must still be audited.

Development
------------------------------------------------------------------------------

Use a supported Node LTS, then run `npm ci`, `npm run lint`, `npm test`, and `npm run build -- --environment=production`.
Run `npm run test:all` for the Ember 3.28/4.12 compatibility scenarios. The Ember 3.28 scenario uses CLI 4.12 because it still calls `project.bowerDependencies`, which CLI 6 removed. That older CLI is isolated to compatibility testing; the locked development baseline uses CLI 6.12.



Installation
------------------------------------------------------------------------------

* `ember install ember-qrcode-shim`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

Usage
------------------------------------------------------------------------------

### As `qr-code` Component

Example

`{{qr-code text="http://www.example.com" colorLight="#F7F7F7" width=155 height=155 correctLevel="L"}}`

Config arguments provided by qrcode.js are also provided as component attributes with same key names. They are

* `text` - the target text that the QR code represents for
* `width` - the QR image width
* `height` - the QR image height
* `colorDark` - color of dark blocks
* `colorLight` - color of light background
* `correctLevel` - L | M | Q | H

### As ES6 module

You can also import qrcode.js as an ES6 module, so that you can have full control of rendering the QR Code as you wish.

```
import QRCode from 'qrcode';
...
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).

