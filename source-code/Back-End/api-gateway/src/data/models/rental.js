const Joi = require("joi");
const moment = require("moment");
const mongoose = require("mongoose");
const rentalScema = new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
      },
      isGold: {
        type: Boolean,
        default: false,
      },
      phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
      },
    }),
    required: true,
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255,
      },
      dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255,
      },
    }),
    required: true,
  },
  dateOut: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dateReturned: Date,
  rentalFee: {
    type: Number,
    min: 0,
  },
});
rentalScema.statics.findRental = function (customerId, movieId) {
  return this.findOne({ "customer._id": customerId, "movie._id": movieId });
};
rentalScema.methods.calculateRentalFee = function (customerId, movieId) {
  this.dateReturned = Date.now();
  const days = moment().diff(this.dateOut, "days");
  this.rentalFee = this.movie.dailyRentalRate * days;
};
const Rental = mongoose.model("Rental", rentalScema);
function validateRental(rental) {
  const schema = {
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required(),
  };

  return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;
