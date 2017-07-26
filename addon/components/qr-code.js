import Ember from 'ember';
import QRCode from 'qrcode';

export default Ember.Component.extend({

  text: null,

  colorLight: '#ffffff',

  colorDark: '#000000',

  width: 128,

  height: 128,

  // L/M/Q/H
  correctLevel: 'Q',

  didInsertElement: function() {
    const text = this.get('text');
    const elementId = this.get('elementId');
    const correctLevel = this.get('correctLevel');
    const colorLight = this.get('colorLight');
    const colorDark = this.get('colorDark');
    const width = this.get('width');
    const height = this.get('height');
    
    let qrcode = new QRCode(elementId, {
      text,
      width,
      height,
      colorDark,
      colorLight,
      correctLevel: QRCode.CorrectLevel[correctLevel],
    });
    this.set('qrcode', qrcode);
  },

  willDestroyElement: function() {
    this.get('qrcode').clear();
  },

  _recreateCode: Ember.observer('text', function() {
    this.get('qrcode').makeCode(this.get('text'));
  })
});

