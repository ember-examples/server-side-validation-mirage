import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((registration) => {
        console.log(registration);
      }).catch((adapterError) => {
        console.log(adapterError);
      });
    }
  }
});
