import Ember from 'ember';
import QRCode from 'qrcode';

export default Ember.Component.extend({

  tagName: 'div',

  text: null,

  didInsertElement: function() {
    // ...
    Ember.Logger.debug('did insert qrcode');
    const text = this.get('text');
    let qrcode = new QRCode('test', {
      text: text,
      width: 128,
      height: 128,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
    this.set('qrcode', qrcode);
  },

  willDestroyElement: function() {
    Ember.Logger.debug('did destroy qrcode');
    this.get('qrcode').destroy();
  },
});

