const google = require('../../controllers/google/google.controller');

exports.findAll = (app) => {
    app.get('/google', google.test);
    app.get('/google/getgoogle', google.GetGoogle);
    app.post('/google/getgooglecode', google.GetGoogleCode);
}
