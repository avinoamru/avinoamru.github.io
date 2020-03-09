const APIKEY = "AEVsKgezUpfMqYSUoHJv9QTsPouuMCtt";


 fetch(
  `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}` +
    `&limit=24&rating=G`
)
  .then(res => {
    if (res.ok !== true) {
      console.log(`There is a status problem, the status is ${res.status}`);
    }

    return res.json().then(jsonData => {
      let dataVals = Object.values(jsonData);
      dataVals = dataVals[0];

      $(document).ready(function() {
        for (let index = 0; index < dataVals.length; index++) {
          let embedUrl = dataVals[index].embed_url;

          $(".iphone-content").append(
            `<iframe src=${embedUrl} frameborder= 0  class= gifs ></iframe>`
          );
        }
      });
    });
  })
  .catch(err => console.log(err));


const input = document.getElementById("search-box");


function searchGif() {
 
  let inputSearch = input.value;
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${inputSearch}&limit=24&offset=0&rating=G&lang=en` +
      `&api_key=${APIKEY}`
  )
    .then(response => {
      if (response.ok !== true) {
        console.log(
          "Problem to get response, response status is",
          response.status
        );
      }

      return response.json().then(jsonData => {
        const data = jsonData.data;
        

        $(document).ready(function() {
          $(".iphone-content").empty();
          for (let index = 0; index < data.length; index++) {
            let embedUrl = data[index].embed_url;
            // console.log(embedUrl);

            $(".iphone-content").append(
              `<iframe src=${embedUrl} frameborder= 0  class= gifs ></iframe>`
            );
          }
        });
      });
    })
    .catch(err => console.log(err));
}

// search when pressing enter if the focus is on the input box
input.addEventListener("keypress",(key)=>{
    if (key.code == "Enter"){
        searchGif()
    }
})