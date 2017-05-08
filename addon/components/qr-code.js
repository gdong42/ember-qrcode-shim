import Ember from 'ember';
import QRCode from 'qrcode';

export default Ember.Component.extend({

  data: null,

  light: '#ffffff',

  dark: '#000000',

  width: 128,

  height: 128,

  // L/M/Q/H
  quality: 'Q',

  didInsertElement: function() {
    // ...
    Ember.Logger.debug('did insert qrcode');
    const data = this.get('data');
    const elementId = this.get('elementId');
    const quality = this.get('quality');
    const light = this.get('light');
    const dark = this.get('dark');
    const width = this.get('width');
    const height = this.get('height');
    
    let qrcode = new QRCode(elementId, {
      text: data,
      width: width,
      height: height,
      colorDark: dark,
      colorLight: light,
      correctLevel: QRCode.CorrectLevel[quality],
    });
    this.set('qrcode', qrcode);
  },

  willDestroyElement: function() {
    Ember.Logger.debug('did destroy qrcode');
    this.get('qrcode').clear();
  },
});

