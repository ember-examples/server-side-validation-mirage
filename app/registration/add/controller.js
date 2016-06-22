import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      var model = this.get('model');

      model.save().then((registration) => {
        // it's a mock, we don't do anything
      }).catch((adapterError) => {
        // we just need to catch error
      });
    }
  }
});
