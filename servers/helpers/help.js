
module.exports = function(req) {

    this.authorization = req.headers.authorization;
    this.isBearer = req.headers.authorization.split(' ')[0] === 'Bearer';

    //JWT TOKEN EXTRACTOR
    this.extractToken = () => {
        if (this.authorization && this.isBearer ) {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }

    // CHECK BODY IS EMPTY
    this.isBodyEmpty = () => {
        for (var prop in req.body) {
            if (req.body.hasOwnProperty(prop))
                return false;
        }
        return JSON.stringify(req.body) === JSON.stringify({});
    }

};