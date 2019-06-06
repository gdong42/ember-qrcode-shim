# Ember-qrcode-shim

An ember wrapper of [qrcode.js](https://davidshimjs.github.io/qrcodejs/), a tool to generate QR Code on client side.
[![NPM](https://nodei.co/npm/ember-qrcode-shim.png)](https://www.npmjs.com/package/ember-qrcode-shim)


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


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

