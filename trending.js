const APIKEY = "AEVsKgezUpfMqYSUoHJv9QTsPouuMCtt";


fetch (`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}` + `&limit=20&rating=G`).then(res => {
    if(res.ok !== true){
        console.log(`There is a status problem, the status is ${res.status}`)
    }

    return res.json().then(jsonData => {
        
       let dataVals = Object.values(jsonData);
       dataVals = dataVals[0] 
        
        $(document).ready(function () {
            
            for (let i = 0; i < dataVals.length; i++){

                let embedUrl = dataVals[i].embed_url
                
                
                $(".gifRows").append(`<iframe src=${embedUrl} frameborder= 0  class= gifs col-md-2  width=300 ></iframe>`);

                

            }
            

        });
        
    })
}).catch(err=>console.log(err))


