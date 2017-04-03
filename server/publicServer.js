// import express from 'express'; import path from 'path'; import open from
// 'open';
import colors from 'colors';
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const open = require('open');
const compression = require('compression');

/*eslint-disable no-console */
const port = 3001;

const app = express()
  .use(compression())
  .use(express.static('public'))
  .get('*', function (req, res) { res.sendFile(path.join(__dirname, '../public/index.html')); })
  .listen(port, function (err) { if (err) { console.log(err); } else { open(`http://localhost:${port}`); }});


 console.log(`Public Server is running at port:${port}.`.green);
