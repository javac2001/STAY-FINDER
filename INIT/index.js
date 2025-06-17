if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const mongoose = require('mongoose');
const dataListingModules = require("../models/dataListingModules.js");
const initData = require("./data.js")

async function main() {
    await mongoose.connect(process.env.CLOUD_MONGODB_ATLAS);
}
main().then(()=> {console.log("Connection Established by MONGOOSE")}).catch((err)=>{console.log(err);})


async function initialiseInDatabase(arr) {
    try {
        await dataListingModules.deleteMany({}).then(()=>{console.log("Clear in DB");}).catch((err)=>{console.log(err);});
        let data = arr.map((obj)=>{
            return {...obj, owner : '68501c96b82e09d23941a5f4'};
        });
        await dataListingModules.insertMany(data).then(()=>{console.log("Insert bulk data in Database");}).catch((err)=>{console.log(err);})
    } catch (error) {
        console.log(error);
    }
}

initialiseInDatabase(initData.data);