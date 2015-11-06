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
* go to [developer pages](https://www.thinglink.com/developer)
  * click 'Start creating tags...'
  * accept TOS
  * click 'Create apps'
  * get API Keys w/ `http://localhost` for Redirect url and pick any name

* `git clone https://github.com/sulmanen/junction.git`
* paste Client ID, Client Secret, thinglink username and password into token.js
* `> npm install .`
* `> node token` to get token
* paste access token from terminal to upload.js
* `> node upload`
* navigate to your [user page](https://www.thinglink.com/user/me)
* you should see your tagged and uploaded image on your account
* click image, click 'Share'-button and copy paste embed code into `index.html` replacing the current code
* `> http-server` to view created image

# Ideas

* image recognition with [openCV](http://opencv.org/) and [node-opencv](https://github.com/peterbraden/node-opencv) and autotag people or things
*
