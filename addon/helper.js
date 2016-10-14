import Ember from "ember";

export default Ember.Helper.extend({
  i18n: Ember.inject.service(),

  compute: function(params, interpolations) {
    const key = params[0];
    const i18n = this.get('i18n');
    return i18n.t(key, interpolations);
  },

  _recomputeOnLocaleChange: Ember.observer('i18n.locale', function() {
    this.recompute();
  })
});
