function isGuest() {
    return (req, res, next) => {
        if (req.session.user) {
            res.json('You can not do this when you are logged in!');
        } else {
            next();
        }
    }
}

module.exports = {
    isGuest
}