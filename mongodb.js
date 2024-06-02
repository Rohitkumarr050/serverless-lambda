// const { Schema, model } = require('mongoose');

// const lamdaTest = new Schema({
//     text: { type: String, required: true },
// },
//     {
//         timestamps: true,
//         collection: 'lamdaTest'
//     });
    
// const lamdaTestModel = model('lamdaTest', lamdaTest);

// async function addOrUpdateText() {
//     let lamdaTest = new lamdaTestModel({text:"testing lamda function"})
//     await lamdaTest.save();
//     const lamdacontent = await lamdaTestModel.find();

//     console.log("lamdacontent", lamdacontent)
//     return lamdacontent;

// }

// module.exports = {lamdaTestModel, addOrUpdateText}
