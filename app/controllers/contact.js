import Controller from '@ember/controller';
import {
  match,
  not
} from '@ember/object/computed';

export default Controller.extend({
  textMessage: '',
  contactResponse: '',

  isValid1: match('emailAddress', /^.+@.+\..+$/),
  isValid: match('textMessage', /^(?!\s*$).+/),
  isDisabled2: not('isValid' || 'isValid1'),

  actions: {
    sendMessage() {
      alert(`The carrier pigeon has begun it's flight \n to: ${this.get('emailAddress')} \n message: ${this.get('textMessage')}`);
      this.set('contactResponse', `We got your message and we'll get in touch soon.`);
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }
});
