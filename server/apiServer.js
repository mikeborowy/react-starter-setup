//http://localhost:3333/courses
/*eslint-disable */
import colors from 'colors';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const open = require('open');
// const { port=3333, delay=1000 } = require('minimist')(process.argv);

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
}

let data ={};
const port = 3333;

const app = express()
    .use(logger)
    .use(cors())
    .use(bodyParser.json())
    .get(`/api/data`, (req, res) => res.status(200).json(data)) // get data
    .post(`/api/data`, (req, res) => res.status(200).json(data = req.body)) // post data
    .listen(port, function (err) { if (err) { console.log(err); } else { open(`http://localhost:${port}`); }});

 console.log(`Data Server is running at port:${port}.`.green);

    // .get('/resorts/:name', (req, res) =>
    //     setTimeout(() =>
    //             res.status(200).json(
    //                 resorts.filter(byName(req.params.name))
    //             ),
    //         delay
    //     )
    // )

// app.listen(port, () => console.log('Courses app running on port ' + port + ' with a ' + delay/1000 + ' second delay'));