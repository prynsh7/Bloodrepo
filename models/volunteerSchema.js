import mongoose from 'mongoose'
const { Schema } = mongoose;


const requiredString = {
    type:  String,
    required : true,
}


const requiredNumber = {
      type: Number,
      required: true,
}

const volunteerSchema = new Schema({
  name:  requiredString,
  bloodGroup : requiredString,
  email : requiredString,
  description : String,
}, {
  timestamp: true
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;