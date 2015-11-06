![ThingLink logo](http://tenseignes-tu.com/wp-content/uploads/2014/06/thinglink-logo.jpg "ThingLink")

Hacking the ThingLink API @ Junction
====================================
Demo of

* get access token
* upload image with tags

through [ThingLink API](http://docs.thinglink.apiary.io/)

# Short version
* if !node install [node](https://nodejs.org/en/)
* create [ThingLink](https://www.thinglink.com) account
* request free upgrade from sulmanen (at) thinglink.com (you can complete the excercise w/o but will be useful later on)
* go to [developer pages](https://www.thinglink.com/developer)
  * click 'Start creating tags...'
  * accept TOS
  * click 'Create apps'
  * get API Keys w/ `http://localhost` for Redirect url and pick any name

* `git clone https://github.com/sulmanen/junction.git`
* paste Client ID, Client Secret, thinglink username and password into token.js
* `> npm install .`
* `> node token` to get token
  `Get auth token... {"client_secret":"3aQzLuwy4DNPsCTpZFFQbgg27izn","client_id":"719160553787883520","grant_type":"password","password":"pftvppeh","username":"sulmanen+junction@thinglink.com"}
You haz token!  Server responded with: {"access_token":"HqagKHBHEw3THPpwMdt5m6.DhPLaVKS8AhoengZvYifXDGsZQmujJ8AcfJWUgidpXuq","token_type":"bearer","refresh_token":"AoZdHLCxf48CaVxohhoRr7Dzjno","expires_in":1209600}`
* paste access_token from terminal to upload.js
* `> node upload`
```sh
└[~/work/tmp/junction]> node upload
File upload id: 79DpVUEnFZyoeU88
File size: 669481
Server response: 201
File is at: http://s1.thingpic.com/images/UR/ekVBsoRCJLc6U6FpCXuT68sA.png
```
* navigate to your [user page](https://www.thinglink.com/user/me)
* you should see your tagged and uploaded image on your account
* click image, click 'Share'-button and copy paste embed code into `index.html` replacing the current code
* `> http-server` to view created image

# Ideas

* image recognition with [openCV](http://opencv.org/) and [node-opencv](https://github.com/peterbraden/node-opencv) and autotag people or things
*
