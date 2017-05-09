# Ember-qrcode-shim

An ember wrapper of [qrcode.js](https://davidshimjs.github.io/qrcodejs/), a tool to generate QR Code on client side.

## Installation

* `ember install ember-qrcode-shim`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Usage

### As `qr-code` Component

Example

`{{qr-code text=channel.url colorLight="#F7F7F7" width=155 height=155 correctLevel="L"}}`

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
