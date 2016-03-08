var mongoose = require('mongoose');

var CategoryRefSchema = new mongoose.Schema({
  catType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('categoryRef', CategoryRefSchema);
