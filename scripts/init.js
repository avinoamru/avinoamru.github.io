var APIKey = "UGmP7NlevUlqekQ5mfCORmTf4acrgy2e8XyRe81P";

const getImgsFromJson = URL => {
    const imgArray = [];
    fetch(URL).then(async response => {
      if (response.ok !== true) {
        console.log(
          "There is a problem with the status, it is currently ",
          response.status
        );
      }
      try {
        const data = await response.json();
        const dataValues = Object.values(data);
        for (let i = 0; i < dataValues.length; i++) {
          if (dataValues[i].includes("orig") && dataValues[i].includes(".jpg")) {
            let img = dataValues[i];
            imgArray.push(img);
          }
        }
        displayImgsFromArray(imgArray, "imgGrid");
      } catch (err) {
        console.log(err);
      }
    });
  };

  const displayImgsFromArray = (arrayOfImgs, classToDisplayIn) => {
    let showImages = document.getElementById(classToDisplayIn);
  
    for (let i = 0; i < arrayOfImgs.length; i++) {
      let img = document.createElement("img");
      img.className = `${classToDisplayIn} col-md-4`;
      showImages.append(img);
      img.src = arrayOfImgs[i];
    }
  };