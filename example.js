#!/usr/bin/env node

var WhatCD = require("./lib/whatcd");

var client = new WhatCD("https://what.cd", "username", "password");

client.index(function(err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});
