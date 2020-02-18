var APIKey = "UGmP7NlevUlqekQ5mfCORmTf4acrgy2e8XyRe81P";
const apod = (whereTo) => {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
    .then(async response => {
      if (response.ok == false) {
        console.log(
          "There is a problem with the status, it is currently ",
          response.status
        );
      }
      const data = await response.json();
      const getImg = data.hdurl;
      const img = document.getElementById(whereTo);
      img.src = getImg;
      
    })
    .catch(err => {
      console.log("There is an error, the error is:", err);
    });
};
apod("apod")
