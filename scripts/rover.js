var date = document.getElementById("dateInput");
const getRover = () => {
  
  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date.value}&api_key=${APIKey}`
  )
    .then(async response => {
      if (response.ok != true) {
        console.log(
          "There is a problem with the response, the status is:",
          response.status
        );
      } else {
        const data = await response.json();
        document.getElementById("imgGrid").innerHTML = "";
        const imgArray = [];
        const dataValues = Object.values(data);
        console.log(dataValues);
        for (let i = 0; i < dataValues.length; i++) {
          let firstLvl = dataValues[i];
          for (let j = 0; j < firstLvl.length; j++) {
            let secondLvl = firstLvl[j];
            imgArray.push(Object.values(secondLvl)[3]);
          }
        }
        displayImgsFromArray(imgArray, "imgGrid");
      }
    })
    .catch(err => {
      console.log("There is an error:", err);
    });
};

 
date.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("mars").click();
  }
});