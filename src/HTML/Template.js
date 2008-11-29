var HTML = HTML || {};

(function() {

var _initialisers = {};

var _params = {};

var _process_var = function(attrs) {
};

var _process = function(m0, m1, m2) {
	if(typeof m1 === "undefined") {
		// TODO: Log error (throw error if strict)
		return "";
	} else if(m1.toUpperCase() === "VAR") {
		// TODO: maybe parse m2 into an object
		return _process_var(m2);
	}
}

HTML.Template = function(o) {
	if(typeof o === "string") {
		_initialisers.tmpl_string = o;
	} else if(typeof o === "object") {
		// TODO: check parameters inside o before assigning
		_initialisers = o;
	} else {
		return undefined;
	}

	return this;
};

HTML.Template.prototype = {
	param: function (o) {
		if(typeof o === "object") {
			/* Set parameters */
		} else if(typeof o === "string") {
			/* Get parameter */
		} else if(typeof o === "undefined") {
			/* Get all parameters */
		} else {
			// TODO: log an error
			return "undefined";
		}
	},

	output: function() {
	},

	clear_params() {
		_params = {};
	}
};

})();
