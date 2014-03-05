define([
  "jquery",
  "underscore",
  "backbone",
  "text!templates/list.html"
], function ($, _, Backbone, template) {

	var List = Backbone.View.extend({
	
		el: $("body"),
	
		movies: {},
	
		initialize: function (options) {
			this.movie = options.movie;
			this.render();
		},
		
		render: function () {
			this.$el.html(_.template(template, this.movie.attributes));
		}
	});
	return List;

});