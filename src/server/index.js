let path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); 



const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('dist'));

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key

//https://api.meaningcloud.com/sentiment-2.1?key=B1ad7bc42bB56636f511bd9d31c6fe2B&url=https://jamesclear.com/five-step-creative-process$lang=en

const BaseAPI = "https://api.meaningcloud.com/sentiment-2.1";
const API_key = "B1ad7bc42bB56636f511bd9d31c6fe2B"; // API Key Fake due to problems logging into the site 

// const sample = {
//   text: '',
//   score_tag : '',
//   agreement : '',
//   subjectivity : '',
//   confidence : '',
//   irony : ''
// }
async function reterveData(api) {
   
}

app.get('/', function (req, res) {
   // res.send("This is the server API page, you may access its services via the client app.");
     res.sendFile(path.resolve('dist/index.html'));
});


// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


