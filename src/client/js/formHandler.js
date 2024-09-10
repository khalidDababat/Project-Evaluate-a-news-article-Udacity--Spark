

// Function to send data to the server

// function postdata(){
   
// }



async function handleSubmit(event) {
   event.preventDefault();
 
   
   const url = document.getElementById("name").value;//Enter URL 

   if(!isValidUrl()){
      alert("Please Enter The valid Url");
      return; 
   }

   try{
      const response = await fetch('http://localhost:8082/api', {
         method: "POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ url: url })
      });

     

      const data = await response.json();
            //console.log(data);
            //console.log(data.sentence_list[1]); 
            document.getElementById('text').innerHTML = data.sentence_list[1].text;
            document.getElementById('score-tag').innerHTML = data.sentence_list[1].score_tag;
            document.getElementById('aggreement').innerHTML = data.sentence_list[1].agreement;
            document.getElementById('confidence').innerHTML = data.sentence_list[1].confidence;
   
   }catch(e){
         console.log("error " ,e );
   }



    
}


function isValidUrl(str) {
   const pattern = new RegExp(
     '^([a-zA-Z]+:\\/\\/)?' + // protocol
       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
       '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
       '(\\#[-a-z\\d_]*)?$', // fragment locator
     'i'
   );
   return pattern.test(str);
 }


// Export the handleSubmit function
export { handleSubmit };
