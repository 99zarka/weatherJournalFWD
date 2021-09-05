
/* Global Variables */
const port = 6969;
const serverURL = `http://localhost:${port}`;
const buttonGenerate = document.getElementById('generate');
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const zip = document.getElementById('zip');
// Personal API Key for OpenWeatherMap API
const key = "&appid=329b0cafafe216d6fb964f0f548535e9&units=metric";
const userfeelings = document.getElementById('feelings');

const dateDisplay = document.getElementById('date');
const temperatureDisplay = document.getElementById('temp');
const userfeelingsDisplay = document.getElementById('content');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.toLocaleString('default', { month: 'long', day: 'numeric', year:'numeric'});

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/* Function to Check if the API returns the intended value */
function validateAPI(dataReceived){
  try{
    return dataReceived.main.temp;
  }
  catch(error) {
    console.log("error", error);
    alert("Enter a valid zip code.")
    return "";
    //Returns an empty string if the zip code is invalid and shows an error message.
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/* Function to GET Web API Data*/
const retrieveData = async (url) =>{ 
  const request = await fetch(url);
  try {
    const dataReceived = await request.json();
    return dataReceived;
  }
  catch(error) {
    console.log("error", error);
  }
}

/* Function to POST data */
const postData = async (url, data)=>{
  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
      console.log("error", error);
    }
}

/* Function to GET Project Data */
const updateUI = async (url) =>{
  let request;
  try{
    request = await fetch(url);
  }catch(error) {
    console.log("error: Can't retrieve data from local server.\n", error);
    alert("Local server is down.");
  }
  
  try {
    const storedData = await request.json();
    dateDisplay.innerHTML = `Date: ${storedData.date}.`;
    temperatureDisplay.innerHTML = `Temperature: ${storedData.temperature}° C.`;
    userfeelingsDisplay.innerHTML = `User feedback: ${storedData.userResponse}.`;
  }
  catch(error) {
    console.log("error", error);
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

/* Driver Code, Promise Chain */
buttonGenerate.addEventListener('click',()=>{
  retrieveData(baseURL+zip.value+key) //1- Import forecast data from the API
  .then(function(dataReceived){
    postData(`${serverURL}/addNewData`, { //2- Export forecast data to the server
      temperature:validateAPI(dataReceived),
      date:newDate,
      userResponse:userfeelings.value});
  })
  .then(function(){
    updateUI(`${serverURL}/forecast`); //3- Import forecast data from the server
  });
});
