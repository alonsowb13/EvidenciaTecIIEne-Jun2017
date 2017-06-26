import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

Meteor.publish('posts', function() {
  return Posts.find({flagged: false});
});

Meteor.publish('posts', function(author) {
  return Posts.find({flagged: false, author: author});
});

Meteor.subscribe('posts', 'bob-smith');



  

});

