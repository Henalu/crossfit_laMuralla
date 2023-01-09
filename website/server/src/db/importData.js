const Shoes = require ('../models/scrapedShoes.model')

/**
 * Function to save scraped data into the DataBase
 * @param {JSON} data Exxpects an array of objects based on the Mongoose Model created
 */
const importData = async (data) => {
    try {
      await Shoes.create(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  module.exports = importData