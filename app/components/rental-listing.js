import Ember from 'ember';
export default Ember.Component.extend({
  isImageShowing: false,
  updateRentalForm: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(rental, userInput) {
      this.sendAction('update', rental, userInput);
    },
    delete(rental) {
      if (confirm('Are you sure you want to remove this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
