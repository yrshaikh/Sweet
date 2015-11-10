function staticFunctions() {}

staticFunctions.prototype = {
	isAuthenticated: function(req, res, next){
		if (req.user)
        	return next();
    	res.redirect('/sign-in');
	}
};

module.exports = staticFunctions;