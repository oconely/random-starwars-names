const uniqueRandomArray = require('unique-random-array')
const rickAndMortyNames = require('./rick-and-morty-names.json')

module.exports = {
  all: rickAndMortyNames,
  random: uniqueRandomArray(rickAndMortyNames),
}
