const fs = require('fs');

const myPath = `${__dirname}\\db\\myAPI.json`;


const API = {
    links:{
        id:{
            href:[]
        }
    }
};


const obj2String = JSON.stringify(API,undefined,3)



fs.writeFileSync(myPath, obj2String)







