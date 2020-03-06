const mongoose = require('mongoose');
//const MUUID = require('uuid-mongodb');
const Schema = mongoose.Schema;

const historySchema = new Schema({
  
  t: {
    type: Date,
    required: false,
    unique: false
  },
  o: {
    type: String,
    required: false,
    unique: false
  },
  d: {
    type: Object
  }
});



// tourSchema.pre('save', function(next) {
//     console.log('inside pre hooks')
//     const tour = this;
//     if (tour.isNew) {
//     //    console.log(Tour)     
//     //    console.log(tour.uuid)
//         next();
//     } else {
// //        console.log("tour updated")
//       next();
//     }
//   });

const History = mongoose.model('History', historySchema);

module.exports = {
  History
};
