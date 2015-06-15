import Ember from "ember";

var PostController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    doneEditing: function() {
      this.set('isEditing', false);
    },
    upvote: function(){
      var model = this.get('model.rating');
      this.set('model.rating', model + 1);
    }
  }
};

export default Ember.Controller.extend(PostController);
