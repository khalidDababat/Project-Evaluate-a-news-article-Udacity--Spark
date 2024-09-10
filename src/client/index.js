// js files
import { handleSubmit } from './js/formHandler';

//sass files
import './styles/base.scss'; 
import './styles/footer.scss'; 
import './styles/form.scss'; 
import './styles/header.scss';
import './styles/resets.scss';



const submitButton = document.getElementById('submitButton'); 
submitButton.addEventListener('click',handleSubmit);

// alert("I EXIST My Khalid");



export{handleSubmit  }; 

