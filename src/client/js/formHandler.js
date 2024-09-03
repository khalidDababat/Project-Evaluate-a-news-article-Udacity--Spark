const serverURL = "http://localhost:8000";







// Function to send data to the server

const postserver = async (url = "") => {
  const res = await fetch(url, {
    method: "post",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ url: Inputurl }),
  });
  try {
    const s = await res.json();
    console.log(s);
  } catch (e) {
    console.log(e);
  }
};

function handleSubmit(event) {
   event.preventDefault();
 
   const Inputurl = document.getElementById("name").value;
   
  // If the URL is valid, send it to the server using the serverURL constant above
  postserver(serverURL + "/apipost");
}

// Export the handleSubmit function
export { handleSubmit };
