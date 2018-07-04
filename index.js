'use strict';

module.exports = {
  name: 'ember-qrcode-shim',
  included: function included(app) {
    this._super.included(app);
    app.import('vendor/qrcode.js', {
      exports: {
        QRCode: ['default']
      }
    });
  }
};
