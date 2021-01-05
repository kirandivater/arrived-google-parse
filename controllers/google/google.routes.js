const google = require('../../controllers/google/google.controller');
exports.findAll = (app) => {
    app.get('/google', google.GetGoogle);
}
