const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  quantity: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  year: {
    type: Number
  },
  imageURL: {
    type: String,
    default: 'images/book.jpg'
  }
})

bookSchema.methods.getBook = function () {
  return `${this.title} was written in ${this.year} by ${this.name}.`
}


module.exports = mongoose.model('Book', bookSchema)

  // id: 1,
  // title: "The Shinobi Initiative",
  // description: "The reality-bending adventures of a clandestine service agency in the year 2166",
  // year: 2014,
  // imageURL: "/assets/shinobi-initiative.jpeg"



