var HTML = HTML || {};

(function() {

var _initialisers = {};

var _params = {};

var _validate_params = function(param) {
	if (typeof param === "string") {
		return true;
	} else if (typeof param === "array") {
		var valid = true;
		for (var i = 0; i < param.length; i++) {
			if (!_validate_params(param[i]))
				valid = false;
		}
		return valid;
	} else if (param.length && (typeof param.length === "number")) {
		return _validate_params(param);
	} else {
		return false;
	}
};

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
			// Set parameters after checking
			var valid = true;
			var re = new RegExp("\\w+");
			for (key in o) {
				if (!key.match(re) || !_validate_params(o[key]))
					valid = false;
			}
			
			// TODO: Log error
			if (valid)
				_params = o;
			return valid;
		} else if(typeof o === "string") {
			// Get parameter
			return _params[o];
		} else if(typeof o === "undefined") {
			// Get all parameters
			return _params;
		} else {
			// TODO: log an error
			return undefined;
		}
	},

	output: function() {
	},

	clear_params: function() {
		_params = {};
	}
};

})();
