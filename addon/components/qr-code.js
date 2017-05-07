import Ember from 'ember';
import QRCode from 'qrcode';

export default Ember.Component.extend({

  tagName: 'div',

  data: null,

  didInsertElement: function() {
    // ...
    Ember.Logger.debug('did insert qrcode');
    const data = this.get('data');
    let qrcode = new QRCode('test', {
      text: data,
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
    this.get('qrcode').clear();
  },
});

