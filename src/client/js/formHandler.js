// Replace checkForName with a function that checks the URL
import { CheckUrl } from './TestUrl.js';

// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'http://localhost:8000';




 

const postserver = async (url ='' ,data ='') =>{

    const res = await fetch(url ,{
        method:'post',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    try{
        return await res.json(); 
    }catch(e){
           console.log(e);
    }
}



function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const Inputurl = document.getElementById('name').value;



    //Check Is Url valed  Or Not 
    CheckUrl(Inputurl);
     // Check if the URL is valid
    if(CheckUrl(Inputurl)){
         // If the URL is valid, send it to the server using the serverURL constant above
         postserver(serverURL +"data_ready"); 


    }else{
        alert("The Url Is Not Valid");
    }
 
      
}

// Function to send data to the server





// Export the handleSubmit function
export { handleSubmit };

