# YOBOT 

Node.js library for making bots on Yo


## Usage

`npm install yobot`


```
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



## License
Copyright (c) 2014 Matthew Conlen. Licensed under the MIT license.
