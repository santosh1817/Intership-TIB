const mongoose = require('mongoose');
const MUUID = require('uuid-mongodb');
const Schema = mongoose.Schema;


const activitySchema = new Schema({
    
//   Activity:[ 
//     {  
//        uuid:{
//          type:'object',
//          value:{type:'Buffer'},
//          default:()=>MUUID.v1()
//        },  
//       name: {
//         type: String,
//         required:true,
//         unique:true
//       },
//       place:{
//         type: String,
//         required:true,
//         unique:true
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now
//       }
//     }
// ]

    // activity:{
    //     type:['object'],
    //     name:String,
    //     place:String
    // }

    uuid:{
            type:'object',
            value:{type:'Buffer'},
            default:()=>MUUID.v1()
        },  
    name: {
            type: String,
            required:true,
            unique:true
        },
    place:{
            type: String,
            required:true,
            unique:true
        },
    createdAt: {
            type: Date,
            default: Date.now
        }

});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = {
  Activity
};
