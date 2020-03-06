const APIKEY = "AEVsKgezUpfMqYSUoHJv9QTsPouuMCtt";

function searchGif(){
    const input = document.getElementById("searchInput");
    let inputSearch = input.value;
fetch (`http://api.giphy.com/v1/gifs/search?q=${inputSearch}&limit=12&offset=0&rating=G&lang=en`+`&api_key=${APIKEY}`)
.then(response=> {
    if(response.ok !== true){
        console.log("Problem to fet response, response status is", response.status);   
    }

    return response.json().then(jsonData=> {
        const data = jsonData.data;
        console.log(data);
        
        $(document).ready(function () {
            $("#gifRow").empty();
            for (let i =0; i < data.length; i++){
                let embedUrl = data[i].embed_url;
                // console.log(embedUrl);
                
                $("#gifRow").append(`<iframe src=${embedUrl} frameborder= 0  class= gifs content-center ></iframe>`);
                
                
                
            }


        });
    })



    
}).catch(err=>console.log(err));

}

