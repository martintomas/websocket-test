//= require action_cable

window.App = {};
App.cable = ActionCable.createConsumer();

//= require_tree ./channels
