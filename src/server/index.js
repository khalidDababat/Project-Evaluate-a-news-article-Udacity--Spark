let path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');



const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('dist'));



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

console.log(__dirname);









//API_key "083616d02854041091dcb9b8e8c3ad62"; I mack another Api key On Another Email Becouse Meaning Cloud Account  

//https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url=${encodeURIComponent(Inputurl)}&lang=en

app.post('/api', async (req, res) => {
  const apikey = process.env.API_key;
  const Inputurl = req.body.url; 
  //console.log("The URL Test:", Inputurl); // Check if the URL is properly logged

  if (!Inputurl) {
      return res.status(400).json({ message: 'URL is required' }); // Handle missing URL
  }

  try {
      const apiurl = `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url=${encodeURIComponent(Inputurl)}&lang=en`;

      const fetch = (await import('node-fetch')).default;
      const response = await fetch(apiurl);

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const apidata = await response.json();
      res.send(apidata);
  } catch (e) {
      res.status(500).json({ message: 'Failed to fetch data', error: e.message });
  }
});

app.get('/', function (req, res) {
     res.sendFile(path.resolve('dist/index.html'));
});





// Designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!');
});


//  const dataReady ={
    //   text: apidata.text ,
    //   score_tag: apidata.score_tag ,
    //   agreement: apidata.agreement , 
    //   subjectivity: apidata.subjectivity
    //  }