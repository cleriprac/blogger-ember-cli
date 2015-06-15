import Ember from "ember";


var newId = 4

var PostsController = {
  sortProperties: ['title:asc'],
  sortedPosts: Ember.computed.sort('model', 'sortProperties'),
  actions: {
    sortByRating: function() {

      this.set('sortProperties', ['rating:desc']);
    },
    sortByTitle: function() {

      this.set('sortProperties', ['title:asc']);
    },
    sortByAuthor: function() {

      this.set('sortProperties', ['author.name:desc']);
    },
    add: function(){
        newId += 1;

        var newAuthor = this.store.createRecord('author', {
          name: this.get('name'),
          id:newId
        });

        var newPost = this.store.createRecord('post', {
          title: this.get('title'),
          body: this.get('body'),
          rating: 0,
          id: newId,
          author: newAuthor
        });


    }
  }
};

export default Ember.ArrayController.extend(PostsController);
