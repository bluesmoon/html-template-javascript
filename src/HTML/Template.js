var HTML = HTML || {};

(function() {

var _validate_params = function(param) {
	if (typeof param === "string") {
		return true;
	} else if (typeof param === "array") {
		for (var i = 0; i < param.length; i++) {
			if (!_validate_params(param[i])) {
				return false;
			}
		}
		return true;
	} else if (param.length && (typeof param.length === "number")) {
		return _validate_params(param);
	} else {
		return false;
	}
};

var _process_var = function(attrs) {
};

var _process_if = function(attrs) {
	//lookup the variable in _params and check if its value is undefined or false

};
var _process = function(m0, m1, m2) {
	if(typeof m1 === "undefined") {
		// TODO: Log error (throw error if strict)
		return "";
	} else if(m1.toUpperCase() === "VAR") {
		// TODO: maybe parse m2 into an object
		return _process_var(m2);
	} else if (m1.toUpperCase() == "IF") {
		return _process_if(m2);
	}
};

HTML.Template = function(o) {

	this._initialisers = {};
	this._params = {};

	if(typeof o === "string") {
		this._initialisers.tmpl_string = o;
	} else if(typeof o === "object") {
		// TODO: check parameters inside o before assigning
		this._initialisers = o;
	} else {
		return undefined;
	}

	return this;
};

HTML.Template.prototype = {
	param: function (o) {
		if(typeof o === "object") {
			// Set parameters after checking
			for (var key in o) {
				if (!key.match(/\w+/) || !_validate_params(o[key])) {
					// TODO: Log error
					return false;
				}
			}
			
			this._params = o;
			return this._params;
		} else if(typeof o === "string") {
			// Get parameter
			return this._params[o];
		} else if(typeof o === "undefined") {
			// Get all parameters
			return this._params;
		} else {
			// TODO: log an error
			return undefined;
		}
	},

	output: function() {
	},

	clear_params: function() {
		this._params = {};

		return this;
	}
};

})();
