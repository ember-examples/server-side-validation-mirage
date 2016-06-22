import DRFAdapter from './drf';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.uncountable('registration');

export default DRFAdapter.extend({

});
