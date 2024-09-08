



// Function to send data to the server



async function handleSubmit(event) {
   event.preventDefault();
 
   //const Inputurl = document.getElementById("name").value;
   
   const url = document.getElementById("name").value;//Enter URL
   fetch('http://localhost:8082/api' , {
      method:"post",
      headers:{ 'Content-Type': 'application/json' },
      body:JSON.stringify({url:url})
   })
       .then(response => response.json())
       .then(data =>
       {
        // console.log(data.sentence_list[1]); 
         document.getElementById('text').innerHTML = data.sentence_list[1].text+ " ";
         document.getElementById('score-tag').innerHTML = data.sentence_list[1].score_tag+ " ";
         document.getElementById('aggreement').innerHTML = data.sentence_list[1].agreement+ " ";
         document.getElementById('confidence').innerHTML = data.sentence_list[1].confidence+ " ";

      
      }
       )
       .catch(error => console.error('Error:', error));


 
}


// Export the handleSubmit function
export { handleSubmit };
