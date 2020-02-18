var searchInput = document.getElementById("searchbox");
const search = () => {
  document.getElementById("imgGrid").innerHTML = "";
  
if (searchInput.value == "") {
        alert("You can't search without an input");
      }
  let url = `https://images-api.nasa.gov/search?q=${searchInput.value}`;

  fetch(url)
    .then(async response => {
      if (response.ok == false) {
        console.log(
          "There is a problem with the status, it is currently ",
          response.status
        );
      }
      

      const data = await response.json();
      const dataValues = Object.values(data);
      //  getting an array of keys (parsing json level by level)
      var parsedArray = [];
      for (let i = 0; i < dataValues.length; i++) {
        let key = Object.values(dataValues[i]);
        for (let j = 0; j < key.length; j++) {
          let keyJ = Object.values(key[j]);
          for (let x = 0; x < keyJ.length; x++) {
            let keyX = Object.values(keyJ[x]);
            for (let y = 0; y <= keyX.length; y++) {
              let keyY = keyX[y];
              parsedArray.push(keyY);
            }
          }
        }
      }
      const stringArray = [];
      const ifString = "";
      for (let i_1 = 0; i_1 < parsedArray.length; i_1++) {
        let item = parsedArray[i_1];
        if (typeof item === typeof ifString) {
          if (item.includes(".json")) {
            stringArray.push(item);
          }
        }
      }
      //   fetching each json
      for (let i_2 = 0; i_2 < stringArray.length; i_2++) {
        getImgsFromJson(stringArray[i_2]);
      }
    })
    .catch(err => {
      console.log(err);
    });
    searchInput.value = "";
};

function record() {
  let lang = navigator.language || "en-US";
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start();
  document.getElementById('record').style.color = "red";
  function gotSpeech() {
    if (speechRec.resultValue) {
      document.getElementById("searchbox").value = speechRec.resultString;
      document.getElementById('record').style.color = "black";
    }
  }

}

searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submit-search").click();
  }
});