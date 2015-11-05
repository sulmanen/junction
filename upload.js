var request = require('request'),
    fs = require('fs'),
    ACCESS_TOKEN = 'MY ACCESS TOKEN HERE',
    formData = {
        contentType:'image/png'
    },
    uploadId,
    uploadRoot = 'https://api.thinglink.com/api/upload',
    headers = {
        'Authorization': 'Bearer ' + ACCESS_TOKEN
    };


request.post({
    url: uploadRoot,
    formData: formData,
    headers: headers
}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }

    uploadId = JSON.parse(body).results.id;

    console.log(uploadId);

    fs.stat('image.png', function(error, stat) {

        headers['Content-Length'] = stat.size;

        console.log(stat.size);

        fs.createReadStream('image.png').pipe(request.put({
            url: uploadRoot + '/' + uploadId,
            headers: headers
        }, function(err, response, body) {

            console.log(response.statusCode);

            console.log(response.headers['location']);

            if (err) {
                return console.error('upload failed:', err);
            }

            headers['Content-Type'] = 'application/json';

            delete headers['Content-Length'];

            request.post({
                url: 'https://api.thinglink.com/api/scene',
                headers: headers,
                body: JSON.stringify({
                    "tags":[
                        {
                            "description":"Thing #1",
                            "link":"http:\/\/www.thinglink.com\/",
                            "state":"thing1",
                            "nubbin":"red",
                            "box":{
                                "y1":0.5,
                                "y2":0.5,
                                "x2":0,
                                "x1":0
                            }
                        },
                        {
                            "description":"Thing #2",
                            "box":{
                                "y1":1.0,
                                "y2":1.0,
                                "x2":0.5,
                                "x1":0.5
                            }
                        }
                    ],
                    "title":"Wolverine",
                    "visibility":"public",
                    "url": response.headers['location']
                })
            })
        }));
    });
});
