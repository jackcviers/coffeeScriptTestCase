(function() {
    window.$(function() {
	    var $, Backbone, logMessageToDetail, view, _;
	    $ = window.$;
	    _ = window._;
	    Backbone = window.Backbone;
	    logMessageToDetail = function(msg) {
		return $('p#detail').html($('p#detail').html() + '<p>' + msg + '</p>');
	    };
	    logMessageToDetail('Testing jQuery existence succeeded.');
	    logMessageToDetail('Testing underscore existence:');
	    _.each(['a', 'b', 'c', 1, 2, 3], (function(item) {
			return logMessageToDetail(item);
		    }), this);
	    logMessageToDetail('Testing underscore existence succeeded.');
	    logMessageToDetail('Testing Backbone existence:');
	    $('p#detail').html($('p#detail').html() + '<article id="myView"></article>');
	    view = new Backbone.View({
		    el: $('article#myView')
		});
	    logMessageToDetail('Testing Backbone succeeded.');
	    return view.render();
	});
}).call(this);