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
      this.set('rating', model + 1);
      console.log(model);
    }
  }
};

export default Ember.ObjectController.extend(PostController);
