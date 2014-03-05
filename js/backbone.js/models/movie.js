define([
  "jquery",
  "underscore",
  "backbone",
  "text!data/movie.json"
], function ($, _, Backbone, movieJSON) {

	var Movie = Backbone.Model.extend({
		url: "fake",
		
		defaults: {
			title: "None",
			rating: "None",
			ranking: null
		},
		
		fetch: function () {
			var model = this;
			model.set(JSON.parse(movieJSON)); // normally this would be from a REST server
		}
	});
	return Movie;
});