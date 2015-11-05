var request = require('request');


var CLIENT_SECRET = 'YOUR CLIENT SECRET';
var CLIENT_ID = 'YOUR CLIENT ID';
var PASSWORD = 'YOUR THINGLINK PASSWORD';
var UID = 'YOUR.THINGLINK.USER@EMAIL.COM';

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
  console.log('You haz token!  Server responded with:', body);
});
