if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  
  Test = BlazeComponent.extendComponent({
		template: function() {
			return 'BC_test'
		},
		
		mixins: function() {
			return [
				TestMixin
			];
		},
		
		events: function() {
			return [{
				'click a': function() {
					console.log('clicked');
				}
			}];
		}
	}).register('Test');
	
	TestMixin = BlazeComponent.extendComponent({
		events: function() {
			return [{
				'click a': function() {
					console.log('clicked mixin');
				}
			}];
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
