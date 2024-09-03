let path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); 

//import fetch from 'node-fetch';

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

const cors = require('cors');

// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

console.log(__dirname);

// Variables for url and api key


const BaseAPI = "https://api.meaningcloud.com/sentiment-2.1";
// const API_key = "083616d02854041091dcb9b8e8c3ad62"; 
  const API_key = process.env.API_key; 
// const sample = {
//   text: '',
//   score_tag : '',
//   agreement : '',
//   confidence : '',
//   irony : ''
// }

//https://api.meaningcloud.com/sentiment-2.1?key=083616d02854041091dcb9b8e8c3ad62&lang=en&url=https://www.aljazeera.net/live


app.post('/apipost',async (req,res) =>{
    
  

  try{     
    const fetch = (await import('node-fetch')).default;
    const {url:Inputurl} = req.body.url;  
    
  const Alldata = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_key}&lang=en&url=https://www.aljazeera.net/live`);


  if (!Alldata.ok) {
    throw new Error(`HTTP error! Status: ${Alldata.status}`);
   }

  const data = await Alldata.json(); 
      console.log(data);
      //Send the data back to the client as JSON
      res.json(data);
  } catch(e){
      console.log(e);  
      
      res.status(500).json({ message: 'Failed to fetch data', error: e.message });

  } 

});

app.get('/', function (req, res) {
   // res.send("This is the server API page, you may access its services via the client app.");
     res.sendFile(path.resolve('dist/index.html'));
});





// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


