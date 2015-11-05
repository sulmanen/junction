var request = require('request');


var CLIENT_SECRET = '3eSoSbHc8i1C1byfu9vhfYC2mk9D';
var CLIENT_ID = '718825503317819394';
var PASSWORD = 'pftvppeh';
var UID = 'sulmanen+agency@gmail.com';

var formData = {
    client_secret: CLIENT_SECRET,
    client_id: CLIENT_ID,
    grant_type: 'password',
    password: PASSWORD,
    username: UID
};


console.log('Get auth token... ' + JSON.stringify(formData));

request.post({url:'https://www.thinglink.com/auth/token', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
