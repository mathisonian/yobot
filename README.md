# YOBOT 

Node.js library for making bots on Yo


## Usage

`npm install yobot`


```js
'use strict';

var Yobot = require('yobot');

var yobot = new Yobot(process.env.YO_KEY);
    
// Capture incoming Yo's
yobot.yo(function(username) {
    console.log('Received yo from ' + username);
});


// Send a yo
yobot.yo();
```

Use it how you will.


## Callback URL

This will start a server listing for incoming YO's at `/yo/`, you will to input `yourserver.com/yo/` as the callback URL when registering for your api key


## License
Copyright (c) 2014 Matthew Conlen. Licensed under the MIT license.
