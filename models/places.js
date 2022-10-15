const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

  // [{
  //   name: 'H-Thai-ML',
  //   city: 'Seattle',
  //   state: 'WA',
  //   cuisines: 'Thai, Pan-Asian',
  //   pic: '/images/meal_tab.jpg'
  // }, {
  //   name: 'Coding Cat Cafe',
  //   city: 'Phoenix',
  //   state: 'AZ',
  //   cuisines: 'Coffee, Bakery',
  //   pic: '/images/meal_dis.jpg'
  // }]