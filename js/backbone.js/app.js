define([
  "jquery",
  "underscore",
  "backbone",
  "models/movie",
  "views/list"
], function ($, _, Backbone, Movie, List) {

	var initialize = function () {
	
		var movie = new Movie();
		movie.fetch();
	
		var list = new List({
			movie: movie
		});
	};
	return { initialize: initialize };
});