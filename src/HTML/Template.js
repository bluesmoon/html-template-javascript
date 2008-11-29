var HTML = HTML || {};

var HTML.Template = function() {
	function _create(tmpl_str) {
        
	}
    
	function _param(obj) {
		switch (typeof(obj)) {
			case "object":
				/* Set parameters */
				break;
			case "string":
				/* Get parameter */
				break;
			case "undefined":
				/* Get all parameters */
				break;
		}
	}
    
    return {
        create: _create,
        param: _param,        
    };
}();