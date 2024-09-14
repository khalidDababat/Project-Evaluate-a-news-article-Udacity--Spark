

import { isValidUrl } from "./checkurl";

async function handleSubmit(event) {
    event.preventDefault();
    const url = document.getElementById("name").value;
   
    if(isValidUrl(url)){
    
      
      try {  
        
               const response = await fetch("http://localhost:8082/api", {
                 method: "POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify({ url: url }),
               });
         
               const data = await response.json();
               //console.log(data);
               //console.log(data.sentence_list[1]);
               document.getElementById("text").innerHTML = data.sentence_list[0].text;
               document.getElementById("score-tag").innerHTML =data.sentence_list[0].score_tag;
               document.getElementById("aggreement").innerHTML = data.sentence_list[0].agreement;
               document.getElementById("confidence").innerHTML = data.sentence_list[0].confidence;
            }catch(e){
                console.log("Error" ,e);
            }

    }else{
      alert("Please Enter The Valid URL");
    }
       
   }
   // export method 
export { handleSubmit };

