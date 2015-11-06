import Ember from 'ember';
import config from 'ember-public-env';

export default Ember.Controller.extend({
  stuff: config.foo
});
