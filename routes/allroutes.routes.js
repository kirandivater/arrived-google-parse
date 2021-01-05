module.exports = (app) => {
    var googleRoute = require('../controllers/google/google.controller');
    googleRoute.GetGoogle(app);
}