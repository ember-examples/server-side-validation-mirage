import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((registration) => {
        // it's a mock, we don't do anything
      }).catch((adapterError) => {
        // we just need to catch error
      });
    }
  }
});
