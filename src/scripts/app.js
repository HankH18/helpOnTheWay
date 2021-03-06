import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


var app = function() {
	var HelpRouter = Backbone.Router.extend({
		routes: {
			"home": "showLoginPage",
			"groups/:group": "showGroupsPage",
			"*defaultRoute": "showLoginPage"
		},

		showLoginPage: function() {
			ReactDOM.render(<HomePage />, document.querySelector('.container'))
		},

		showGroupsPage: function() {
			
		}
	})
	new HelpRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..