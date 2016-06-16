import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  gender: attr('string'),
  email: attr('string'),
  newsletter: attr('boolean'),
  magazine: attr('boolean'),
  promotions: attr('boolean')
});