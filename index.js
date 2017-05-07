/* jshint node: true */
'use strict';

module.exports = {
  name: 'qrcode',
  included: function included(app) {
    this._super.included(app);
    app.import('vendor/qrcode.js', {
      exports: {
        QRCode: ['default']
      }
    });
  }
};
